export interface Project {
  slug: string
  name: string
  number: string
  category: string
  tagline: string
  role: string
  company: string
  period: string
  description: string
  descriptionDetail?: string
  roleSummary?: string
  context?: string
  contributions: { title: string; text: string }[]
  areas: string[]
  website?: string
}

// Project descriptions and engineering contributions are deliberately separate.
// Beacon product copy is adapted from thebeacon.gg; contributions come from the CV.
// CryptoMKT and Uppercap retain the existing CV-derived copy for later revision.
export const projects: Project[] = [
  {
    slug: 'the-beacon',
    name: 'The Beacon',
    number: '01',
    category: 'Game development',
    tagline: 'A world to explore. Systems to bring it to life.',
    role: 'Software Engineer',
    company: 'Skillcap Studio / Gambit Studio',
    period: 'Nov 2021 — Present',
    description:
      'The Beacon is a fantasy action roguelite with a pixel-art world. Players venture into dungeons, fight enemies, and collect loot. Alongside combat, the game brings together home customization, collectible items, and social spaces where players can meet.',
    descriptionDetail:
      'The official site presents three sides of the experience: dungeon adventures, a home to make your own, and a world to share with other players.',
    roleSummary:
      'As one of five core engineers at Skillcap / Gambit Studio, I work across gameplay, developer tooling, APIs, and content infrastructure. My work supports both the experience players interact with and the team building it.',
    context:
      'During its largest campaign, The Beacon reached 220K peak daily active users and 650K+ new accounts.',
    contributions: [
      {
        title: 'From artwork to game-ready assets',
        text: 'Designed and owned an automated pipeline that turns layered artwork into game-ready animated assets, eliminating most manual integration work and standardizing 1,500+ production configurations.',
      },
      {
        title: 'A shared foundation for content',
        text: 'Built a data-driven content architecture for 700+ game assets and item definitions, creating shared infrastructure extended by multiple engineers.',
      },
      {
        title: 'Reusable gameplay systems',
        text: 'Redesigned procedural-content architecture around reusable state, room-generation, and lifecycle systems to accelerate live events and new game modes.',
      },
      {
        title: 'Connecting the client and the team',
        text: 'Built the initial client data layer with GraphQL and offline development support; reviewed PRs and contributed to architecture decisions across the team.',
      },
    ],
    areas: [
      'Game systems',
      'Developer tooling',
      'GraphQL',
      'Content pipelines',
    ],
    website: 'https://thebeacon.gg/',
  },
  {
    slug: 'cryptomkt',
    name: 'CryptoMKT',
    number: '02',
    category: 'Trading platform',
    tagline: 'Bringing market data and trading workflows together.',
    role: 'Full-Stack Developer',
    company: 'CryptoMarket / Uppercap',
    period: 'Oct 2019 — Nov 2021',
    description:
      'Built CryptoMarket’s professional trading interface, integrating market APIs, candlestick charts, and production buy/sell workflows. By October 2021, the exchange reported 500K registered users and approximately $3M in daily transactions.',
    contributions: [],
    areas: ['JavaScript', 'Python', 'Node.js'],
  },
  {
    slug: 'uppercap',
    name: 'Uppercap',
    number: '03',
    category: 'Investment platform',
    tagline: 'Connecting investment offerings with tokenized ownership.',
    role: 'Full-Stack Developer',
    company: 'CryptoMarket / Uppercap',
    period: 'Oct 2019 — Nov 2021',
    description:
      'Built major parts of Uppercap’s investment platform, including project publishing, investment flows, vesting-based ownership, and portfolios.',
    contributions: [
      {
        title: 'Ownership and vesting',
        text: 'Implemented blockchain contracts connecting investment offerings to tokenized ownership and vesting mechanics.',
      },
    ],
    areas: ['JavaScript', 'Python', 'Node.js', 'Blockchain'],
  },
]
