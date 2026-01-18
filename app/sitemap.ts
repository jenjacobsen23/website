import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jenjacobsen.com';
  const articles = getAllArticles();

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.frontmatter.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: articles.length > 0 ? new Date(articles[0].frontmatter.updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...articleUrls,
  ];
}
