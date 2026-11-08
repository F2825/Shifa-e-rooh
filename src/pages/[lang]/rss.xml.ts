import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { langPaths, t, url, type Lang } from '../../lib/i18n';
import { getArticles, slugOf } from '../../lib/articles';

export const getStaticPaths = langPaths;

export async function GET({ params, site }: APIContext) {
  const lang = params.lang as Lang;
  const s = t(lang);
  const articles = await getArticles(lang);
  return rss({
    title: s.siteName,
    description: s.tagline,
    site: new URL(url(`${lang}/`), site).href,
    customData: `<language>${lang}</language>`,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.summary,
      pubDate: a.data.date,
      link: url(`${lang}/articles/${slugOf(a)}/`),
    })),
  });
}
