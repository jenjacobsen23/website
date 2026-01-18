'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { usePathname } from 'next/navigation';
import { trackGumroadClick, isGumroadLink } from '@/lib/analytics';
import { ReactNode } from 'react';

interface ArticleMarkdownProps {
  content: string;
}

export function ArticleMarkdown({ content }: ArticleMarkdownProps) {
  const pathname = usePathname();

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-semibold mt-10 mb-5 text-foreground" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="mb-6 text-foreground leading-relaxed text-base" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside mb-4 space-y-2 text-foreground" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="text-foreground" {...props} />
        ),
        code: ({ node, inline, className, children, ...props }: any) => {
          // Block code blocks have a language class (e.g., "language-typescript")
          // Inline code has no language class
          const isInline = inline === true || !className?.includes('language-');
          
          if (isInline) {
            return (
              <code
                className="px-1.5 py-0.5 bg-muted text-foreground rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          }
          return (
            <code
              className="block p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono mb-4"
              {...props}
            >
              {children}
            </code>
          );
        },
        pre: ({ node, children, ...props }: any) => (
          <pre className="mb-4 overflow-x-auto" {...props}>
            {children}
          </pre>
        ),
        a: ({ node, href, children, ...props }: any) => {
          const handleClick = () => {
            if (href && isGumroadLink(href)) {
              // Extract link text from children - handle both string and ReactNode cases
              let linkText = 'Link';
              if (typeof children === 'string') {
                linkText = children;
              } else if (Array.isArray(children)) {
                linkText = children
                  .map((child) => (typeof child === 'string' ? child : child?.toString() || ''))
                  .join('')
                  .trim() || 'Link';
              } else if (children) {
                linkText = String(children);
              }
              trackGumroadClick(pathname || '/', linkText, href);
            }
          };

          return (
            <a
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href={href}
              onClick={handleClick}
              {...props}
            >
              {children}
            </a>
          );
        },
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground"
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
