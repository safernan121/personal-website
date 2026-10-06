import { profile as englishProfile, type Experience } from '../profile'
import { projects as englishProjects, type Project } from '../projects'
import { upcomingProjects as englishUpcomingProjects, type UpcomingProject } from '../upcomingProjects'
import { recipes as englishRecipes, type Recipe } from '../recipes'
import { reviews as englishReviews, type Review } from '../reviews'
import type { aboutMe as englishAboutMe } from '../about'

// Identifiers, assets, contact details, and source URLs are shared with English.
// Translate public copy here; keep the scope and attribution of the original.
export const profile: typeof englishProfile = {
  ...englishProfile,
  role: 'Ingeniero de software',
  location: 'Barcelona, España',
  tagline: 'Construyo software que la gente usa y sistemas sobre los que los equipos crean.',
  description: 'Santiago Fernández, ingeniero de software en Barcelona. Más de 7 años creando productos, sistemas compartidos y herramientas en videojuegos y fintech.',
  aboutLead: ['Desde la interfaz', 'hasta los sistemas que la hacen posible.'],
  about: [
    [
      { text: 'Soy ingeniero de software en Barcelona, con ' },
      { text: 'más de 7 años de experiencia', emphasis: true },
      { text: ' creando productos en videojuegos y fintech. Mi trabajo abarca las interfaces que usa la gente, los sistemas que las hacen posibles y las herramientas que ayudan a los equipos a entregar resultados.' },
    ],
    [
      { text: 'En Skillcap / Gambit Studio, soy uno de los cinco ingenieros del equipo principal de ' },
      { text: 'The Beacon', emphasis: true },
      { text: '. Mi trabajo va desde funcionalidades de combate hasta las bases para nuevos modos de juego. También creé y mantengo un flujo automatizado que convierte los archivos originales de los artistas en animaciones listas para el juego.' },
    ],
    [
      { text: 'Antes formé parte del equipo de ingeniería original de ' },
      { text: 'Uppercap', emphasis: true },
      { text: ', ayudando a construir su primera aplicación web de inversión. Implementé junto al equipo el recorrido de inversión en el frontend y el backend, desde los perfiles de empresas y las rondas de inversión hasta la compra de acciones y los pagos.' },
    ],
    [
      { text: 'En ' },
      { text: 'CryptoMKT', emphasis: true },
      { text: ', construí todo el frontend de su interfaz profesional de trading. Comencé mi carrera en desarrollo frontend en Primus BI.' },
    ],
  ],
  socialLinks: englishProfile.socialLinks.map((link) => ({
    ...link,
    label: link.icon === 'email' ? 'Correo' : link.label,
  })),
}

export const experiences: Experience[] = [
  {
    id: 'skillcap-gambit',
    company: 'Skillcap Studio / Gambit Studio',
    role: 'Ingeniero de software',
    start: 'nov. 2021',
    end: 'Actualidad',
    current: true,
    summary: 'Uno de los cinco ingenieros del equipo principal de The Beacon, con trabajo en mecánicas de juego, sistemas compartidos y herramientas que el equipo usa para publicar contenido nuevo.',
    context: 'Escala del producto: The Beacon alcanzó un máximo de 220 mil usuarios activos diarios y más de 650 mil cuentas nuevas durante su mayor campaña.',
    highlights: [
      {
        title: 'De ilustraciones a recursos listos para el juego',
        text: 'Soy responsable de un flujo automatizado que propuse y construí para convertir ilustraciones en animaciones listas para el juego, sustituyendo la configuración manual y estandarizando más de 1.500 configuraciones de producción.',
      },
      {
        title: 'Una base para nuevos modos de juego',
        text: 'Sustituí implementaciones independientes de modos de juego por sistemas compartidos de estado del juego y generación de salas, dando una base común a nuevos modos y eventos en vivo.',
      },
      {
        title: 'Modelos compartidos para el contenido del juego',
        text: 'Creé modelos de datos compartidos para más de 700 recursos y objetos del juego, dando a varios ingenieros una forma coherente de crear contenido y usarlo en las mecánicas de juego.',
      },
      {
        title: 'Desarrollo sin conectarse al backend de producción',
        text: 'Construí la arquitectura inicial del cliente GraphQL y una capa de datos local, permitiendo desarrollar y probar las mecánicas de juego sin conectarse al backend de producción.',
      },
      {
        title: 'Implementación del combate',
        text: 'Diseñé e implementé el comportamiento de combate de enemigos y jefes, y contribuí a los sistemas de combate compartidos.',
      },
    ],
    areas: ['Arquitectura de software', 'Herramientas de desarrollo', 'GraphQL', 'Modelado de datos', 'Sistemas compartidos'],
  },
  {
    id: 'cryptomarket-uppercap',
    company: 'CryptoMarket / Uppercap',
    role: 'Desarrollador full stack',
    start: 'oct. 2019',
    end: 'nov. 2021',
    summary: 'Construí aplicaciones de trading e inversión en CryptoMarket / Uppercap, uniéndome al equipo de ingeniería original de Uppercap para ayudar a crear su primera aplicación web.',
    context: 'Escala de la empresa: en octubre de 2021, CryptoMarket reportaba 500 mil usuarios registrados y aproximadamente 3 millones de dólares en transacciones diarias.',
    highlights: [
      {
        title: 'Frontend de trading',
        text: 'Construí todo el frontend de la interfaz profesional de trading de CryptoMarket, conectando datos de mercado, gráficos, creación de órdenes y seguimiento de órdenes.',
      },
      {
        title: 'El recorrido de inversión',
        text: 'Implementé junto al equipo el recorrido de inversión de Uppercap en el frontend y el backend: acceso a cuentas, perfiles de empresas, rondas de inversión, compra de acciones e integración con API de bancos chilenos para pagos con tarjeta de crédito.',
      },
      {
        title: 'Contratos de propiedad',
        text: 'Construí contratos en blockchain que representaban las acciones compradas y permitían gestionar la adquisición gradual de derechos de propiedad (vesting).',
      },
    ],
    areas: ['JavaScript', 'Python', 'Node.js', 'Blockchain'],
  },
  {
    id: 'primus-bi',
    company: 'Primus BI',
    role: 'Desarrollador frontend',
    start: 'nov. 2018',
    end: 'sept. 2019',
    summary: 'Mantuve y mejoré las interfaces web de Primus BI, y después me uní a Uppercap, su iniciativa de plataforma de inversión junto a CryptoMarket.',
    highlights: [],
    areas: ['Interfaces web', 'Desarrollo frontend'],
  },
]

export const sections = [
  { id: 'about', label: 'Sobre mí', number: '01' },
  { id: 'experience', label: 'Experiencia', number: '02' },
  { id: 'projects', label: 'Proyectos', number: '03' },
  { id: 'upcoming-projects', label: 'Próximos proyectos', number: '04' },
] as const

export const aboutMe: typeof englishAboutMe = {
  label: 'Detrás del teclado',
  title: 'Hola, soy Santiago.',
  introduction: 'Barcelona es mi hogar.',
  description: 'Conoce a Santiago Fernández más allá de su trabajo: apasionado de las tartas de queso, el karaoke y la cocina casera, con hogar en Barcelona.',
  paragraphs: [
    [
      { text: 'Soy un ingeniero de software de Chile y ahora vivo en ' },
      { text: 'Barcelona', emphasis: true },
      { text: '. Después de una etapa como nómada digital, he hecho de esta ciudad mi hogar.' },
    ],
    [
      { text: 'Lejos del teclado, soy un ' },
      { text: 'amante de las tartas de queso', emphasis: true },
      { text: ', un entusiasta del karaoke y un cocinero casero dedicado. Me encanta explorar distintas cocinas, tanto en casa como disfrutando de buena comida allí donde la encuentre.' },
    ],
    [
      { text: 'Fuera de la cocina, dedico tiempo a la calistenia, la música y los videojuegos. Con una buena comida, una canción que cantar o algo nuevo que probar, soy feliz.' },
    ],
  ],
  details: [
    { label: 'Mi canción de karaoke', text: '«Take On Me», de a-ha' },
    { label: 'Mi regla para la tarta de queso', text: 'Tiene que ser al horno.' },
  ],
}

const [beacon, crypto, uppercap] = englishProjects

export const projects: Project[] = [
  {
    ...beacon,
    category: 'Videojuego en línea',
    tagline: 'Construyendo el juego y los sistemas que lo hacen posible.',
    role: 'Ingeniero de software',
    period: 'nov. 2021 — Actualidad',
    description: 'The Beacon es un juego de acción y fantasía en línea centrado en la exploración de mazmorras, el combate y el botín. Los jugadores también pueden personalizar una casa, coleccionar objetos y encontrarse en espacios sociales compartidos.',
    roleSummary: 'Soy uno de los cinco ingenieros del equipo principal de The Beacon en Skillcap / Gambit Studio. Mi trabajo abarca mecánicas de juego, los sistemas compartidos que sustentan nuevos modos y las herramientas para incorporar contenido al juego. También participo en las decisiones técnicas y reviso código del equipo.',
    context: 'Escala del producto: durante su mayor campaña, The Beacon alcanzó un máximo de 220 mil usuarios activos diarios y más de 650 mil cuentas nuevas.',
    contributions: [
      {
        title: 'De ilustraciones a recursos listos para el juego',
        text: 'Propuse y construí el flujo que convierte ilustraciones por capas en animaciones listas para el juego, y sigo manteniéndolo. Los artistas pueden importar un archivo original y elegir una configuración, en lugar de dedicar unos cinco minutos a configurar cada recurso animado a mano. El proceso estandariza más de 1.500 configuraciones de producción.',
      },
      {
        title: 'Una base para nuevos modos de juego',
        text: 'Sustituí implementaciones independientes de modos de juego por sistemas compartidos para gestionar el estado del juego y generar salas. Esto dio a nuevos modos y eventos en vivo una base común.',
      },
      {
        title: 'Modelos compartidos para el contenido del juego',
        text: 'Sustituí definiciones de contenido específicas por modelos de datos compartidos para más de 700 recursos y objetos del juego. Los modelos sirven tanto para crear contenido como para usarlo en las mecánicas de juego, dando a varios ingenieros una base coherente que ampliar.',
      },
      {
        title: 'Desarrollo sin conectarse al backend de producción',
        text: 'Construí la arquitectura inicial del cliente GraphQL y una capa de datos local que replica el modelo de datos de producción. Los ingenieros podían desarrollar y probar las mecánicas de juego sin conectarse al backend de producción.',
      },
      {
        title: 'Implementación del combate',
        text: 'Diseñé e implementé el comportamiento de combate de enemigos y jefes, y contribuí a los sistemas de combate compartidos.',
      },
    ],
    areas: ['Mecánicas de juego', 'Arquitectura de software', 'GraphQL', 'Sistemas compartidos', 'Herramientas de desarrollo'],
    websiteLabel: 'Visitar thebeacon.gg',
  },
  {
    ...crypto,
    category: 'Plataforma de trading',
    tagline: 'Un espacio de trading para entender el mercado y gestionar órdenes.',
    role: 'Desarrollador full stack',
    period: 'oct. 2019 — nov. 2021',
    description: 'CryptoMarket es una plataforma de intercambio de criptomonedas que opera con monedas locales en América Latina. Su interfaz profesional permite estudiar los movimientos de precios, operar y gestionar órdenes en un mismo espacio.',
    descriptionDetail: 'La captura del archivo muestra la interfaz de trading documentada en mayo de 2020, durante mi etapa en la empresa.',
    roleSummary: 'Construí todo el frontend de la interfaz profesional de trading de CryptoMarket, conectando datos de mercado, gráficos, compra y venta, y seguimiento de órdenes en un mismo espacio. Mi trabajo incluyó las integraciones con API y los flujos de trading que se muestran aquí.',
    context: 'Escala de la empresa: en octubre de 2021, la plataforma reportaba 500 mil usuarios registrados y aproximadamente 3 millones de dólares en transacciones diarias.',
    contributions: [
      {
        title: 'Datos de mercado y gráficos',
        text: 'Conecté las API de mercado a la interfaz e integré gráficos de velas para que los usuarios pudieran seleccionar un par de trading y explorar su historial de precios.',
      },
      {
        title: 'Libro de órdenes y operaciones recientes',
        text: 'Construí los paneles del libro de órdenes y de operaciones recientes, situando los precios de compra y venta y la actividad reciente del mercado junto al gráfico.',
      },
      {
        title: 'Compra y venta',
        text: 'Construí los formularios de compra y venta y los conecté a los flujos de trading de la plataforma, permitiendo configurar y enviar órdenes desde el mismo espacio.',
      },
      {
        title: 'Seguimiento de órdenes',
        text: 'Construí las vistas de órdenes activas e historial de trading, ayudando a los usuarios a seguir sus órdenes abiertas y revisar las anteriores.',
      },
    ],
    areas: ['JavaScript', 'Ingeniería frontend', 'Integración de API', 'Visualización de datos', 'Flujos de trading'],
    websiteLabel: 'Visitar CryptoMKT',
    media: {
      ...crypto.media!,
      imageAlt: 'Pantalla de trading avanzado de CryptoMarket con un gráfico de velas de Bitcoin, libro de órdenes y formularios de compra y venta.',
      caption: 'Interfaz profesional de trading · mayo de 2020',
      sourceLabel: 'Captura de CryptoMarket vía CriptoNoticias',
    },
    references: [
      {
        ...crypto.references![0],
        title: 'Guía de la interfaz de trading',
        date: '24 de mayo de 2020',
        description: 'Capturas de las vistas de trading simple y profesional. Esta imagen es de mayo de 2020; la guía se actualizó en marzo de 2024.',
      },
    ],
  },
  {
    ...uppercap,
    category: 'Plataforma de inversión',
    tagline: 'Ayudando a construir una plataforma de inversión desde sus inicios.',
    role: 'Desarrollador full stack',
    period: 'oct. 2019 — nov. 2021',
    description: 'Uppercap conectaba empresas que buscaban capital con inversores. La plataforma reunía información de empresas, oportunidades de inversión y registros de propiedad en una misma experiencia en línea.',
    roleSummary: 'Formé parte del equipo de ingeniería original de Uppercap, ayudando a construir su aplicación web de inversión desde la implementación inicial, pasando por las primeras iteraciones y su cambio de marca. Trabajé en el frontend y el backend, implementando junto al equipo el recorrido principal de inversión y contribuyendo a las integraciones de pago, las carteras de inversores y los contratos de propiedad de acciones.',
    contributions: [
      {
        title: 'Del inicio de sesión a la inversión',
        text: 'Implementé junto al equipo el recorrido de inversión en el frontend y el backend, desde el inicio de sesión hasta la compra de acciones. Mi trabajo incluyó perfiles públicos y privados de empresas, configuración y lanzamiento de rondas de inversión, y opciones de vesting para empresas.',
      },
      {
        title: 'Conectar las compras con los pagos',
        text: 'Implementé junto al equipo la conexión con API de bancos chilenos para pagos con tarjeta de crédito, vinculando la compra de acciones en la aplicación con el procesamiento del pago.',
      },
      {
        title: 'Propiedad de acciones y vesting',
        text: 'Implementé contratos en blockchain para representar las acciones compradas y gestionar la adquisición gradual de derechos (vesting). Estos vinculaban las inversiones en la aplicación con los registros de propiedad de los inversores.',
      },
      {
        title: 'Carteras de inversores y referidos',
        text: 'Implementé funcionalidades de cartera para que los inversores revisaran sus participaciones, y también contribuí a la funcionalidad de referidos de la plataforma.',
      },
    ],
    areas: ['Flujos de inversión', 'Integración de pagos', 'JavaScript', 'Python', 'Node.js', 'Blockchain'],
    websiteLabel: 'Visitar Uper',
    websiteNote: 'El dominio original de Uppercap ahora redirige a Uper.',
    media: {
      ...uppercap.media!,
      imageAlt: 'Ilustración original del lanzamiento de Uppercap: un cohete que despega de la Luna, con la Tierra a lo lejos.',
      caption: 'Logotipo original de Uppercap e ilustración de lanzamiento · 2021',
      sourceLabel: 'Historia oficial del lanzamiento de Uppercap',
    },
    screenshotNote: 'Estas imágenes de guías públicas ilustran la plataforma. Las guías se actualizaron después de mi etapa allí; algunas muestran la marca Uper y no se han verificado las fechas exactas de las capturas.',
    screenshots: [
      {
        ...uppercap.screenshots![0],
        alt: 'Tarjetas de oportunidades de inversión de Biwiser, B21 y FudLup, con enlaces laterales a referidos, reservas, cartera y monedero.',
        title: 'Espacio de inversión',
        caption: 'Explorar oportunidades de inversión y pasar entre reservas, participaciones y funcionalidades de referidos.',
      },
      {
        ...uppercap.screenshots![1],
        alt: 'Cartera de acciones digitales con empresas, cantidades totales y disponibles, información de series de acciones y botones de venta.',
        title: 'Cartera del inversor',
        caption: 'Revisar las participaciones por empresa y serie de acciones, incluyendo el total y las acciones disponibles.',
      },
      {
        ...uppercap.screenshots![2],
        alt: 'Formulario de nueva oferta privada con precio y cantidad de acciones, total en pesos chilenos y botón para crear la oferta.',
        title: 'Crear una oferta privada',
        caption: 'Fijar un precio y una cantidad de acciones, y revisar el total antes de publicar una oferta.',
      },
      {
        ...uppercap.screenshots![3],
        alt: 'Confirmación de oferta publicada con una marca de verificación verde y un botón de aceptación.',
        title: 'Oferta publicada',
        caption: 'Confirmar que se ha publicado una oferta.',
      },
    ],
    references: [
      {
        ...uppercap.references![0],
        title: 'El propósito inicial de la plataforma',
        date: '13 de julio de 2020',
        description: 'La explicación original de Uppercap sobre la plataforma y su proceso de inversión.',
      },
      {
        ...uppercap.references![1],
        title: 'Cinco lecciones del lanzamiento de Uppercap',
        date: '25 de enero de 2021',
        description: 'El relato de un fundador sobre el lanzamiento durante mi etapa en Uppercap. El logotipo original y la ilustración que se muestran aquí proceden de este artículo.',
      },
      {
        ...uppercap.references![2],
        title: 'Guía de cartera y ofertas privadas',
        date: '13 de julio de 2020 · revisada el 9 de marzo de 2022',
        description: 'Una guía de participaciones y ofertas privadas con capturas de la plataforma. La versión actualizada usa la marca Uper.',
      },
      {
        ...uppercap.references![3],
        title: 'Reservas y estados de inversión',
        date: '9 de junio de 2021 · revisada el 29 de septiembre de 2022',
        description: 'Cómo las reservas conectan las oportunidades de inversión con las carteras de los inversores, ilustrado con la captura del espacio de inversión.',
      },
      {
        ...uppercap.references![4],
        title: 'Guía del programa de referidos',
        date: '22 de septiembre de 2020 · revisada el 2 de julio de 2024',
        description: 'Una guía de referidos e invitaciones, revisada después de mi etapa en Uppercap.',
      },
    ],
  },
]

export const upcomingProjects: UpcomingProject[] = [
  {
    ...englishUpcomingProjects[0],
    category: 'Tu ayuda en la cocina',
    summary: 'Convierte lo que ya tienes en la cocina en comidas ricas, con menos desperdicio y menos dudas.',
    tagline: 'Un poco menos de desperdicio. Muchas más posibilidades.',
    introduction: 'Abre la nevera y descubre qué preparar. Estoy creando PantryApp para ayudarte a aprovechar la comida que ya tienes, encontrar platos que te apetezcan y hacer la compra con una lista que tenga sentido.',
    availability: 'Próximamente en iOS y Android',
    features: [
      {
        title: 'Ten claro lo que tienes',
        text: '¿Queda arroz en la despensa? ¿Siguen esperando esos tomates? Ten una visión clara de tu cocina, con recordatorios cuando toca usar un alimento y avisos cuando se están acabando los básicos.',
      },
      {
        title: 'Conoce mejor tus alimentos',
        text: 'Consulta calorías, proteínas y más información de tus ingredientes, con valores nutricionales por 100 g y fuentes claras para las cifras. Busca alimentos incluso sin conexión y añade tus propios valores para los ingredientes que usas.',
      },
      {
        title: 'La cena empieza con lo que tienes',
        text: 'Convierte unos pocos ingredientes en ideas para cenar que se adapten a tu forma de comer. La IA te ayudará a encontrar recetas según tus gustos y el tiempo que tengas. Guarda tus favoritas, ajusta las raciones y confirma lo que has cocinado para mantener tu despensa al día.',
      },
      {
        title: 'Haz la semana un poco más fácil',
        text: 'Elige tus comidas, ajusta las raciones y reúne todo lo que te falta en una sola lista de la compra. PantryApp tendrá en cuenta lo que ya hay en casa, para que dediques menos tiempo a las listas y más a disfrutar de la cena.',
      },
      {
        title: 'Una despensa para compartir',
        text: 'Mantén a todos al tanto, desde lo que hay en la despensa hasta lo que hace falta comprar. Comparte ingredientes y listas de la compra con quienes viven contigo, mientras tus recetas guardadas siguen siendo tuyas. Consulta y actualiza las existencias incluso sin conexión.',
      },
      {
        title: 'Una foto para empezar',
        text: 'Haz una foto y recibe ayuda para identificar tus ingredientes. Revisa las sugerencias, añade cantidades y fechas, y elige qué entra en tu despensa. Una forma más rápida de empezar, con el control de lo que se guarda en tus manos.',
      },
    ],
    screenshots: [
      {
        ...englishUpcomingProjects[0].screenshots[0],
        alt: 'Prototipo inicial de PantryApp con una despensa de ejemplo, recuentos de alimentos para usar pronto y existencias bajas, búsqueda de ingredientes y navegación de la cocina.',
        title: 'Tu cocina de un vistazo',
        caption: 'Lo que hay en tus estantes, lo que se está acabando y lo que conviene usar pronto. Se muestra una despensa de ejemplo.',
      },
      {
        ...englishUpcomingProjects[0].screenshots[1],
        alt: 'Formulario de ingredientes del prototipo inicial de PantryApp con valores nutricionales del tomate por 100 g, su fuente USDA y un campo de cantidad.',
        title: 'Una mirada más cercana a tus alimentos',
        caption: 'Conoce tus ingredientes, desde sus valores nutricionales aproximados hasta la cantidad que te queda.',
      },
    ],
  },
]

export const cheesecake = {
  title: 'Tarta de queso.',
  introduction: 'Un cuaderno de recetas que merece la pena hornear y porciones que merece la pena recordar.',
  tabs: [
    {
      id: 'recipes',
      label: 'Recetas',
      title: 'Las cosas buenas necesitan un poco de horno.',
      description: 'Recetas, experimentos y notas para la próxima tanda.',
      status: 'Todavía no hay recetas',
    },
    {
      id: 'reviews',
      label: 'Reseñas',
      title: 'Cada porción tiene una historia.',
      description: 'Descubrimientos de tartas de queso, notas de degustación y lugares donde repetir.',
      status: 'Todavía no hay reseñas',
    },
  ],
} as const

export const reviews: Review[] = [
  {
    ...englishReviews[0],
    description: 'Una tarta de queso deliciosa, hecha con su propia receta. Algo que disfruto de muchas de las tartas que he probado aquí en Cataluña es que, como las de estilo vasco, suelen apostar por una textura más cremosa y dejar que el sabor del queso destaque, en vez de taparlo con el dulzor. Fismuler tiene mucho bombo en internet, y suelo tomarme eso con cierta cautela: a veces es exageración y otras, simplemente, gente sumándose al entusiasmo. Para mí, no es la mejor tarta de queso de Barcelona, pero desde luego merece la pena.',
    image: {
      src: englishReviews[0].image.src,
      alt: 'Una porción de la tarta de queso de Fismuler en un plato blanco, con la superficie tostada y un centro suave y cremoso.',
    },
    webSaid: [
      {
        text: 'En una demostración de la receta con el chef Nino Redruello y la pastelera Yara Callau, 20MINUTOS recoge una mezcla de queso crema, queso azul e Idiazábal ahumado, horneada en una base de masa sablé. Esa combinación ayuda a explicar su característico sabor a queso.',
        source: englishReviews[0].webSaid![0].source,
      },
      {
        text: 'En Condé Nast Traveler, Redruello cuenta que se inspiró en la tarta de queso de Hilario Arbelaitz en Zuberoa, en el País Vasco. Describe un mes de pruebas, con dos tartas al día, para desarrollar la versión propia de Fismuler.',
        source: englishReviews[0].webSaid![1].source,
      },
    ],
  },
  {
    ...englishReviews[1],
    description: 'PastéBCN es uno de mis sitios favoritos para comer tarta de queso en Barcelona. Son muy creativos: casi cada vez que voy a la tienda hay un sabor nuevo, y las tartas suelen estar buenísimas. Estaba de visita en Barcelona cuando abrió la tienda y pude asistir a su inauguración abierta al público. Desde entonces, intento comprar al menos una tarta al mes.',
    image: {
      src: englishReviews[1].image.src,
      alt: 'Tres tartas de queso pequeñas y redondas y una porción de tarta de queso en una caja blanca abierta de PastéBCN.',
    },
    webSaid: [
      {
        text: 'El catálogo del propio local incluye tartas de queso con pistacho siciliano, avellana de Reus, tiramisú y queso azul. Su variedad va mucho más allá de un único sabor clásico.',
        source: englishReviews[1].webSaid![0].source,
      },
      {
        text: 'Vinos y Restaurantes cuenta que la tarta de queso de Hugo Roche con chocolate negro al 70% y sal Maldon reinterpreta su merienda de la infancia: pan tostado con aceite de oliva y chocolate, rematada con un chorrito de aceite de oliva virgen extra.',
        source: englishReviews[1].webSaid![1].source,
      },
    ],
  },
]

export const recipes: Recipe[] = [
  {
    ...englishRecipes[0],
    name: 'La nube proteica',
    subtitle: 'Tarta de queso con ricotta y queso cottage',
    description: 'Puede que no gane ningún concurso de sabor ni sea la mejor tarta de queso que hayas probado. Pero está pensada para los antojos de cada día: una tarta sencilla que puede encajar en una dieta equilibrada, con una porción a tu medida, sin tener que esperar al «día libre».',
    category: 'Al horno / Proteica',
    image: {
      src: englishRecipes[0].image!.src,
      alt: 'La tarta de queso La nube proteica en una fuente rectangular de vidrio dentro del horno.',
    },
    ingredients: [
      { name: 'Ricotta', quantity: '250 g' },
      { name: 'Queso cottage', quantity: '250 g' },
      { name: 'Huevos', quantity: '2' },
      { name: 'Proteína en polvo de vainilla', quantity: '30–40 g' },
      { name: 'Miel', quantity: '2–3 cucharadas' },
      { name: 'Vainilla', quantity: '1 cucharadita', note: 'Opcional' },
      { name: 'Sal', quantity: 'Una pizca' },
      { name: 'Ralladura o zumo de limón', quantity: 'Un poco', note: 'Opcional, pero recomendable' },
    ],
    details: [
      { id: 'oven', label: 'Horno', value: '165°C' },
      { id: 'bake', label: 'Horneado', value: '35–45 minutos' },
      { id: 'chill', label: 'Refrigeración', value: 'Al menos 3–4 horas' },
      { id: 'tin', label: 'Molde', value: 'Molde pequeño o fuente para horno' },
    ],
    steps: [
      {
        title: 'Prepara el molde',
        description: 'Forra un molde pequeño o una fuente para horno y precalienta el horno a 165°C.',
      },
      {
        title: 'Tritura hasta conseguir una mezcla lisa',
        description: 'Tritura todos los ingredientes hasta conseguir una mezcla muy lisa. Es especialmente útil para el queso cottage. Vierte la mezcla en el molde o la fuente forrados.',
      },
      {
        title: 'Hornea con suavidad',
        description: 'Hornea durante unos 35–45 minutos. Los bordes deben estar cuajados y el centro todavía debe temblar un poco.',
      },
      {
        title: 'Deja enfriar y refrigera',
        description: 'Deja enfriar por completo y refrigera durante al menos 3–4 horas. Mejor aún si la dejas toda la noche. La tarta gana bastante firmeza al enfriarse.',
      },
    ],
    notes: [
      'Para una versión más ligera, usa más queso cottage y menos ricotta. A cambio, tendrá algo menos de cremosidad y sabor.',
      'La proteína en polvo de vainilla puede tapar fácilmente el sabor del queso y la miel. Si quieres que destaquen esos sabores, omítela o usa proteína en polvo sin sabor.',
    ],
    nutrition: {
      scope: 'Tarta entera',
      values: [
        { label: 'Calorías', value: '900–1.050 kcal' },
        { label: 'Proteínas', value: '90–105 g' },
        { label: 'Carbohidratos', value: '55–70 g' },
        { label: 'Grasas', value: '35–45 g' },
      ],
      note: 'Valores aproximados para la tarta entera. Los valores reales dependen de los ingredientes y las cantidades que uses.',
    },
  },
  {
    ...englishRecipes[1],
    name: 'Tarta de queso de ricotta',
    subtitle: 'Sencilla, diferente y fácil de adaptar a tu gusto',
    description: 'Es una de mis tartas de queso favoritas. La ricotta le da un sabor muy particular, un cambio refrescante frente a las tartas que encuentras habitualmente en las tiendas. Es una receta sencilla, así que puedes ajustarla hasta dejarla a tu gusto.',
    category: 'Al horno / Ricotta',
    image: {
      ...englishRecipes[1].image!,
      alt: 'Una porción de tarta de queso de ricotta con la superficie dorada sobre un plato blanco.',
    },
    ingredients: [
      { name: 'Ricotta de leche entera', quantity: '800 g' },
      { name: 'Queso crema', quantity: '250 g', note: 'Ablandado' },
      { name: 'Azúcar', quantity: '130 g' },
      { name: 'Sal', quantity: 'Una pizca' },
      { name: 'Extracto de vainilla', quantity: '5,4 ml' },
      { name: 'Huevos', quantity: '5' },
    ],
    details: [
      { id: 'oven', label: 'Horno', value: '165°C' },
      { id: 'bake', label: 'Horneado', value: '80–90 minutos' },
      { id: 'chill', label: 'Refrigeración', value: 'Al menos 8 horas / toda la noche' },
      { id: 'tin', label: 'Molde', value: 'Molde pequeño o fuente para horno' },
    ],
    steps: [
      {
        title: 'Prepara el molde',
        description: 'Forra un molde pequeño o una fuente para horno y precalienta el horno a 165°C.',
      },
      {
        title: 'Tritura y después añade los huevos',
        description: 'Tritura la ricotta, el queso crema, el azúcar y la sal hasta conseguir una mezcla muy lisa. Incorpora la vainilla y después añade los huevos en dos tandas de dos y el último huevo por separado, mezclando bien tras cada adición. Vierte la mezcla en el molde o la fuente forrados.',
      },
      {
        title: 'Hornea hasta que se dore ligeramente',
        description: 'Hornea durante 80–90 minutos, hasta que la superficie esté ligeramente dorada.',
      },
      {
        title: 'Deja enfriar y refrigera toda la noche',
        description: 'Deja enfriar por completo y refrigera durante al menos 8 horas. Dejarla toda la noche es una forma sencilla de darle a la tarta el tiempo que necesita.',
      },
    ],
    notes: [
      'Puedes añadir una base de galleta si te apetece. Yo prefiero mis tartas de queso sin base.',
    ],
    nutrition: {
      scope: 'Receta anterior · 1/8 de la tarta',
      values: [
        { label: 'Calorías', value: '557 kcal' },
        { label: 'Grasas totales', value: '35,2 g' },
        { label: 'Grasas saturadas', value: '19,9 g' },
        { label: 'Grasas trans', value: '0,2 g' },
        { label: 'Colesterol', value: '179,2 mg' },
        { label: 'Carbohidratos totales', value: '48,1 g' },
        { label: 'Fibra alimentaria', value: '0,0 g' },
        { label: 'Azúcares totales', value: '26,3 g' },
        { label: 'Sodio', value: '333,6 mg' },
        { label: 'Proteínas', value: '17,1 g' },
      ],
      note: 'Estas estimaciones corresponden a las cantidades de ingredientes anteriores y no se han recalculado para esta versión. Los valores reales dependen de los ingredientes y del tamaño de la porción; añadir una base de galleta también los cambia.',
    },
  },
]
