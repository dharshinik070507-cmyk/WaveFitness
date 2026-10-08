import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gymData } from "@/content/gymData";
import { HeadingLockup, Button, Photo } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return gymData.programs.map((p) => ({
    slug: p.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const program = gymData.programs.find((p) => p.id === params.slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: `${program.title} | ${gymData.name} Tambaram`,
    description: program.description,
  };
}

export default function ProgramSlugPage({ params }: { params: { slug: string } }) {
  const program = gymData.programs.find((p) => p.id === params.slug);
  if (!program) notFound();

  return (
    <main className="min-h-screen bg-bg text-text p-4 sm:p-8 font-body flex flex-col items-center">
      <div className="max-w-3xl w-full bg-surface-1 border border-line p-6 sm:p-8 space-y-6">
        <Link href="/programs" className="inline-flex items-center gap-1.5 font-wordmark text-xs font-bold uppercase text-text-muted hover:text-text tracking-button">
          <ArrowLeft className="w-4 h-4" /> Back to Programs
        </Link>

        <HeadingLockup
          as="h1"
          eyebrow={`Led by ${program.trainer}`}
          lines={[program.title]}
          emphasisLine={0}
          bar={true}
        />

        <Photo slotKey={`program_${program.id.replace("-", "_")}`} variant="panel" />

        <p className="font-body text-body-lg text-text-muted leading-relaxed">
          {program.description}
        </p>

        <div className="p-4 bg-surface-2 border border-line space-y-2">
          <span className="font-wordmark text-xs font-bold text-text uppercase tracking-button block">
            Program Overview
          </span>
          <ul className="list-disc list-inside text-xs text-text-muted space-y-1">
            <li>Personal form watching on every set</li>
            <li>Calorie & protein target guidance for South Indian diets</li>
            <li>Progressive overload weight tracking</li>
          </ul>
        </div>

        <div className="pt-4 flex gap-4">
          <Link href="/#plans" className="flex-1">
            <Button variant="primary" size="lg" className="w-full">
              Claim Free Trial
            </Button>
          </Link>
          <a href={`tel:${gymData.contact.phoneTel}`}>
            <Button variant="secondary" size="lg">
              Call Trainer
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}
