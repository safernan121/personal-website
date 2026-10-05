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
  highlights: string[]
  areas: string[]
}

export const profile = {
  name: 'Santiago Fernández',
  firstName: 'Santiago',
  lastName: 'Fernández',
  role: 'Software Engineer',
  location: 'Barcelona, Spain',
  tagline: 'I build gameplay systems, developer tools, and web applications.',
  aboutLead: [
    'Behind every good experience,',
    'there’s a system that makes it work.',
  ],
  about: [
    [
      { text: 'I’m a software engineer working across ' },
      { text: 'game development and the web', emphasis: true },
      {
        text: '. My work connects gameplay architecture, production tooling, APIs, and the interfaces people use.',
      },
    ],
    [
      { text: 'Currently, I’m one of five core engineers behind ' },
      { text: 'The Beacon', emphasis: true },
      {
        text: ' at Skillcap / Gambit Studio. I build the tools artists create with, the infrastructure engineers build on, and the systems players interact with.',
      },
    ],
    [
      {
        text: 'Previously, I worked on trading and investment applications at ',
      },
      { text: 'CryptoMarket / Uppercap', emphasis: true },
      { text: ', after starting in frontend development at Primus BI.' },
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
      'One of five core engineers behind The Beacon, working across gameplay, tooling, APIs, and content infrastructure. The product reached 220K peak daily active users and 650K+ new accounts during its largest campaign.',
    highlights: [
      'Designed and owned an automated pipeline that turns layered artwork into game-ready animated assets, eliminating most manual integration work and standardizing 1,500+ production configurations.',
      'Built a data-driven content architecture for 700+ game assets and item definitions, creating shared infrastructure extended by multiple engineers.',
      'Redesigned procedural-content architecture around reusable state, room-generation, and lifecycle systems to accelerate live events and new game modes.',
      'Built the initial client data layer with GraphQL and offline development support; reviewed PRs and contributed to architecture decisions across the team.',
    ],
    areas: [
      'Game systems',
      'Developer tooling',
      'GraphQL',
      'Content pipelines',
    ],
  },
  {
    id: 'cryptomarket-uppercap',
    company: 'CryptoMarket / Uppercap',
    role: 'Full-Stack Developer',
    start: 'Oct 2019',
    end: 'Nov 2021',
    summary:
      'Built CryptoMarket’s professional trading interface, integrating market APIs, candlestick charts, and production buy/sell workflows. By October 2021, the exchange reported 500K registered users and approximately $3M in daily transactions.',
    highlights: [
      'Built major parts of Uppercap’s investment platform, including project publishing, investment flows, vesting-based ownership, and portfolios.',
      'Implemented blockchain contracts connecting investment offerings to tokenized ownership and vesting mechanics.',
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
      'Improved and maintained the company’s web interfaces before transitioning into the joint Uppercap initiative with CryptoMarket.',
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
