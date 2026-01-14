import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://jenjacobsen.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_debug/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
