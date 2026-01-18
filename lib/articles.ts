import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleFrontmatter {
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

function getArticleSlug(filename: string): string {
  return filename.replace(/\.mdx$/, '');
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = getArticleSlug(fileName);
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as ArticleFrontmatter,
        content,
      };
    });

  // Sort by publishedAt descending (newest first)
  return allArticlesData.sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedAt).getTime();
    const dateB = new Date(b.frontmatter.publishedAt).getTime();
    return dateB - dateA;
  });
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ArticleFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}
