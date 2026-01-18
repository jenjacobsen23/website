import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import { Card, CardContent } from '@/components/ui/card';
import { ArticlesBreadcrumb } from '@/components/articles-breadcrumb';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Evergreen technical notes and guides on shipping production-ready apps.',
  alternates: {
    canonical: 'https://jenjacobsen.com/articles',
  },
  openGraph: {
    title: 'Articles | Jen Jacobsen',
    description: 'Evergreen technical notes and guides on shipping production-ready apps.',
    url: 'https://jenjacobsen.com/articles',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jen Jacobsen - Articles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles | Jen Jacobsen',
    description: 'Evergreen technical notes and guides on shipping production-ready apps.',
    images: ['/og-default.png'],
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <>
      <ArticlesBreadcrumb />
      <section className="pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Articles</h1>
          <p className="text-base text-muted-foreground mb-2">
            Technical notes and guides.{' '}
            {/* <br />
            <Link
              href="/"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Back to main website →
            </Link> */}
          </p>
        </div>

          {articles.length === 0 ? (
            <p className="text-muted-foreground">No articles yet. Check back soon!</p>
          ) : (
            <div className="space-y-6">
              {articles.map((article) => (
                <Card key={article.slug} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="block group"
                    >
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {article.frontmatter.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {article.frontmatter.summary}
                      </p>
                      {article.frontmatter.tags && article.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.frontmatter.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="text-sm text-primary font-medium group-hover:underline inline-flex items-center gap-1">
                        Read article →
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
