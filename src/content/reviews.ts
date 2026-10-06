export interface Review {
  id: string
  title: string
  description: string
  image: { src: string; alt: string }
  shop: { name: string; url: string }
  webSaid?: { text: string; source: { label: string; url: string } }[]
}

// Add reviews in the order they should appear, with matching Spanish entries.
export const reviews: Review[] = [
  {
    id: 'fismuler-barcelona',
    title: 'Fismuler, Barcelona',
    description:
      'Quite a delightful cheesecake, made with their own recipe. One thing I enjoy about many of the cheesecakes I’ve tried here in Catalonia is that, much like Basque-style cheesecake, they tend to be creamier and let the cheese lead rather than hiding it behind sweetness. Fismuler gets a lot of hype online, and I usually take that with a pinch of salt: sometimes it’s exaggeration, sometimes it’s just people riding the hype. For me, it isn’t Barcelona’s best cheesecake, but it certainly is worth your time.',
    image: {
      src: '/images/cheesecake/fismuler-barcelona.jpg',
      alt: 'A slice of Fismuler’s cheesecake on a white plate, with a browned top and a soft, creamy centre.',
    },
    shop: { name: 'Fismuler', url: 'https://maps.app.goo.gl/FdoyM6MbAHg7k4D97' },
    webSaid: [
      {
        text: 'In a recipe demonstration with chef Nino Redruello and pastry chef Yara Callau, 20MINUTOS records a mix of cream cheese, blue cheese, and smoked Idiazábal, baked in a sablé pastry base. That combination helps explain its distinctive cheese flavour.',
        source: {
          label: '20MINUTOS',
          url: 'https://www.20minutos.es/gastronomia/recetas/receta-tarta-de-queso-fismuler-4779288/',
        },
      },
      {
        text: 'In Condé Nast Traveler, Redruello traces the inspiration to Hilario Arbelaitz’s cheesecake at Zuberoa in the Basque Country. He describes a month of testing two cakes a day to develop Fismuler’s own version.',
        source: {
          label: 'Condé Nast Traveler',
          url: 'https://www.traveler.es/gastronomia/articulos/mejor-tarta-de-queso-del-restaurante-fismuler-en-madrid-y-barcelona/14885',
        },
      },
    ],
  },
  {
    id: 'pastebcn-barcelona',
    title: 'PastéBCN, Barcelona',
    description:
      'PastéBCN is one of my favourite places for cheesecake in Barcelona. They’re very creative: almost every time I visit the shop, there’s a new flavour, and they tend to be extremely good. I was visiting Barcelona when the shop opened and managed to attend the public opening. Since then, I’ve tried to buy at least one cake every month.',
    image: {
      src: '/images/cheesecake/pastebcn-barcelona.jpg',
      alt: 'Three small round cheesecakes and a slice of cheesecake arranged in an open white box from PastéBCN.',
    },
    shop: { name: 'PastéBCN', url: 'https://maps.app.goo.gl/VdARk7pR9NK9MyG8A' },
    webSaid: [
      {
        text: 'The shop’s own catalogue lists cheesecakes with Sicilian pistachio, Reus hazelnut, tiramisu, and blue cheese. Its range extends well beyond a single classic flavour.',
        source: {
          label: 'PastéBCN',
          url: 'https://pastebcn.com/collections/frontpage',
        },
      },
      {
        text: 'Vinos y Restaurantes reports that Hugo Roche’s 70% dark-chocolate cheesecake with Maldon salt reinterprets his childhood snack of toast with olive oil and chocolate, finished with a drizzle of extra virgin olive oil.',
        source: {
          label: 'Vinos y Restaurantes',
          url: 'https://www.revistavinosyrestaurantes.com/hugo-roche-abre-paste-bcn/',
        },
      },
    ],
  },
]
