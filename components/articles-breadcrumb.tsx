'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ArticlesBreadcrumbProps {
  articleTitle?: string;
}

export function ArticlesBreadcrumb({ articleTitle }: ArticlesBreadcrumbProps) {
  const pathname = usePathname();
  const isArticleDetail = pathname?.startsWith('/articles/') && pathname !== '/articles';

  return (
    <nav className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 border-b border-border/50">
      <div className="max-w-3xl mx-auto mt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href="/"
            className="hover:text-primary hover:underline transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href="/articles"
            className="hover:text-primary hover:underline transition-colors"
          >
            Articles
          </Link>
          {isArticleDetail && articleTitle && (
            <>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground truncate max-w-md" title={articleTitle}>
                {articleTitle}
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
