export interface Recipe {
  slug: string
  name: string
  subtitle: string
  description: string
  category: string
  image?: { src: string; alt: string; position?: string }
  ingredients: { name: string; quantity: string; note?: string }[]
  details: { id: 'oven' | 'bake' | 'chill' | 'tin'; label: string; value: string }[]
  steps: { title: string; description: string }[]
  notes: string[]
  nutrition: {
    scope: string
    values: { label: string; value: string }[]
    note: string
  }
}

export const recipes: Recipe[] = [
  {
    slug: 'the-protein-cloud',
    name: 'The Protein Cloud',
    subtitle: 'Ricotta & cottage cheese cheesecake',
    description:
      'It may not win any taste contests or be the best cheesecake you’ve ever had. But it’s made for everyday cravings: a simple cheesecake fix that can fit into a balanced diet, in a portion that works for you, without having to wait for “cheat day.”',
    category: 'Baked / Protein',
    image: {
      src: '/images/cheesecake/the-protein-cloud.webp',
      alt: 'The Protein Cloud cheesecake in a rectangular glass baking dish in the oven.',
    },
    ingredients: [
      { name: 'Ricotta', quantity: '250 g' },
      { name: 'Cottage cheese', quantity: '250 g' },
      { name: 'Eggs', quantity: '2' },
      { name: 'Vanilla protein powder', quantity: '30–40 g' },
      { name: 'Honey', quantity: '2–3 tbsp' },
      { name: 'Vanilla', quantity: '1 tsp', note: 'Optional' },
      { name: 'Salt', quantity: 'A pinch' },
      {
        name: 'Lemon zest or lemon juice',
        quantity: 'A little',
        note: 'Optional, but useful',
      },
    ],
    details: [
      { id: 'oven', label: 'Oven', value: '165°C' },
      { id: 'bake', label: 'Bake', value: '35–45 minutes' },
      { id: 'chill', label: 'Chill', value: 'At least 3–4 hours' },
      { id: 'tin', label: 'Tin', value: 'Small cake tin or baking dish' },
    ],
    steps: [
      {
        title: 'Prepare the tin',
        description:
          'Line a small cake tin or baking dish and heat the oven to 165°C.',
      },
      {
        title: 'Blend until smooth',
        description:
          'Blend all the ingredients until very smooth. Cottage cheese especially benefits from blending. Pour the mixture into the lined tin or dish.',
      },
      {
        title: 'Bake gently',
        description:
          'Bake for roughly 35–45 minutes. The edges should be set, with the centre still slightly wobbly.',
      },
      {
        title: 'Cool, then chill',
        description:
          'Cool completely, then refrigerate for at least 3–4 hours. Overnight is even better. The cheesecake firms up substantially when cold.',
      },
    ],
    notes: [
      'For a lighter take, use more cottage cheese and less ricotta. The trade-off is a little less richness and flavour.',
      'Vanilla protein powder can easily overpower the cheese and honey. If you want those flavours to shine, leave it out or use unflavoured protein powder.',
    ],
    nutrition: {
      scope: 'Whole cheesecake',
      values: [
        { label: 'Calories', value: '900–1,050 kcal' },
        { label: 'Protein', value: '90–105 g' },
        { label: 'Carbs', value: '55–70 g' },
        { label: 'Fat', value: '35–45 g' },
      ],
      note: 'Approximate values for the whole cheesecake. Actual values depend on the ingredients and quantities used.',
    },
  },
  {
    slug: 'ricotta-cheesecake',
    name: 'Ricotta Cheesecake',
    subtitle: 'Simple, distinctive, and easy to make your own',
    description:
      'This is one of my favourite cheesecakes. Ricotta gives it a distinctive flavour that feels like a refreshing change from the usual slice you find in a shop. The recipe is simple, so you can tweak it until it’s just the way you like it.',
    category: 'Baked / Ricotta',
    image: {
      src: '/images/cheesecake/ricotta-cheesecake.webp',
      alt: 'A slice of ricotta cheesecake with a golden brown top on a white plate.',
      position: 'center 25%',
    },
    ingredients: [
      { name: 'Whole milk ricotta', quantity: '800 g' },
      { name: 'Cream cheese', quantity: '250 g', note: 'Softened' },
      { name: 'Sugar', quantity: '130 g' },
      { name: 'Salt', quantity: 'A pinch' },
      { name: 'Vanilla extract', quantity: '5.4 ml' },
      { name: 'Eggs', quantity: '5' },
    ],
    details: [
      { id: 'oven', label: 'Oven', value: '165°C' },
      { id: 'bake', label: 'Bake', value: '80–90 minutes' },
      { id: 'chill', label: 'Chill', value: 'At least 8 hours / overnight' },
      { id: 'tin', label: 'Tin', value: 'Small cake tin or baking dish' },
    ],
    steps: [
      {
        title: 'Prepare the tin',
        description:
          'Line a small cake tin or baking dish and heat the oven to 165°C.',
      },
      {
        title: 'Blend, then add the eggs',
        description:
          'Blend the ricotta, cream cheese, sugar, and salt until very smooth. Mix in the vanilla, then add the eggs in two pairs followed by the final egg, mixing well after each addition. Pour the mixture into the lined tin or dish.',
      },
      {
        title: 'Bake until lightly browned',
        description:
          'Bake for 80–90 minutes, until the top is lightly browned.',
      },
      {
        title: 'Cool, then chill overnight',
        description:
          'Cool completely, then refrigerate for at least 8 hours. An overnight chill makes it easy to give the cheesecake the time it needs.',
      },
    ],
    notes: [
      'You can add a cookie crust if you like a base. I prefer my cheesecakes on their own, without a crust.',
    ],
    nutrition: {
      scope: 'Previous recipe · 1/8 of the cheesecake',
      values: [
        { label: 'Calories', value: '557 kcal' },
        { label: 'Total fat', value: '35.2 g' },
        { label: 'Saturated fat', value: '19.9 g' },
        { label: 'Trans fat', value: '0.2 g' },
        { label: 'Cholesterol', value: '179.2 mg' },
        { label: 'Total carbohydrates', value: '48.1 g' },
        { label: 'Dietary fibre', value: '0.0 g' },
        { label: 'Total sugars', value: '26.3 g' },
        { label: 'Sodium', value: '333.6 mg' },
        { label: 'Protein', value: '17.1 g' },
      ],
      note: 'These estimates refer to the previous ingredient quantities and have not been recalculated for this version. Actual values depend on the ingredients and portion size; adding a cookie crust will also change them.',
    },
  },
]
