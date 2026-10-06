export interface Recipe {
  slug: string
  name: string
  subtitle: string
  description: string
  category: string
  image?: { src: string; alt: string }
  ingredients: { name: string; quantity: string; note?: string }[]
  details: { label: string; value: string }[]
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
      { label: 'Oven', value: '165°C' },
      { label: 'Bake', value: '35–45 minutes' },
      { label: 'Chill', value: 'At least 3–4 hours' },
      { label: 'Tin', value: 'Small cake tin or baking dish' },
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
]
