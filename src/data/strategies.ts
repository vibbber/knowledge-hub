export interface Strategy {
  slug: string;
  title: string;
  book: string;
  bookSlug: string;
  topic: string;
  type: 'strategy' | 'pattern';
  excerpt: string;
  ageRange?: string;
  image?: string;
  imageAlt?: string;
  imageAspect?: number; // width / height
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
    image: '/images/strategies/room-colors-child-temperament-steiner-education.jpg',
    imageAlt: 'Colorful cross-section dollhouse showing rooms painted in different temperament colors — red, blue, yellow, and green — illustrating Steiner\'s approach to matching room colors to child temperament',
    imageAspect: 0.667,
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
    image: '/images/strategies/best-toys-for-imagination-waldorf-simple-toys.jpg',
    imageAlt: 'Wooden sculpture of a head with imagined worlds visible inside the grain — forests, doorways, and trees emerging from simple wood, representing how unfinished toys spark imagination',
    imageAspect: 0.8,
  },
  {
    slug: 'mother-father-inheritance',
    title: 'Mother-Father Inheritance Pattern',
    book: 'Education of the Child',
    bookSlug: 'steiner-education-of-the-child',
    topic: 'Understanding',
    type: 'pattern',
    excerpt: 'Children inherit intellectual flexibility from the mother and will/character from the father — but the direction of talent is purely individual.',
    image: '/images/strategies/what-children-inherit-from-parents-traits.jpg',
    imageAlt: 'Two rivers of gold and dark tones merging from above, representing how children inherit different qualities from each parent into a unique combination',
    imageAspect: 1.5,
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
    image: '/images/strategies/gentle-discipline-technique-without-punishment.jpg',
    imageAlt: 'Child walking through grand watercolor corridors of memory — a Ghibli-inspired illustration of how revisiting past experiences guides behavior more gently than punishment',
    imageAspect: 0.8,
  },
  {
    slug: 'steiner-three-births-framework',
    title: 'The Three Births Framework',
    book: 'Education of the Child',
    bookSlug: 'steiner-education-of-the-child',
    topic: 'Development',
    type: 'pattern',
    excerpt: 'Physical birth, etheric birth at 7, astral birth at puberty — each stage requires fundamentally different educational approaches.',
    image: '/images/strategies/child-development-stages-steiner-three-births.jpg',
    imageAlt: 'Geological cross-section illustration showing colorful layers of child development — warm clay depths, living green middle, and surface growth with trees and people',
    imageAspect: 0.56,
  },
  {
    slug: 'what-we-forget-becomes-us',
    title: 'What We Forget Becomes Who We Are',
    book: 'Education of the Child',
    bookSlug: 'steiner-education-of-the-child',
    topic: 'Development',
    type: 'pattern',
    excerpt: 'Early experiences we can\'t consciously recall shape our character, joy, and courage. What we forget, we become.',
    image: '/images/strategies/early-childhood-experiences-shape-character.jpg',
    imageAlt: 'Cyanotype blue scene looking upward through architectural walls to a tree and sky — representing how early childhood experiences we cannot recall become the foundation of who we are',
    imageAspect: 0.667,
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
    image: '/images/strategies/9-year-old-behavior-change-child-development.jpg',
    imageAlt: 'Child standing inside a cracked golden egg at sunset — a Klimt-inspired painting symbolizing the moment around age 9 when a child\'s consciousness separates from the world',
    imageAspect: 1.0,
  },
  {
    slug: 'three-school-periods',
    title: 'The Three School-Age Periods',
    book: 'Kingdom of Childhood',
    bookSlug: 'steiner-kingdom-of-childhood',
    topic: 'Development',
    type: 'pattern',
    excerpt: 'Waldorf divides school years into three distinct periods, each needing different teaching approaches: imitation, authority, then independent judgment.',
    image: '/images/strategies/waldorf-education-three-stages-of-learning.jpg',
    imageAlt: 'Four handcrafted vessels of clay, wood, and bronze on an oak table — representing the three Waldorf stages where children learn through imitation, authority, and independent judgment',
    imageAspect: 1.0,
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
    image: '/images/strategies/teaching-math-whole-to-parts-waldorf-method.jpg',
    imageAlt: 'A sphere shattering into geometric fragments with golden kintsugi repair — representing the Waldorf approach of starting with the whole and breaking into parts to teach mathematics',
    imageAspect: 0.667,
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
    image: '/images/strategies/movement-exercises-for-kids-coordination-learning.jpg',
    imageAlt: 'Gymnasium floor covered in colorful chalk spirals and figure-eights traced by children\'s movement — showing how Waldorf form drawing connects body coordination to learning',
    imageAspect: 0.8,
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
    image: '/images/strategies/teaching-kids-to-write-letters-from-pictures.jpg',
    imageAlt: 'A golden snake curving into the shape of the letter S in a dark botanical setting — illustrating the Waldorf method where letters emerge from pictures of nature',
    imageAspect: 0.56,
  },
];

export const topics = [...new Set(strategies.map(s => s.topic))].sort();
export const books = [...new Set(strategies.map(s => s.book))].sort();
export const types = [...new Set(strategies.map(s => s.type))];
