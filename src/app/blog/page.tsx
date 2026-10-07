import React from "react";
import Link from "next/link";
import { Section, Container, SectionHeading, Card } from "@/components/ui";
import { gymData, blogPosts } from "@/content/gymData";
import { Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Fitness & Nutrition Blog | ${gymData.name} Tambaram`,
  description: `Local gym buying guides, workout plans, natural muscle building tips, and South Indian fat loss diets for Tambaram residents.`,
};

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Section variant="bg">
        <Container>
          <div className="mb-6">
            <Link href="/" className="font-wordmark text-xs font-bold text-red-text uppercase tracking-poster hover:underline">
              &larr; Back to Home
            </Link>
          </div>

          <SectionHeading
            indexTag="07"
            eyebrow="TAMBARAM FITNESS BLOG"
            title="LOCAL FITNESS & NUTRITION GUIDES"
            subtitle="Expert advice on natural lifting, Indian meal nutrition, and workout consistency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-wordmark uppercase tracking-poster mb-3">
                    <span className="text-red-text font-bold">{post.category}</span>
                    <span className="text-text-muted flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-red" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-text hover:text-red transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="font-body text-xs text-text-muted mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-wordmark text-xs font-bold uppercase tracking-poster text-text hover:text-red-text flex items-center justify-between"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4 text-red" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
