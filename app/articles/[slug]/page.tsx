import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { ArticlesBreadcrumb } from '@/components/articles-breadcrumb';
import { ArticleMarkdown } from '@/components/article-markdown';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const url = `https://jenjacobsen.com/articles/${slug}`;

  return {
    title: article.frontmatter.title,
    description: article.frontmatter.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.summary,
      url,
      type: 'article',
      publishedTime: article.frontmatter.publishedAt,
      modifiedTime: article.frontmatter.updatedAt,
      images: [
        {
          url: '/og-default.png',
          width: 1200,
          height: 630,
          alt: article.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.frontmatter.title,
      description: article.frontmatter.summary,
      images: ['/og-default.png'],
    },
  };
}

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Calculate reading time (rough estimate: 200 words per minute)
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const readingTime = calculateReadingTime(article.content);
  const updatedDate = new Date(article.frontmatter.updatedAt);
  const formattedDate = format(updatedDate, 'MMM yyyy');

  return (
    <>
      <ArticlesBreadcrumb articleTitle={article.frontmatter.title} />
      <article className="pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          {article.frontmatter.title}
        </h1>
        
        <div className="text-sm text-muted-foreground mb-10">
          Updated {formattedDate} • {readingTime} min read
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none" style={{
          lineHeight: '1.75',
        }}>
          <ArticleMarkdown content={article.content} />
        </div>
      </div>
    </article>
    </>
  );
}
