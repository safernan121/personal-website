export const cheesecake = {
  title: 'Cheesecake.',
  introduction:
    'A notebook for recipes worth baking and slices worth remembering.',
  tabs: [
    {
      id: 'recipes',
      label: 'Recipes',
      title: 'Good things take a little baking.',
      description:
        'A place for cheesecake recipes, kitchen experiments, and notes for the next batch. The first recipe will live here.',
      status: 'No recipes yet',
    },
    {
      id: 'reviews',
      label: 'Reviews',
      title: 'Every slice has a story.',
      description:
        'A place for cheesecake discoveries, tasting notes, and the spots worth coming back to. The first review will live here.',
      status: 'No reviews yet',
    },
  ],
} as const
