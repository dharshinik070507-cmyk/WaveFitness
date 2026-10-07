import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, gymData } from "@/content/gymData";
import { Section, Container, Button } from "@/components/ui";
import { Clock, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${gymData.name}`,
    description: post.excerpt,
    alternates: {
      canonical: `https://wavefitnesstambaram.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://wavefitnesstambaram.in/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": gymData.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": gymData.name,
    },
    "mainEntityOfPage": `https://wavefitnesstambaram.in/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-bg text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Section variant="bg">
        <Container className="max-w-3xl">
          <div className="mb-6">
            <Link href="/blog" className="font-wordmark text-xs font-bold text-red-text uppercase tracking-poster hover:underline flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-wordmark uppercase tracking-poster mb-3">
            <span className="text-red-text font-bold">{post.category}</span>
            <span className="text-text-dim">•</span>
            <span className="text-text-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-red" /> {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-h1 font-black text-text uppercase mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="p-8 bg-surface-1 border border-line rounded-r-0">
            <div className="prose max-w-prose text-xs sm:text-sm text-text-muted font-body leading-relaxed space-y-4 whitespace-pre-line">
              {post.contentMarkdown}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-body text-xs text-text-muted">
              Published by <strong>{gymData.name}</strong> • Camp Road CH-73
            </span>
            <Link href="/contact">
              <Button variant="primary">Book Free Trial Visit</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
