export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email'
}

export interface Experience {
  id: string
  company: string
  role: string
  start: string
  end: string
  current?: boolean
  summary: string
  context?: string
  highlights: { title: string; text: string }[]
  areas: string[]
}

export const profile = {
  name: 'Santiago Fernández',
  firstName: 'Santiago',
  lastName: 'Fernández',
  role: 'Software Engineer',
  location: 'Barcelona, Spain',
  tagline:
    'I build software people use and systems teams build on.',
  description:
    'Santiago Fernández, software engineer in Barcelona. 7+ years building products, shared systems, and tools across gaming and fintech.',
  aboutLead: [
    'From the interface',
    'to the systems behind it.',
  ],
  about: [
    [
      { text: 'I’m a software engineer based in Barcelona with ' },
      { text: '7+ years of experience', emphasis: true },
      {
        text: ' building products in gaming and fintech. My work spans the interfaces people use, the systems behind them, and the tools that help teams deliver.',
      },
    ],
    [
      { text: 'At Skillcap / Gambit Studio, I’m one of five core engineers building ' },
      { text: 'The Beacon', emphasis: true },
      {
        text: '. My work ranges from combat features to the foundations for new game modes. I also created and maintain an automated workflow that turns artists’ source files into game-ready animations.',
      },
    ],
    [
      {
        text: 'Previously, I was part of the original engineering team at ',
      },
      { text: 'Uppercap', emphasis: true },
      {
        text: ', helping build its first investment web app. I co-implemented the investment journey across the frontend and backend, from company profiles and investment rounds to share purchases and payments.',
      },
    ],
    [
      { text: 'At ' },
      { text: 'CryptoMKT', emphasis: true },
      {
        text: ', I built the full frontend of its professional trading interface. I began my career in frontend development at Primus BI.',
      },
    ],
  ],
  email: 'safernan121@gmail.com',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/safernan121', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/safernan12/',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:safernan121@gmail.com', icon: 'email' },
  ] satisfies SocialLink[],
}

// Product metrics describe the product or company, not one engineer's results.
export const experiences: Experience[] = [
  {
    id: 'skillcap-gambit',
    company: 'Skillcap Studio / Gambit Studio',
    role: 'Software Engineer',
    start: 'Nov 2021',
    end: 'Present',
    current: true,
    summary:
      'One of five core engineers building The Beacon, with work spanning gameplay, shared systems, and the tools the team uses to ship new content.',
    context:
      'Product scale: The Beacon reached 220K peak daily active users and 650K+ new accounts during its largest campaign.',
    highlights: [
      {
        title: 'Artwork to game-ready assets',
        text: 'Own an automated workflow I proposed and built to turn artwork into game-ready animations, replacing manual setup and standardizing 1,500+ production configurations.',
      },
      {
        title: 'A foundation for new game modes',
        text: 'Replaced separate game-mode implementations with shared systems for game state and room generation, giving new modes and live events a common foundation.',
      },
      {
        title: 'Shared models for game content',
        text: 'Created shared data models for 700+ game assets and items, giving multiple engineers a consistent way to create content and use it in gameplay.',
      },
      {
        title: 'Development without a live backend',
        text: 'Built the initial GraphQL client architecture and a local data layer, allowing engineers to develop and test gameplay without connecting to the live backend.',
      },
      {
        title: 'Combat implementation',
        text: 'Designed and implemented combat behavior for enemies and bosses, and contributed to shared combat systems.',
      },
    ],
    areas: [
      'Software architecture',
      'Developer tools',
      'GraphQL',
      'Data modeling',
      'Shared systems',
    ],
  },
  {
    id: 'cryptomarket-uppercap',
    company: 'CryptoMarket / Uppercap',
    role: 'Full-Stack Developer',
    start: 'Oct 2019',
    end: 'Nov 2021',
    summary:
      'Built trading and investment applications at CryptoMarket / Uppercap, joining Uppercap’s original engineering team to help build its first web app.',
    context:
      'Company scale: By October 2021, CryptoMarket reported 500K registered users and approximately $3M in daily transactions.',
    highlights: [
      {
        title: 'Trading frontend',
        text: 'Built the full frontend of CryptoMarket’s professional trading interface, connecting market data, charts, order entry, and order tracking.',
      },
      {
        title: 'The investment journey',
        text: 'Co-implemented Uppercap’s investment journey across the frontend and backend, covering account access, company profiles, investment rounds, share purchases, and integration with Chilean bank APIs for credit-card payments.',
      },
      {
        title: 'Ownership contracts',
        text: 'Built blockchain contracts that represented purchased shares and supported ownership vesting.',
      },
    ],
    areas: ['JavaScript', 'Python', 'Node.js', 'Blockchain'],
  },
  {
    id: 'primus-bi',
    company: 'Primus BI',
    role: 'Frontend Developer',
    start: 'Nov 2018',
    end: 'Sep 2019',
    summary:
      'Maintained and improved Primus BI’s web interfaces, then joined Uppercap, its investment-platform initiative with CryptoMarket.',
    highlights: [],
    areas: ['Web interfaces', 'Frontend development'],
  },
]

export const sections = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'experience', label: 'Experience', number: '02' },
  { id: 'projects', label: 'Projects', number: '03' },
] as const

export type SectionId = (typeof sections)[number]['id']
