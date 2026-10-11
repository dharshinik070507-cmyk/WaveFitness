import type { MetadataRoute } from 'next';
import { brand } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = brand.siteUrl;
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/programs', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/membership', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/coaching', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/gallery', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const }
  ];

  return routes.map(r => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority
  }));
}
