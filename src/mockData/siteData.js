// Mock data for Hero Slider
export const slides = [
  {
    id: 1,
    category: 'News',
    title: 'Plug-in hybrids use less electricity than expected',
    subtitle:
      'Real-world measurements show that the proportion is as low as 20 percent, and emissions are four to five times higher',
    author: 'Fredrik Holm',
    date: '02 Oct 2026 · Reading time: 3 minutes',
    image: '/09709e2bc119752db038be4da08850c42dae41fc.png',
    badge: { text: 'Lower emission', icon: '📊' },
    count: '01 / 04',
    highlight: ['hybrids', 'electricity'],
  },
  {
    id: 2,
    category: 'Environment',
    title: 'Is there a rainforest in Jämtland found here?',
    subtitle:
      'Scientists explore the rare old-growth forests of northern Sweden, revealing a hidden biodiversity hotspot.',
    author: 'Anna Lindqvist',
    date: '01 Oct 2026 · Reading time: 4 minutes',
    image: '/09709e2bc119752db038be4da08850c42dae41fc.png',
    badge: { text: 'Biodiversity', icon: '🌲' },
    count: '02 / 04',
    highlight: ['rainforest', 'Jämtland'],
  },
  {
    id: 3,
    category: 'Politics',
    title: 'Sweden misses 15 out of 16 environmental goals',
    subtitle:
      'A new government report reveals Sweden is falling short on almost all environmental targets for 2030.',
    author: 'Erik Svensson',
    date: '30 Sep 2026 · Reading time: 5 minutes',
    image: '/09709e2bc119752db038be4da08850c42dae41fc.png',
    badge: { text: 'Policy Alert', icon: '⚠️' },
    count: '03 / 04',
    highlight: ['misses', 'environmental'],
  },
  {
    id: 4,
    category: 'Science',
    title: 'Scientists on the election what it means for environment',
    subtitle:
      "Leading researchers weigh in on how the new political landscape will impact climate commitments.",
    author: 'Maria Björk',
    date: '28 Sep 2026 · Reading time: 6 minutes',
    image: '/09709e2bc119752db038be4da08850c42dae41fc.png',
    badge: { text: 'Research', icon: '🔬' },
    count: '04 / 04',
    highlight: ['Scientists', 'election'],
  },
]

// Mock data for News Strip cards
export const newsCards = [
  {
    id: 1,
    category: 'News',
    title: 'Plug-in hybrids use less electricity than expected',
    image: '/09709e2bc119752db038be4da08850c42dae41fc.png',
  },
  {
    id: 2,
    category: 'News',
    title: 'Is there a rainforest in Jämtland?',
    image: '/09709e2bc119752db038be4da08850c42dae41fc.png',
  },
  {
    id: 3,
    category: 'News',
    title: 'Sweden misses 15 out of 16 environmental goals',
    image: '/09709e2bc119752db038be4da08850c42dae41fc.png',
  },
  {
    id: 4,
    category: 'News',
    title: "Scientists on the election: What it means for the environment",
    image: '/09709e2bc119752db038be4da08850c42dae41fc.png',
  },
]

// Mock data for Navbar dropdowns
export const navDropdowns = {
  areas: ['Transport', 'Energy', 'Agriculture', 'Industry', 'Nature', 'Climate Policy'],
  environmentalFacts: ['Emissions', 'Biodiversity', 'Water', 'Air Quality', 'Soil'],
}

// Mock data for Latest News section
export const latestNews = {
  label: 'NEWS',
  heading: 'Latest',
  headingHighlight: 'News',
  subtitle: 'Stay updated with the latest environmental news, research and debate from Sweden and around the world.',
  articles: [
    {
      id: 1,
      category: 'News',
      categoryColor: 'pink',
      image: '/news-datacenter.jpg',
      title: 'New data centers in Sweden would require 10 new nuclear power plants',
      highlight: ['10', 'nuclear'],
      tag: 'ELECTRICITY NEEDS',
      description: 'If all the applications to build new data centers in Sweden were to become reality, ten new nuclear power plants of today\'s size would be required.',
      author: 'Ingela Björck',
      authorInitial: 'I',
      date: '07 Oct 2026',
      readTime: 'Reading time: 8 minutes',
    },
    {
      id: 2,
      category: 'Chronicle',
      categoryColor: 'purple',
      image: '/news-mountain.jpg',
      title: 'Leif Öster: Will the mountain forests finally be saved?',
      highlight: ['finally', 'saved?'],
      tag: 'MISSED GOAL',
      description: 'With a new parliamentary situation, is there perhaps an opportunity to save our unique mountain forests?',
      author: 'Leif Öster',
      authorInitial: 'L',
      date: '04 Oct 2026',
      readTime: 'Reading time: 4 minutes',
    },
    {
      id: 3,
      category: 'News',
      categoryColor: 'pink',
      image: '/news-forest.jpg',
      title: '"It\'s condescending to only talk about trees as carbon sinks"',
      highlight: ['trees', 'carbon', 'sinks"'],
      tag: 'INCREDIBLE TREES',
      description: 'A single tree in Brazil was found to contain enormous biodiversity, including many previously unknown insect species.',
      author: 'Birgitta Lozmar',
      authorInitial: 'B',
      date: '02 Oct 2026',
      readTime: 'Reading time: 2 minutes',
    },
  ],
}

// Mock data for About SMB section
export const aboutSMB = {
  label: 'ABOUT SMB',
  heading: 'About',
  headingHighlight: 'SMB',
  description:
    'At SMB you can read the most current news about the environment and climate. Our writers are committed and knowledgeable and are driven by raising environmental policy and environmental issues in the Swedish debate. We participate in debates and seminars, moderate and lecture.',
  highlight: {
    icon: '🌿',
    text: 'SMB is run as a ',
    boldText: 'non-profit association and is completely independent.',
  },
  images: {
    back: '/about-wind.jpg',
    front: '/about-plant.jpg',
  },
  decorIcons: [
    { icon: '🌿', position: 'top-right' },
    { icon: '🌍', position: 'bottom-right' },
  ],
}


// Mock data for Support Our Work section
export const supportWork = {
  bgImage: '/eabc0a06ab8a90dd4fa5e45e2274918a8232f033.png',
  qrImage: '/swish-qr.jpg',
  phone: '123-136 87 03',
  heading: 'Support',
  headingHighlight: 'our work',
  description: 'SMB fights for a sustainable future. Since its inception in 2010, our non-profit editorial team has driven the environmental debate forward through news coverage and reviews. Now we want to develop our work � and we hope you will help us.',
  subLabel: 'Support our work by swiping another coin',
  readMoreLink: 'Read what we want to do',
}

// Mock data for Browse by Topic section
export const browseTopics = {
  label: 'EXPLORE TOPICS',
  heading: 'Browse',
  headingHighlight: 'by Topic',
  subtitle: 'Stay informed with the latest news, analysis and opinions on environment and climate.',
  topics: [
    { id: 1, category: 'NEWS', title: 'News', description: 'Plug-in hybrids use less electricity than previously thought', icon: 'news' },
    { id: 2, category: 'NONSENSE', title: 'Nonsense', description: 'So will climate NEVER be an issue for the Swedish right?', icon: 'nonsense' },
    { id: 3, category: 'POSITIVE NEWS', title: 'Positive news', description: 'Many thousands marched in the climate demonstration in Gothenburg', icon: 'positive' },
    { id: 4, category: 'POLICY', title: 'Policy', description: 'Leif �ster: Will the mountain forests finally be saved?', icon: 'policy' },
    { id: 5, category: 'CONSUMPTION', title: 'Consumption', description: 'Time for online retail giant Temu to follow the law', icon: 'consumption' },
    { id: 6, category: 'OPINION', title: 'Opinion', description: "Mattias Goldmann tests electric aircraft: 'Seems impossible to...'", icon: 'opinion' },
  ],
}

// Mock data for Social Media section
export const socialMedia = {
  label: 'SOCIAL MEDIA',
  heading: 'Follow Our',
  headingHighlight: 'Latest Updates',
  subtitle: 'Insights, stories and updates from our work across different platforms.',
  instagram: {
    handle: '@supermiljobloggen',
    url: 'https://instagram.com',
    posts: [
      { id: 1, image: '/insta-1.jpg', alt: 'Swedish lake and forest aerial view' },
      { id: 2, image: '/insta-2.jpg', alt: 'Swedish flag in Gamla Stan Stockholm' },
      { id: 3, image: '/insta-3.jpg', alt: 'Green seedling sprout in sunlight' },
      { id: 4, image: '/insta-4.jpg', alt: 'Red Nordic houses in snow mountains' },
      { id: 5, image: '/insta-5.jpg', alt: 'Wind turbines over forest at sunset' },
      { id: 6, image: '/insta-6.jpg', alt: 'Underwater school of fish in deep ocean' },
    ],
  },
  bluesky: {
    handle: '@supermiljobloggen.se',
    url: 'https://bsky.app',
    posts: [
      {
        id: 1,
        author: 'Supermiljöbloggen',
        handle: '@supermiljobloggen.se',
        time: '2 h ago',
        text: 'Utvecklingen av AI har gjort datacenter mycket mer avancerade och därmed energikrävande. Många teknikföretag vill bygga datacenter i Sverige för att utnyttja den billiga fossilfria elen, men det kan leda till både högre elpriser och att annan verksamhet trängs undan.',
      },
      {
        id: 2,
        author: 'Supermiljöbloggen',
        handle: '@supermiljobloggen.se',
        time: '5 d ago',
        text: 'EU inför nu nya regler för att hantera plast och plastavfall. Men frågetecknen är många när det gäller både inblandningen av återvunnen plast och exporten av plastavfall.',
      },
      {
        id: 3,
        author: 'Supermiljöbloggen',
        handle: '@supermiljobloggen.se',
        time: '5 d ago',
        text: 'Var hamnade miljö- och klimatfrågan i årets valrörelse? Rätt långt bak, konstaterar forskare i den hastigt framtagna rapporten "Snabbtänkt" och resonerar om varför det blev så.',
      },
    ],
  },
}
