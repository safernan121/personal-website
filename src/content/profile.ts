export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email' | 'resume'
}

export interface StackGroup {
  label: string
  items: string[]
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
  stack: string[]
}

export const profile = {
  name: 'Santiago Fernández',
  firstName: 'Santiago',
  lastName: 'Fernández',
  role: 'Software Engineer',
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
        text: '. I own the product layer of the player house editor, contribute to the team’s visual programming editor, and created and maintain an automated workflow that turns artists’ source files into game-ready animations.',
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
  stack: [
    { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'GDScript', 'C#'] },
    { label: 'Platforms', items: ['Godot', 'React', 'React Native', 'Node.js', 'NestJS', 'Django'] },
    { label: 'Data & APIs', items: ['GraphQL', 'Hasura', 'PostgreSQL', 'SQLite'] },
  ] satisfies StackGroup[],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/safernan121', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/safernan12/',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:safernan121@gmail.com', icon: 'email' },
    { label: 'Résumé', href: '/santiago-fernandez-cv.pdf', icon: 'resume' },
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
      'One of five core engineers building The Beacon, owning editor systems, developer tools, and shared data infrastructure across a Godot client and TypeScript/GraphQL services.',
    context:
      'Product scale: The Beacon reached 220K peak daily active users and 650K+ new accounts during its largest campaign.',
    highlights: [
      {
        title: 'Player house editor',
        text: 'Own the product layer of the house editor shipped to players: a placement-rule engine for rotations, anchors, and structural support, with save validation and persistence through Hasura GraphQL.',
      },
      {
        title: 'Visual programming editor',
        text: 'Major contributor to Tinker, the node-based editor artists and other non-developers used to build and test abilities and enemies, adding schema validation, issue diagnostics, undo/redo, copy/paste, and serialization.',
      },
      {
        title: 'Artwork to game-ready assets',
        text: 'Own an automated workflow I proposed and built to turn artwork into game-ready animations, replacing manual setup and standardizing 1,500+ production configurations.',
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
        title: 'Touch and controller input',
        text: 'Co-implemented touch controls, a virtual joystick, controller navigation, and mobile export settings, expanding the devices and inputs the game supports.',
      },
    ],
    stack: ['Godot', 'GDScript', 'TypeScript', 'NestJS', 'GraphQL', 'Hasura', 'Solidity'],
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
        text: 'Built the full frontend of CryptoMarket’s professional trading interface with Django and Node.js, connecting market data, charts, order entry, and order tracking.',
      },
      {
        title: 'The investment journey',
        text: 'Co-implemented Uppercap’s investment journey across the frontend and backend, covering account access, company profiles, investment rounds, share purchases, and integration with Chilean bank APIs for credit-card payments.',
      },
      {
        title: 'Ownership contracts',
        text: 'Built Solidity smart contracts that represented purchased shares and supported ownership vesting.',
      },
    ],
    stack: ['Python', 'Django', 'Node.js', 'Solidity'],
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
    stack: ['JavaScript', 'HTML', 'CSS'],
  },
]

