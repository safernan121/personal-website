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
  stack: string[]
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
  screenshots?: {
    src: string
    width: number
    height: number
    alt: string
    title: string
    caption: string
    source: string
    wide?: boolean
  }[]
  screenshotNote?: string
}

// Project descriptions and engineering contributions are deliberately separate.
// Product context is adapted from the linked sources; personal contributions come
// from the CV and Santiago's confirmed descriptions of his work. Historical
// visuals document the product, not individual authorship.
export const projects: Project[] = [
  {
    slug: 'the-beacon',
    name: 'The Beacon',
    number: '01',
    category: 'Online game',
    tagline: 'Building the game and the systems behind it.',
    role: 'Software Engineer',
    company: 'Skillcap Studio / Gambit Studio',
    period: 'Nov 2021 — Present',
    description:
      'The Beacon is an online fantasy action game built around dungeon exploration, combat, and loot. Players can also customize a home, collect items, and meet in shared social spaces.',
    roleSummary:
      'I’m one of five core engineers building The Beacon at Skillcap / Gambit Studio. I own editor systems, developer tools, and shared data infrastructure across the Godot client and the TypeScript/GraphQL services behind it, and I also work on gameplay. I help shape technical decisions and review code across the team.',
    context:
      'Product scale: During its largest campaign, The Beacon reached 220K peak daily active users and 650K+ new accounts.',
    contributions: [
      {
        title: 'Player house editor',
        text: 'I own the product layer of the player house editor, built on an existing voxel-editor foundation. I integrated it into the game and wrote its placement-rule engine, which calculates rotated footprints and enforces anchors, structural support, and removal cascades. I kept draft state, layout rules, and editor orchestration separate so the rules stay testable, and connected saving to the backend through ORM models and Hasura GraphQL endpoints. I also added skins and carpets and improved the editor’s startup time.',
      },
      {
        title: 'Visual programming editor',
        text: 'Tinker is the team’s node-based editor for building game logic and data schemas. I didn’t create it, but I became a major contributor: I added schema validation and issue diagnostics, dependency discovery, type-cast nodes, undo/redo, copy/paste and batch editing, and serialization improvements. These capabilities are reused across the editor’s node types.',
      },
      {
        title: 'Artwork to game-ready assets',
        text: 'I proposed and built the workflow that turns layered artwork into game-ready animations, and still maintain it. Artists can import a source file and choose a configuration instead of spending roughly five minutes setting up each animated asset by hand. The pipeline standardizes 1,500+ production configurations.',
      },
      {
        title: 'A foundation for new game modes',
        text: 'Replaced separate game-mode implementations with shared systems for managing game state and generating rooms. This gave new modes and live events a common foundation.',
      },
      {
        title: 'Shared models for game content',
        text: 'Replaced one-off content definitions with shared data models for 700+ game assets and items. The models support both content creation and gameplay, giving multiple engineers a consistent foundation to extend.',
      },
      {
        title: 'Development without a live backend',
        text: 'Built the initial GraphQL client architecture and a local data layer that mirrors the production data model. Engineers could develop and test gameplay without connecting to the live backend.',
      },
      {
        title: 'Touch and controller input',
        text: 'Co-implemented touch buttons, a virtual joystick, controller navigation, and mobile export configuration, then maintained the related interface behavior. This expanded the devices and inputs the game supports.',
      },
      {
        title: 'Combat implementation',
        text: 'Designed and implemented combat behavior for enemies and bosses, and contributed to shared combat systems.',
      },
    ],
    stack: ['Godot', 'GDScript', 'TypeScript', 'NestJS', 'GraphQL', 'Hasura', 'Solidity'],
    website: 'https://thebeacon.gg/',
    websiteLabel: 'Visit thebeacon.gg',
  },
  {
    slug: 'cryptomkt',
    name: 'CryptoMKT',
    number: '02',
    category: 'Trading platform',
    tagline: 'A trading workspace for understanding the market and managing orders.',
    role: 'Full-Stack Developer',
    company: 'CryptoMarket / Uppercap',
    period: 'Oct 2019 — Nov 2021',
    description:
      'CryptoMarket is a cryptocurrency exchange serving local-currency markets in Latin America. Its professional interface lets users study price movements, place trades, and manage orders in one workspace.',
    descriptionDetail:
      'The archived screenshot shows the trading interface documented in May 2020, during my time at the company.',
    roleSummary:
      'I built the full frontend of CryptoMarket’s professional trading interface with Django and Node.js, connecting market data, charts, buying and selling, and order tracking in one workspace. My work included the API integrations and trading workflows shown here.',
    context:
      'Company scale: By October 2021, the exchange reported 500K registered users and approximately $3M in daily transactions.',
    contributions: [
      {
        title: 'Market data and charts',
        text: 'Connected market APIs to the interface and integrated candlestick charts, so users could select a trading pair and explore its price history.',
      },
      {
        title: 'Order book and recent trades',
        text: 'Built the order book and recent-trades panels, putting buy and sell prices and recent market activity alongside the chart.',
      },
      {
        title: 'Buying and selling',
        text: 'Built the buy and sell forms and connected them to the exchange’s trading workflows, so users could configure and place orders from the same workspace.',
      },
      {
        title: 'Order tracking',
        text: 'Built views for active orders and trading history, helping users track open orders and review previous orders.',
      },
    ],
    stack: ['Python', 'Django', 'Node.js'],
    website: 'https://www.cryptomkt.com/en/',
    websiteLabel: 'Visit CryptoMKT',
    media: {
      logo: '/images/cryptomkt/logo.png', logoWidth: 600, logoHeight: 55,
      image: '/images/cryptomkt/trading-2020.png', imageWidth: 1346, imageHeight: 706,
      imageAlt: 'CryptoMarket’s advanced trading screen, with a Bitcoin candlestick chart, order book, and buy/sell forms.',
      caption: 'Professional trading interface · May 2020',
      source: 'https://www.criptonoticias.com/tutoriales-guias/cryptomkt-compra-vende-bitcoin-criptomonedas-moneda-local/',
      sourceLabel: 'CryptoMarket screenshot via CriptoNoticias',
    },
    references: [
      {
        title: 'Trading interface guide', date: '24 May 2020',
        description: 'Screenshots of the simple and professional trading views. This image is from May 2020; the guide was updated in March 2024.',
        url: 'https://www.criptonoticias.com/tutoriales-guias/cryptomkt-compra-vende-bitcoin-criptomonedas-moneda-local/',
      },
    ],
  },
  {
    slug: 'uppercap',
    name: 'Uppercap',
    number: '03',
    category: 'Investment platform',
    tagline: 'Helping build an investment platform from the ground up.',
    role: 'Full-Stack Developer',
    company: 'CryptoMarket / Uppercap',
    period: 'Oct 2019 — Nov 2021',
    description:
      'Uppercap connected companies raising capital with investors. The platform brought company information, investment opportunities, and ownership records into one online experience.',
    roleSummary:
      'I was part of Uppercap’s original engineering team, helping build its investment web app from the initial implementation through early iterations and its rebrand. I worked across the frontend and backend, co-implementing the core investment journey and contributing to payment integrations, investor portfolios, and contracts for share ownership.',
    contributions: [
      {
        title: 'From login to investment',
        text: 'Co-implemented the investment journey across the frontend and backend, from login to buying shares. My work included public and private company profiles, setting up and launching investment rounds, and vesting options for companies.',
      },
      {
        title: 'Connecting purchases to payments',
        text: 'Co-implemented the connection to Chilean bank APIs for credit-card payments, linking share purchases in the app with payment processing.',
      },
      {
        title: 'Share ownership and vesting',
        text: 'Implemented blockchain contracts to represent purchased shares and manage vesting. These linked investments in the application to records of investors’ ownership.',
      },
      {
        title: 'Investor portfolios and referrals',
        text: 'Implemented portfolio features for investors to review their holdings, with additional contributions to the platform’s referral functionality.',
      },
    ],
    stack: ['Python', 'Django', 'JavaScript', 'Node.js', 'Solidity'],
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
    screenshotNote:
      'These public guide images illustrate the platform. The guides were updated after my time there; some show Uper branding, and exact capture dates are unverified.',
    screenshots: [
      {
        src: '/images/uppercap/reservations-guide.jpg', width: 1024, height: 393,
        alt: 'Investment opportunity cards for Biwiser, B21, and FudLup, with sidebar links for referrals, reservations, portfolio, and wallet.',
        title: 'Investment workspace',
        caption: 'Browse investment opportunities and move between reservations, holdings, and referral features.',
        source: 'https://contenido.uppercap.com/knowledgebase/que-son-las-reservas-en-uppercap/',
        wide: true,
      },
      {
        src: '/images/uppercap/portfolio-guide.png', width: 1024, height: 291,
        alt: 'Digital-share portfolio listing companies, total and available share quantities, share-series information, and sell-share buttons.',
        title: 'Investor portfolio',
        caption: 'Review holdings by company and share series, including total and available shares.',
        source: 'https://contenido.uppercap.com/knowledgebase/como-hacer-una-oferta-privada-en-uppercap/',
        wide: true,
      },
      {
        src: '/images/uppercap/private-offer-2020.jpg', width: 498, height: 432,
        alt: 'New private-offer form with share price, share quantity, a total in Chilean pesos, and a create-offer button.',
        title: 'Create a private offer',
        caption: 'Set a share price and quantity, then review the total before publishing an offer.',
        source: 'https://contenido.uppercap.com/knowledgebase/como-hacer-una-oferta-privada-en-uppercap/',
      },
      {
        src: '/images/uppercap/offer-created-2020.png', width: 370, height: 285,
        alt: 'Offer-published confirmation with a green checkmark and an OK button.',
        title: 'Offer published',
        caption: 'Confirm that an offer has been published.',
        source: 'https://contenido.uppercap.com/knowledgebase/como-hacer-una-oferta-privada-en-uppercap/',
      },
    ],
    references: [
      {
        title: 'The platform’s early purpose', date: '13 July 2020',
        description: 'Uppercap’s original explanation of the platform and its investment process.',
        url: 'https://contenido.uppercap.com/knowledgebase/donde-invertir-en-negocios/',
      },
      {
        title: 'Five lessons from launching Uppercap', date: '25 January 2021',
        description: 'A founder’s account of the launch during my time at Uppercap. The original logo and illustration shown here come from this article.',
        url: 'https://contenido.uppercap.com/knowledgebase/5-lecciones-de-la-startup-chilena-que-debuto-en-pandemia/',
      },
      {
        title: 'Portfolio and private-offer walkthrough', date: '13 July 2020 · revised 9 March 2022',
        description: 'A guide to share holdings and private offers, with screenshots of the platform. The updated version uses Uper branding.',
        url: 'https://contenido.uppercap.com/knowledgebase/como-hacer-una-oferta-privada-en-uppercap/',
      },
      {
        title: 'Reservations and investment states', date: '9 June 2021 · revised 29 September 2022',
        description: 'How reservations connect investment opportunities with investor portfolios, illustrated by the workspace screenshot.',
        url: 'https://contenido.uppercap.com/knowledgebase/que-son-las-reservas-en-uppercap/',
      },
      {
        title: 'Referral-program guide', date: '22 September 2020 · revised 2 July 2024',
        description: 'A guide to referrals and invitations, revised after my time at Uppercap.',
        url: 'https://contenido.uppercap.com/knowledgebase/que-es-el-programa-de-referidos-de-uppercap/',
      },
    ],
  },
]
