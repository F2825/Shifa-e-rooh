import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type Article = CollectionEntry<'articles'>;

/** Drafts appear while previewing locally (npm run dev) but never on the live site. */
export async function getArticles(lang: Lang): Promise<Article[]> {
  const all = await getCollection('articles', (a) =>
    a.id.startsWith(`${lang}/`) && (import.meta.env.DEV || !a.data.draft));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const slugOf = (a: Article) => a.id.split('/').slice(1).join('/');

export const readingMinutes = (a: Article) =>
  Math.max(1, Math.round((a.body ?? '').split(/\s+/).filter(Boolean).length / 200));
