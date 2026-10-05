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
  websiteLabel?: string
  websiteNote?: string
  media?: {
    logo: string
    logoWidth: number
    logoHeight: number
    image: string
    imageWidth: number
    imageHeight: number
    imageAlt: string
    caption: string
    source: string
    sourceLabel: string
    lightLogoPanel?: boolean
  }
  references?: { title: string; date: string; description: string; url: string }[]
}

// Project descriptions and engineering contributions are deliberately separate.
// Product context is adapted from the linked sources; personal contributions come
// from the CV. Historical visuals document the product, not individual authorship.
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
    websiteLabel: 'Visit thebeacon.gg',
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
      'CryptoMarket is a cryptocurrency exchange connecting digital assets with local-currency markets in Latin America. Its trading experience brings market charts, an order book, and buy/sell controls into one workspace.',
    descriptionDetail:
      'A guide published in May 2020 documented both a simpler exchange view and an advanced trading interface. The screenshot shown here captures the advanced view during my time at the company.',
    roleSummary:
      'Built CryptoMarket’s professional trading interface, integrating market APIs, candlestick charts, and production buy/sell workflows.',
    context:
      'By October 2021, the exchange reported 500K registered users and approximately $3M in daily transactions. These figures describe the exchange as a whole.',
    contributions: [
      {
        title: 'Market data and trading workflows',
        text: 'Integrated market APIs and candlestick charts with the professional interface’s production buy/sell workflows.',
      },
    ],
    areas: ['JavaScript', 'Python', 'Node.js'],
    website: 'https://www.cryptomkt.com/en/',
    websiteLabel: 'Visit CryptoMKT',
    media: {
      logo: '/images/cryptomkt/logo.png', logoWidth: 600, logoHeight: 55,
      image: '/images/cryptomkt/trading-2020.png', imageWidth: 1346, imageHeight: 706,
      imageAlt: 'CryptoMarket’s advanced trading screen, with a Bitcoin candlestick chart, order book, and buy/sell forms.',
      caption: 'Advanced trading interface · May 2020',
      source: 'https://www.criptonoticias.com/tutoriales-guias/cryptomkt-compra-vende-bitcoin-criptomonedas-moneda-local/',
      sourceLabel: 'CryptoMarket screenshot via CriptoNoticias',
    },
    references: [
      {
        title: 'Trading interface guide', date: '24 May 2020',
        description: 'Contemporary screenshots of the simple and advanced trading views. The article was later updated in March 2024; the image used here is from its May 2020 uploads.',
        url: 'https://www.criptonoticias.com/tutoriales-guias/cryptomkt-compra-vende-bitcoin-criptomonedas-moneda-local/',
      },
    ],
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
      'Uppercap was an online platform connecting companies raising capital with investors. It brought company information, investment opportunities, and the legal steps of private-capital participation into a digital experience.',
    descriptionDetail:
      'Its 2020 knowledge base described a platform designed to organize business information and automate investment formalities. The January 2021 launch story captures the company’s early direction, with the original Uppercap branding shown here.',
    roleSummary:
      'Built major parts of Uppercap’s investment platform, including project publishing, investment flows, vesting-based ownership, and portfolios.',
    contributions: [
      {
        title: 'Ownership and vesting',
        text: 'Implemented blockchain contracts connecting investment offerings to tokenized ownership and vesting mechanics.',
      },
    ],
    areas: ['JavaScript', 'Python', 'Node.js', 'Blockchain'],
    website: 'https://www.uper.co/en/',
    websiteLabel: 'Visit Uper',
    websiteNote: 'Uppercap’s original domain now redirects to Uper.',
    media: {
      logo: '/images/uppercap/logo-2021.png', logoWidth: 600, logoHeight: 215,
      image: '/images/uppercap/launch-2021.png', imageWidth: 1000, imageHeight: 524,
      imageAlt: 'Original Uppercap launch illustration of a rocket leaving the moon, with Earth in the distance.',
      caption: 'Original Uppercap logo and launch artwork · 2021',
      source: 'https://contenido.uppercap.com/knowledgebase/5-lecciones-de-la-startup-chilena-que-debuto-en-pandemia/',
      sourceLabel: 'Uppercap’s official launch story',
      lightLogoPanel: true,
    },
    references: [
      {
        title: 'The platform’s early purpose', date: '13 July 2020',
        description: 'Uppercap’s own explanation of how its platform organized private-capital opportunities and investment formalities.',
        url: 'https://contenido.uppercap.com/knowledgebase/donde-invertir-en-negocios/',
      },
      {
        title: 'Five lessons from launching Uppercap', date: '25 January 2021',
        description: 'A founder’s account of the launch, published during my work period. The original logo and illustration come from this article, last updated in February 2021.',
        url: 'https://contenido.uppercap.com/knowledgebase/5-lecciones-de-la-startup-chilena-que-debuto-en-pandemia/',
      },
    ],
  },
]
