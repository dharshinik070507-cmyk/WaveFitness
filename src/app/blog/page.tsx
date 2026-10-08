import React from "react";
import Link from "next/link";
import { Section, Container, HeadingLockup, Card } from "@/components/ui";
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
            <Link href="/" className="font-wordmark text-xs font-bold text-text-muted uppercase tracking-button hover:underline">
              &larr; Back to Home
            </Link>
          </div>

          <HeadingLockup
            eyebrow="07 / TAMBARAM FITNESS BLOG"
            lines={["LOCAL FITNESS &", "NUTRITION GUIDES"]}
            emphasisLine={1}
            bar
          />

          <p className="font-body text-body text-text-muted mt-4 max-w-2xl">
            Expert advice on natural lifting, Indian meal nutrition, and workout consistency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-meta font-wordmark uppercase tracking-button mb-3">
                    <span className="text-blue font-bold">{post.category}</span>
                    <span className="text-text-muted flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-text hover:text-blue transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="font-body text-xs text-text-muted mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-wordmark text-xs font-bold uppercase tracking-button text-text hover:text-blue flex items-center justify-between"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4 text-blue" />
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
