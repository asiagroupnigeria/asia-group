import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Root directory for all CMS content
const CONTENT_DIR = path.join(process.cwd(), 'public/admin/content'); // Note: config.yml saves to content/ but we need to ensure where it actually saves. Wait, config.yml says folder: "content/news", so it saves to `content/news` at the root of the repo.

// Let's adjust CONTENT_DIR to be at the root of the project
const ROOT_CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * Business Logic:
 * This utility parses markdown files created by the Sveltia Git-based CMS.
 * By abstracting the file system reads here, we ensure that the frontend 
 * components remain decoupled from the storage layer (Git/Filesystem).
 * Future developers: If the CMS is ever migrated to an API-based system 
 * (like Sanity or Strapi), only this file needs to be updated.
 */

export interface CMSDocument<T = any> {
  slug: string;
  data: T;
  content: string;
}

/**
 * Retrieves all entries from a specific CMS collection folder.
 * @param collectionName The name of the folder inside `content/` (e.g., 'news', 'businesses')
 * @returns Array of parsed documents
 */
export function getCollection<T = any>(collectionName: string): CMSDocument<T>[] {
  const collectionDir = path.join(ROOT_CONTENT_DIR, collectionName);
  
  if (!fs.existsSync(collectionDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(collectionDir);
  
  const entries = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return getEntryBySlug<T>(collectionName, slug);
    })
    .filter((entry): entry is CMSDocument<T> => entry !== null);

  // Optional: sort by order if it exists, or date
  return entries.sort((a: any, b: any) => {
    if (a.data.order && b.data.order) {
      return a.data.order - b.data.order;
    }
    if (a.data.date && b.data.date) {
      return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    }
    return 0;
  });
}

/**
 * Retrieves a single entry by its slug.
 * @param collectionName The name of the collection folder.
 * @param slug The filename without the .md extension.
 */
export function getEntryBySlug<T = any>(collectionName: string, slug: string): CMSDocument<T> | null {
  const fullPath = path.join(ROOT_CONTENT_DIR, collectionName, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  return {
    slug,
    data: data as T,
    content,
  };
}
