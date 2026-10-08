import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  goal: z.string().optional().default("General Free Trial Visit"),
  timing: z.string().optional(),
  gender: z.string().optional(),
  note: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().optional().default(true),
  honeypot: z.string().optional(),
});

// Sliding-window IP Rate Limiter (5 requests per 10 minutes)
interface RateRecord {
  timestamps: number[];
}
const rateStore = new Map<string, RateRecord>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const now = Date.now();
    const windowMs = 10 * 60 * 1000; // 10 minutes

    const record = rateStore.get(ip) || { timestamps: [] };
    record.timestamps = record.timestamps.filter((t) => now - t < windowMs);

    if (record.timestamps.length >= 5) {
      return NextResponse.json(
        { error: "Too many lead requests from your IP. Please try again in 10 minutes." },
        { status: 429 }
      );
    }

    record.timestamps.push(now);
    rateStore.set(ip, record);

    const body = await req.json();

    // Server-side Honeypot Check
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json({ success: true, leadId: "sp_ignored" });
    }

    const validated = leadSchema.parse(body);
    const phoneNumber = validated.mobile || validated.phone || "7397398749";

    const leadId = `lead_${now}`;
    const leadRecord = {
      lead_id: leadId,
      name: validated.name,
      phone: phoneNumber,
      goal: validated.goal,
      timing: validated.timing || null,
      note: validated.note || validated.message || null,
      created_at: new Date(now).toISOString(),
    };

    // Supabase Store Integration
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
          },
          body: JSON.stringify(leadRecord),
        });
      } catch (err) {
        console.warn("[LEAD API] Supabase insert error:", err);
      }
    } else {
      if (process.env.NODE_ENV === "development") {
        console.warn("[LEAD API DEV WARN] SUPABASE_URL/SUPABASE_ANON_KEY missing. Fallback log:", leadRecord);
      }
    }

    // Resend Email Alert Integration
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Wave Fitness Leads <leads@wavefitnesstambaram.in>",
            to: process.env.OWNER_EMAIL || "dharshinik070507@gmail.com",
            subject: `New Lead: ${validated.name} (${phoneNumber})`,
            text: `New trial request:\nName: ${validated.name}\nPhone: ${phoneNumber}\nGoal: ${validated.goal}\nNote: ${validated.note || 'N/A'}`,
          }),
        });
      } catch (err) {
        console.warn("[LEAD API] Resend email error:", err);
      }
    } else {
      if (process.env.NODE_ENV === "development") {
        console.warn("[LEAD API DEV WARN] RESEND_API_KEY missing. Email skipped for lead:", leadId);
      }
    }

    // WhatsApp Direct Link
    const waText = encodeURIComponent(
      `Hi Wave Fitness! Lead Claimed:\nName: ${validated.name}\nPhone: ${phoneNumber}\nGoal: ${validated.goal}`
    );
    const whatsappUrl = `https://wa.me/917397398749?text=${waText}`;

    return NextResponse.json({
      success: true,
      leadId,
      whatsappUrl,
    });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message || "Invalid input data" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Server error processing lead" },
      { status: 500 }
    );
  }
}
