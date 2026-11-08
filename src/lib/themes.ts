import type { Lang } from './i18n';

type Text = Record<Lang, string>;
export interface Theme { slug: string; name: Text; description: Text }

export const THEMES: Theme[] = [
  {
    slug: 'character',
    name: { en: 'Character (Akhlāq)', ur: 'اخلاق', ar: 'الأخلاق' },
    description: {
      en: 'On virtue, manners and the shaping of the self.',
      ur: 'فضیلت، آداب اور تعمیرِ ذات پر۔',
      ar: 'في الفضيلة والأدب وبناء الذات.',
    },
  },
  {
    slug: 'justice',
    name: { en: 'Justice (ʿAdl)', ur: 'عدل', ar: 'العدل' },
    description: {
      en: 'Fairness to God, to others, and to oneself.',
      ur: 'اللہ، مخلوق اور اپنی ذات کے ساتھ انصاف۔',
      ar: 'الإنصاف مع الله ومع الناس ومع النفس.',
    },
  },
  {
    slug: 'mercy',
    name: { en: 'Mercy (Raḥmah)', ur: 'رحمت', ar: 'الرحمة' },
    description: {
      en: 'Compassion as the ground of human relations.',
      ur: 'انسانی رشتوں کی بنیاد کے طور پر شفقت و ہمدردی۔',
      ar: 'الرحمة أساسًا للعلاقات الإنسانية.',
    },
  },
  {
    slug: 'tazkiyah',
    name: { en: 'Purification of the Soul (Tazkiyah)', ur: 'تزکیۂ نفس', ar: 'تزكية النفس' },
    description: {
      en: 'Inner discipline, sincerity and the healing of the heart.',
      ur: 'باطنی تربیت، اخلاص اور دل کی شفا۔',
      ar: 'تهذيب الباطن والإخلاص وشفاء القلب.',
    },
  },
  {
    slug: 'wisdom',
    name: { en: 'Knowledge & Wisdom (ʿIlm wa Ḥikmah)', ur: 'علم و حکمت', ar: 'العلم والحكمة' },
    description: {
      en: 'Reason, revelation and the search for understanding.',
      ur: 'عقل، وحی اور فہم کی جستجو۔',
      ar: 'العقل والوحي والبحث عن الفهم.',
    },
  },
  {
    slug: 'secular-values',
    name: { en: 'Secular Values in Dialogue', ur: 'سیکولر اقدار کا جائزہ', ar: 'القيم العلمانية في الميزان' },
    description: {
      en: 'Examining modern secular ideals in the light of revelation.',
      ur: 'جدید سیکولر تصورات کا وحی کی روشنی میں تجزیہ۔',
      ar: 'دراسة المُثُل العلمانية الحديثة في ضوء الوحي.',
    },
  },
];

export const THEME_SLUGS = THEMES.map((t) => t.slug) as [string, ...string[]];
export const getTheme = (slug: string) => THEMES.find((t) => t.slug === slug)!;
