import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { InnerPage } from '@/components/site';

const pages = [
  'programs',
  'coaching',
  'membership',
  'gallery',
  'about',
  'contact',
  'privacy',
  'terms'
] as const;

type PageSlug = (typeof pages)[number];

const pageMeta: Record<PageSlug, { title: string; desc: string }> = {
  programs: {
    title: 'Training Programs | Strength, Cardio & Functional Training',
    desc: 'Explore strength & conditioning, functional movement, cardio endurance and personal coaching at Wave Fitness, Camp Road Junction, Tambaram East.'
  },
  coaching: {
    title: 'Personal Training & Coaching | 1-on-1 Guidance',
    desc: 'Expert personal fitness coaching and form correction in Tambaram East. Build sustainable strength and reach your goals with structured guidance.'
  },
  membership: {
    title: 'Gym Membership Plans & Pricing | From ₹999/Month',
    desc: 'Affordable, transparent unisex gym memberships in Selaiyur, Tambaram East. Monthly pass from ₹999, quarterly 90-day transformation from ₹2,499.'
  },
  gallery: {
    title: 'Training Facility & Gym Floor Gallery',
    desc: 'Look inside Wave Fitness at Camp Road Junction. Explore our free weights zone, strength equipment, cardio suite, and functional training space.'
  },
  about: {
    title: 'About Wave Fitness | Natural Training Gym in Tambaram East',
    desc: 'Wave Fitness is dedicated to natural strength, disciplined movement, and a welcoming community at Camp Road Junction, Selaiyur, Chennai.'
  },
  contact: {
    title: 'Contact Us & Location Directions | Camp Road Junction',
    desc: 'Visit Wave Fitness at No.2 Bharathi Lenin Complex, School St, Camp Road Junction, Selaiyur, Tambaram East. Call 07397 398 749 or chat on WhatsApp.'
  },
  privacy: {
    title: 'Privacy Policy & Data Protection',
    desc: 'Read the Wave Fitness Privacy Policy. Learn how we handle customer inquiries, cookie data, personal information, and your data protection rights.'
  },
  terms: {
    title: 'Terms & Conditions | Gym Rules & Policies',
    desc: 'Review the membership terms, facility rules, code of conduct, and physical readiness policies for training at Wave Fitness unisex gym.'
  }
};

export function generateStaticParams() {
  return pages.map(slug => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = pageMeta[slug as PageSlug];
  if (!meta) return { title: 'Wave Fitness' };
  
  return {
    title: meta.title,
    description: meta.desc,
    openGraph: {
      title: `${meta.title} | Wave Fitness`,
      description: meta.desc,
      url: `/${slug}`,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${meta.title} | Wave Fitness`,
      description: meta.desc
    },
    alternates: {
      canonical: `/${slug}`
    }
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!pages.includes(slug as PageSlug)) {
    notFound();
  }
  return <InnerPage slug={slug} />;
}
