// Layout examples only; these entries never belong in the public collections.
const image = '/images/cheesecake/the-protein-cloud.webp'
const firstShop = {
  name: 'Example Cheesecake Bakery With A Long Shop Name',
  url: 'https://example.com/cheesecake',
}
const secondShop = { name: 'Example Bakery', url: 'https://example.com/bakery' }

export const reviewFixtures = {
  en: [
    {
      id: 'sample-creamy-slice',
      title: 'Example review: a creamy baked cheesecake with a lightly caramelised top and a delicate centre that deserves a longer description',
      description: 'This is sample copy for checking the review layout, rather than a published tasting note. A real review can describe the texture, sweetness, cheese flavour, and crust in one complete paragraph. Longer descriptions should remain readable from beginning to end, with no clipping or extra page to open. The photo shown here is an existing homemade cheesecake used only to illustrate the template. Replace the sample text and picture with your own experience before adding a real entry.',
      image: { src: image, alt: 'Example layout photo: a homemade cheesecake in a rectangular glass baking dish.' },
      shop: firstShop,
    },
    {
      id: 'sample-classic-slice',
      title: 'Example review: a classic slice',
      description: 'A shorter sample shows how a second review follows the first in the chosen order. Replace this text with your tasting notes and link the shop name to its website or location.',
      image: { src: image, alt: 'A homemade cheesecake used as the second example photo for the review template.' },
      shop: secondShop,
    },
  ],
  es: [
    {
      id: 'sample-creamy-slice',
      title: 'Reseña de ejemplo: una tarta de queso al horno cremosa, con una superficie ligeramente caramelizada y un centro delicado que merece una descripción más larga',
      description: 'Este es un texto de ejemplo para comprobar el diseño de las reseñas, no una nota de degustación publicada. Una reseña real puede describir la textura, el dulzor, el sabor del queso y la base en un párrafo completo. Las descripciones largas deben poder leerse de principio a fin, sin recortes ni otra página que abrir. La foto muestra una tarta casera que ya estaba en el sitio y sirve únicamente para ilustrar la plantilla. Sustituye el texto y la imagen por tu propia experiencia antes de añadir una entrada real.',
      image: { src: image, alt: 'Foto de ejemplo del diseño: una tarta casera en una fuente rectangular de vidrio.' },
      shop: firstShop,
    },
    {
      id: 'sample-classic-slice',
      title: 'Reseña de ejemplo: una porción clásica',
      description: 'Un ejemplo más breve muestra cómo la segunda reseña sigue a la primera en el orden elegido. Sustituye este texto por tus notas de degustación y enlaza el nombre del local a su web o ubicación.',
      image: { src: image, alt: 'Una tarta casera usada como segunda foto de ejemplo de la plantilla de reseñas.' },
      shop: secondShop,
    },
  ],
}
