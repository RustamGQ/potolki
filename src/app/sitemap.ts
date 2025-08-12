import { MetadataRoute } from 'next';
import { cities } from '../lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com'; // Замените на ваш домен
  
  // Основные страницы
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/distant-cities`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Городские страницы
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: city.isMain ? 0.9 : 0.7,
  }));

  // Городские подстраницы
  const citySubPages = cities.flatMap((city) => [
    {
      url: `${baseUrl}/${city.slug}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: city.isMain ? 0.8 : 0.6,
    },
    {
      url: `${baseUrl}/${city.slug}/works`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: city.isMain ? 0.8 : 0.6,
    },
    {
      url: `${baseUrl}/${city.slug}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: city.isMain ? 0.8 : 0.6,
    },
    {
      url: `${baseUrl}/${city.slug}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: city.isMain ? 0.8 : 0.6,
    },
    {
      url: `${baseUrl}/${city.slug}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: city.isMain ? 0.7 : 0.5,
    },
    {
      url: `${baseUrl}/${city.slug}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: city.isMain ? 0.6 : 0.4,
    },
  ]);

  return [...staticPages, ...cityPages, ...citySubPages];
}
