export interface UpcomingProject {
  slug: string
  name: string
  category: string
  summary: string
  tagline: string
  introduction: string
  availability: string
  stack: string[]
  features: { title: string; text: string }[]
  screenshots: {
    src: string
    width: number
    height: number
    alt: string
    title: string
    caption: string
    cropSideGutters?: boolean
  }[]
}

// Product direction from Hogaro/docs/MASTERPLAN.md, reviewed October 6, 2026.
// These describe intended outcomes, including features still being developed.
export const upcomingProjects: UpcomingProject[] = [
  {
    slug: 'hogaro',
    name: 'Hogaro',
    category: 'Kitchen companion',
    summary:
      'Turn what’s already in your kitchen into good meals, with less waste and less guesswork.',
    tagline: 'A little less waste. A lot more possibility.',
    introduction:
      'Open the fridge and know what to make. I’m building Hogaro to help you make the most of the food you already have, find meals you’ll look forward to, and head to the shops with a list that makes sense.',
    availability: 'Coming to iOS and Android',
    stack: ['React Native', 'Expo', 'TypeScript', 'GraphQL', 'PostgreSQL', 'SQLite', 'Node.js'],
    features: [
      {
        title: 'Know what you have',
        text: 'Is there rice in the cupboard? Are those tomatoes still waiting to be used? Keep a clear view of your kitchen, with a nudge when food needs using and a heads-up when the essentials are running low.',
      },
      {
        title: 'Get to know your food',
        text: 'See calories, protein, and more for your ingredients, with nutrition per 100 g and clear sources behind the numbers. Look up foods even when you’re offline, and add your own values for the ingredients you use.',
      },
      {
        title: 'Dinner starts with what you have',
        text: 'Turn a few ingredients into dinner ideas that suit the way you eat. AI will help you find recipes for your tastes and the time you have. Save the ones you love, adjust the servings, and confirm what you’ve cooked to keep your pantry up to date.',
      },
      {
        title: 'Make the week a little easier',
        text: 'Pick your meals, choose your servings, and bring everything you’re missing into one shopping list. Hogaro will account for what’s already at home, so you can spend less time making lists and more time enjoying dinner.',
      },
      {
        title: 'A pantry you can share',
        text: 'Keep everyone on the same page, from what’s in the cupboard to what needs picking up. Share pantry ingredients and shopping lists with your household, while your saved recipes stay yours. Check your shelves and update stock even when you’re offline.',
      },
      {
        title: 'A photo to get you started',
        text: 'Take a photo and get a little help identifying your ingredients. Review the suggestions, add quantities and dates, and choose what goes into your pantry. A quicker start, with you in charge of what gets saved.',
      },
    ],
    screenshots: [
      {
        src: '/images/hogaro/pantry-preview.png',
        width: 390,
        height: 844,
        alt: 'Early Hogaro prototype showing an example pantry, use-soon and low-stock counts, ingredient search, and kitchen navigation.',
        title: 'Your kitchen at a glance',
        caption:
          'What’s on your shelves, what’s running low, and what needs using soon. Example pantry shown.',
      },
      {
        src: '/images/hogaro/nutrition-preview.jpg',
        width: 795,
        height: 900,
        alt: 'Early Hogaro ingredient form showing tomato nutrition per 100 g, its USDA source, and a quantity field.',
        title: 'A closer look at your food',
        caption:
          'Get to know your ingredients, from approximate nutrition to the amount you have left.',
        cropSideGutters: true,
      },
    ],
  },
]
