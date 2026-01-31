export interface Strategy {
  slug: string;
  title: string;
  book: string;
  bookSlug: string;
  topic: string;
  type: 'strategy' | 'pattern';
  excerpt: string;
  ageRange?: string;
}

export const strategies: Strategy[] = [
  // === steiner-education-of-the-child ===
  {
    slug: 'color-environment-temperament',
    title: 'Color Environment for Child Temperament',
    book: 'Education of the Child',
    bookSlug: 'steiner-education-of-the-child',
    topic: 'Environment',
    type: 'strategy',
    excerpt: 'Match room colors to your child\'s temperament. Choleric children benefit from red surroundings, melancholic from blue — Steiner\'s counterintuitive color therapy.',
    ageRange: '0-7',
  },
  {
    slug: 'imagination-building-toys',
    title: 'Imagination-Building Toys Guide',
    book: 'Education of the Child',
    bookSlug: 'steiner-education-of-the-child',
    topic: 'Play',
    type: 'strategy',
    excerpt: 'Why simple, unfinished toys develop imagination better than realistic ones. A knotted cloth doll beats a perfect plastic one.',
    ageRange: '0-7',
  },
  {
    slug: 'mother-father-inheritance',
    title: 'Mother-Father Inheritance Pattern',
    book: 'Education of the Child',
    bookSlug: 'steiner-education-of-the-child',
    topic: 'Understanding',
    type: 'pattern',
    excerpt: 'Children inherit intellectual flexibility from the mother and will/character from the father — but the direction of talent is purely individual.',
  },
  {
    slug: 'past-memory-discipline',
    title: 'Past-Memory Discipline Technique',
    book: 'Education of the Child',
    bookSlug: 'steiner-education-of-the-child',
    topic: 'Behavior',
    type: 'strategy',
    excerpt: 'Use memories of past events to correct behavior rather than present-moment punishment. Steiner\'s alternative to reactive discipline.',
    ageRange: '7-14',
  },
  {
    slug: 'steiner-three-births-framework',
    title: 'The Three Births Framework',
    book: 'Education of the Child',
    bookSlug: 'steiner-education-of-the-child',
    topic: 'Development',
    type: 'pattern',
    excerpt: 'Physical birth, etheric birth at 7, astral birth at puberty — each stage requires fundamentally different educational approaches.',
  },
  {
    slug: 'what-we-forget-becomes-us',
    title: 'What We Forget Becomes Who We Are',
    book: 'Education of the Child',
    bookSlug: 'steiner-education-of-the-child',
    topic: 'Development',
    type: 'pattern',
    excerpt: 'Early experiences we can\'t consciously recall shape our character, joy, and courage. What we forget, we become.',
  },

  // === steiner-kingdom-of-childhood ===
  {
    slug: 'nine-year-change-crisis',
    title: 'The Nine-Year Change',
    book: 'Kingdom of Childhood',
    bookSlug: 'steiner-kingdom-of-childhood',
    topic: 'Development',
    type: 'pattern',
    excerpt: 'Around age 9-10, children experience a fundamental shift in consciousness — separating self from world. Observable signs and how to respond.',
    ageRange: '9-10',
  },
  {
    slug: 'three-school-periods',
    title: 'The Three School-Age Periods',
    book: 'Kingdom of Childhood',
    bookSlug: 'steiner-kingdom-of-childhood',
    topic: 'Development',
    type: 'pattern',
    excerpt: 'Waldorf divides school years into three distinct periods, each needing different teaching approaches: imitation, authority, then independent judgment.',
  },
  {
    slug: 'waldorf-arithmetic-whole-parts',
    title: 'Whole-to-Parts Arithmetic',
    book: 'Kingdom of Childhood',
    bookSlug: 'steiner-kingdom-of-childhood',
    topic: 'Math',
    type: 'strategy',
    excerpt: 'Why Waldorf teaches division before addition. Start with the whole and break it into parts — matches how children naturally think.',
    ageRange: '7-9',
  },
  {
    slug: 'waldorf-form-body-exercises',
    title: 'Form & Body Coordination Exercises',
    book: 'Kingdom of Childhood',
    bookSlug: 'steiner-kingdom-of-childhood',
    topic: 'Movement',
    type: 'strategy',
    excerpt: 'Movement exercises that develop spatial awareness and coordination. Children complete forms with their bodies before drawing them on paper.',
    ageRange: '6-9',
  },
  {
    slug: 'waldorf-writing-from-pictures',
    title: 'Teaching Writing from Pictures',
    book: 'Kingdom of Childhood',
    bookSlug: 'steiner-kingdom-of-childhood',
    topic: 'Writing',
    type: 'strategy',
    excerpt: 'Letters emerge from pictures — M from mountains, S from a snake. A creative, memorable way to introduce writing that connects symbols to meaning.',
    ageRange: '6-7',
  },
];

export const topics = [...new Set(strategies.map(s => s.topic))].sort();
export const books = [...new Set(strategies.map(s => s.book))].sort();
export const types = [...new Set(strategies.map(s => s.type))];
