export const LANGS = ['en', 'ur', 'ar'] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_META: Record<Lang, { label: string; dir: 'ltr' | 'rtl'; locale: string }> = {
  en: { label: 'English', dir: 'ltr', locale: 'en-GB' },
  ur: { label: 'اردو', dir: 'rtl', locale: 'ur-PK' },
  ar: { label: 'العربية', dir: 'rtl', locale: 'ar' },
};

const strings = {
  en: {
    siteName: 'Shifa-e-Rooh',
    tagline: 'Reflections on the soul, ethics and meaning — rooted in the Islamic philosophical tradition, in conversation with secular values.',
    home: 'Home', articles: 'Articles', themes: 'Themes', about: 'About',
    latest: 'Recent writings', allArticles: 'All articles', exploreThemes: 'Explore by theme',
    empty: 'The first writings are being prepared. Please return soon.',
    emptyTheme: 'Nothing has been written under this theme yet.',
    minRead: (n: number) => `${n} min read`,
    search: 'Search articles…', all: 'All', noResults: 'No articles match your search.',
    draft: 'Draft — visible only in preview',
    back: 'All articles', moreIn: 'More in this theme',
    epigraph: 'And We send down of the Qurʾān that which is healing and mercy for the believers.',
    epigraphRef: 'Al-Isrāʾ 17:82',
    footer: 'Written with care. Read slowly.',
    language: 'Language', toggleTheme: 'Switch light / dark',
  },
  ur: {
    siteName: 'شفائے روح',
    tagline: 'روح، اخلاق اور معنی پر غور و فکر — اسلامی فکری روایت کی روشنی میں، سیکولر اقدار سے مکالمہ۔',
    home: 'سرورق', articles: 'مضامین', themes: 'موضوعات', about: 'تعارف',
    latest: 'تازہ تحریریں', allArticles: 'تمام مضامین', exploreThemes: 'موضوعات کے لحاظ سے',
    empty: 'پہلی تحریریں زیرِ تکمیل ہیں۔ براہِ کرم جلد دوبارہ تشریف لائیں۔',
    emptyTheme: 'اس موضوع پر ابھی کچھ نہیں لکھا گیا۔',
    minRead: (n: number) => `${n} منٹ کا مطالعہ`,
    search: 'مضامین تلاش کریں…', all: 'سب', noResults: 'آپ کی تلاش سے کوئی مضمون نہیں ملا۔',
    draft: 'مسودہ — صرف پیش نظارہ میں نظر آتا ہے',
    back: 'تمام مضامین', moreIn: 'اس موضوع پر مزید',
    epigraph: 'اور ہم قرآن میں سے وہ نازل کرتے ہیں جو ایمان والوں کے لیے شفا اور رحمت ہے۔',
    epigraphRef: 'سورۃ الاسراء ۱۷:۸۲',
    footer: 'محبت سے لکھا گیا۔ ٹھہر کر پڑھیے۔',
    language: 'زبان', toggleTheme: 'روشن / تاریک انداز',
  },
  ar: {
    siteName: 'شفاء الروح',
    tagline: 'تأملات في الروح والأخلاق والمعنى — متجذّرة في التراث الفلسفي الإسلامي، وفي حوار مع القيم العلمانية.',
    home: 'الرئيسية', articles: 'المقالات', themes: 'الموضوعات', about: 'عن الموقع',
    latest: 'أحدث الكتابات', allArticles: 'جميع المقالات', exploreThemes: 'تصفّح حسب الموضوع',
    empty: 'الكتابات الأولى قيد الإعداد. نرجو أن تعودوا قريبًا.',
    emptyTheme: 'لم يُكتب شيء في هذا الموضوع بعد.',
    minRead: (n: number) => `${n} دقائق قراءة`,
    search: 'ابحث في المقالات…', all: 'الكل', noResults: 'لا توجد مقالات مطابقة لبحثك.',
    draft: 'مسودة — تظهر في المعاينة فقط',
    back: 'جميع المقالات', moreIn: 'المزيد في هذا الموضوع',
    epigraph: '',
    epigraphRef: 'سورة الإسراء: ٨٢',
    footer: 'كُتب بعناية. اقرأ على مهل.',
    language: 'اللغة', toggleTheme: 'الوضع الفاتح / الداكن',
  },
} as const;

export const t = (lang: Lang) => strings[lang];
export const EPIGRAPH_AR = 'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ';

/** Build a link that respects the site's base path. */
export const url = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};

export const formatDate = (d: Date, lang: Lang) =>
  new Intl.DateTimeFormat(LANG_META[lang].locale, { dateStyle: 'long' }).format(d);

export const langPaths = () => LANGS.map((lang) => ({ params: { lang } }));
