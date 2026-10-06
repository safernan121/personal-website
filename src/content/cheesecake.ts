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
        'Recipes, experiments, and notes for the next batch.',
      status: 'No recipes yet',
    },
    {
      id: 'reviews',
      label: 'Reviews',
      title: 'Every slice has a story.',
      description:
        'Cheesecake discoveries, tasting notes, and places worth another slice.',
      status: 'No reviews yet',
    },
  ],
} as const
