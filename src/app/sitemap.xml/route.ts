import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suman-basnet.com.np';
  
  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ja: `${baseUrl}/ja`,
        },
      },
    },
    {
      url: `${baseUrl}/ja`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ja: `${baseUrl}/ja`,
        },
      },
    },
  ];
}