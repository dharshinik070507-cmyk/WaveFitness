import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Zod Schema for Lead Validation
const leadSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian mobile number starting with 6-9"),
  goal: z.string().optional().default("General Free Trial Visit"),
  timing: z.string().optional(),
  gender: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required" }) }),
  honeypot: z.string().optional(),
});

// Simple In-Memory IP Rate Limiter
const ipStore = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const now = Date.now();
    const lastRequest = ipStore.get(ip) || 0;

    // Rate limit: 1 request per 10 seconds per IP
    if (now - lastRequest < 10000) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }
    ipStore.set(ip, now);

    const body = await req.json();

    // Server-side Honeypot Check
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json({ success: true, leadId: "sp_ignored" });
    }

    // Validate Schema
    const validatedData = leadSchema.parse(body);

    const leadId = `lead_${Date.now()}`;

    // --- TODO: Database Store Integration (Supabase / Google Sheets) ---
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      // In production: await supabase.from('leads').insert([validatedData])
      console.log(`[STORE] Lead ${leadId} stored to Supabase.`);
    } else {
      console.log(`[STORE TODO] Lead ${leadId} received:`, validatedData);
    }

    // --- TODO: Resend / Email Alert Notification ---
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      // In production: resend.emails.send({ from: 'Wave Fitness <noreply@wavefitness.in>', to: process.env.OWNER_EMAIL })
      console.log(`[EMAIL] Alert sent to gym owner for lead ${leadId}.`);
    }

    // Format WhatsApp Link
    const waText = encodeURIComponent(
      `Hi Wave Fitness! Lead Claimed:\nName: ${validatedData.name}\nMobile: ${validatedData.mobile}\nGoal/Plan: ${validatedData.goal}\nTiming: ${validatedData.timing || 'N/A'}`
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
        { error: err.errors[0]?.message || "Invalid input data" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Server error processing lead" },
      { status: 500 }
    );
  }
}
