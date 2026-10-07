# Santiago Fernández — Personal Website

A personal portfolio built with React, TypeScript, and Vite. It presents an introduction, professional experience, selected and upcoming project pages, and a cheesecake notebook. The responsive, dark layout is inspired by Brittany Chiang's portfolio, with an original implementation and Santiago's own content.

## Local development

Use Node 22 (`nvm use` reads `.nvmrc`) and npm. Node 22.12+ is required for the build and Cloudflare deployment tools; the dependency lockfile is committed.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite, usually http://localhost:5173. The development server reloads when files change.

## Validate and preview

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

`lint` uses Oxlint, as provided by the official Vite React/TypeScript starter. `typecheck` runs TypeScript in strict mode. `build` creates the static production files in `dist/`. `preview` serves those files locally, usually at http://localhost:4173. Run validation before publishing; the same checks run in GitHub Actions on pushes to `main` and pull requests.

## Update content and styling

- `src/content/profile.ts` contains the identity, introduction, social links, and ordered experience entries. Highlights have a short title and supporting text for easier scanning. Product/company scale appears separately from personal achievements; keep that attribution when editing.
- `src/content/about.ts` contains the separate personal introduction at `/about`, reached through the small “Behind the keyboard” link in the homepage footer. It introduces Santiago’s Chilean roots, home in Barcelona after life as a digital nomad, and interests in cooking, calisthenics, music, and games. Its personal details come from his confirmed descriptions: karaoke pick “Take On Me” by a-ha and a preference for baked cheesecake. The page links to the cheesecake notebook; the homepage keeps its professional introduction.
- Lead public copy with the product or team benefit, then support it with concrete work. Keep technology names where they establish experience, avoid repeating long responsibility lists across sections, and preserve the scope of each contribution. The homepage gives the short version; project pages carry the supporting detail.
- `src/content/projects.ts` contains the three project pages, their descriptions, contributions, and metadata. Product descriptions use the linked public sources; personal contributions come from the CV and Santiago's confirmed descriptions. Engineering roles and contributions appear before product imagery and context. CryptoMKT and Uppercap include dated imagery and source links from the employment period. Dates for the latter two reflect the shared employment period, not separate project launch dates.
- `src/content/upcomingProjects.ts` contains upcoming projects, their intended features, and prototype screenshots. PantryApp's public overview is adapted from the local PantryApp repository's `docs/MASTERPLAN.md` and README, reviewed October 6, 2026. It describes the product direction without presenting unfinished features as available. Preserve the iOS/Android coming-soon message and visible warning on every prototype screenshot; no release date or subscription price is promised.
- `src/content/cheesecake.ts` contains the notebook introduction and tab copy. `src/content/recipes.ts` contains recipe entries: ingredients, method, oven/tin/chilling details, kitchen notes, and approximate whole-cheesecake macros. The first entry, The Protein Cloud, uses Santiago’s supplied ricotta and cottage cheese recipe and nutrition estimates. `src/content/reviews.ts` contains the review type and English entries; the reviews cover Fismuler and PastéBCN in Barcelona, with Santiago’s photos and tasting notes. There is no submission form or persistence layer.
- Add recipes to `src/content/recipes.ts` and optional photos under `public/images/cheesecake/`. Each recipe has its own `/cheesecake/recipes/:slug` page; the Recipes tab builds its notebook list from the entries. Update the sitemap when adding an entry. Keep ingredient ranges and optional ingredients, identify the nutrition scope, and get missing instructions from the author before presenting a complete recipe.
- `src/pages/` contains the homepage, personal introduction, project detail, cheesecake, and not-found views. `Pages.module.css` styles the new pages and shared header.
- `src/components/` contains the reusable profile, navigation, social links, and experience entry components. `Portfolio.module.css` defines their responsive layout and styles.
- `src/index.css` contains shared colors, typography, global accessibility styles, and reduced-motion behavior.
- `index.html` contains the default page title, description, and social-preview metadata. `usePageMetadata` updates these in the browser for each route. Crawlers that do not execute JavaScript still receive the default metadata; prerendering would be needed for reliable per-project social previews.
- `public/favicon.svg` is the original initials favicon.

Inter is bundled from `@fontsource-variable/inter` and served locally. The page makes no font-service, analytics, or content-API requests. Content renders in the browser; static HTML prerendering can be considered if search indexing becomes a priority.

## Interaction and accessibility

The homepage uses `#about`, `#experience`, `#projects`, and `#upcoming-projects` anchors and updates its active navigation as the visitor scrolls. The profile is sticky on desktop and flows normally on smaller screens. Links support keyboard focus, and a skip link moves focus directly to the content.

React Router provides the following routes, browser history, hash navigation, and scroll restoration:

- `/` — portfolio
- `/about` — Behind the keyboard, a personal introduction
- `/projects/the-beacon` — game overview and engineering contributions
- `/projects/cryptomkt` — professional trading interface
- `/projects/uppercap` — investment platform
- `/projects/pantry-app` — upcoming kitchen companion, planned features, and labeled early prototype images
- `/cheesecake` — Recipes and Reviews tabs
- `/cheesecake/recipes/the-protein-cloud` — ricotta and cottage cheese recipe

The notebook defaults to Recipes; `/cheesecake?tab=reviews` opens Reviews directly. Tabs support Left/Right arrows, Home/End, and Tab to enter the active panel. An unrecognized tab query falls back to Recipes. Page changes move keyboard focus to the main content; tab changes preserve focus and scroll position. Unknown routes display a not-found view.

## Languages

English is the default at `/`. Every page also has a Spanish version under `/es/`, using the same slugs: for example, `/es/about`, `/es/projects/uppercap`, and `/es/cheesecake/recipes/the-protein-cloud`. The URL determines the language; browser preferences do not redirect visitors. Unknown paths under `/es/` show the Spanish not-found page.

The header's EN / ES links switch to the equivalent page, preserving query strings and section anchors, including the notebook's selected tab. Internal navigation stays in the current language. Both languages use the same page components and artwork; text within existing screenshots remains as captured.

English content stays in `src/content/`. Spanish copy lives in `src/content/es/index.ts`, sharing identifiers, assets, and source URLs with English. Interface and accessibility copy lives in `src/i18n/ui.ts`; TypeScript requires matching translation keys. When adding content, update both languages and the sitemap. Recipe detail IDs stay language-independent so list cards can select baking and chilling details in either language.

`usePageMetadata` updates the document language, translated titles and descriptions, canonical URL, Open Graph locale, and English/Spanish alternate links. The sitemap lists both languages with reciprocal `hreflang` links and English as `x-default`. As with the existing site, route metadata updates in the browser; crawlers that do not execute JavaScript receive the default English HTML metadata.

Run `npm test` for language routing, content parity, and page-rendering checks, alongside lint, type checking, and the production build.

The pointer glow is enabled only for desktop-sized viewports with a fine, hover-capable pointer and no reduced-motion preference. Reduced motion also disables smooth scrolling and transitions. All work-history content remains visible without hover.

## Add cheesecake reviews / Añadir reseñas de tartas de queso

Reviews appear in full in the Reviews tab at `/cheesecake?tab=reviews` and `/es/cheesecake?tab=reviews`. Each entry requires a picture, title, description, and linked shop name. There are no dates or ratings. Array order controls display order, and a translated empty state appears when the collection has no entries. Photos sit beside the text on desktop and above it on mobile. Shop links open in a new tab with a translated accessibility announcement.

Las reseñas aparecen completas en la pestaña Reseñas de `/cheesecake?tab=reviews` y `/es/cheesecake?tab=reviews`. Cada entrada necesita una foto, un título, una descripción y el nombre del local con un enlace. No hay fechas ni puntuaciones. El orden del array determina el orden de las reseñas, y aparece un mensaje traducido de contenido vacío cuando la colección no tiene entradas. Las fotos aparecen junto al texto en escritorio y encima en móvil. Los enlaces de los locales se abren en una pestaña nueva con un aviso de accesibilidad traducido.

Add the English entry to `src/content/reviews.ts` and its Spanish equivalent to `src/content/es/index.ts` in the same update. Store photos under `public/images/cheesecake/`. Keep each `id`, image `src`, and `shop` identical in both languages; translate `title`, `description`, and image `alt`. Review entries use the existing notebook routes, so adding one does not require a new sitemap entry.

Añade la entrada en inglés a `src/content/reviews.ts` y su equivalente en español a `src/content/es/index.ts` en la misma actualización. Guarda las fotos en `public/images/cheesecake/`. Mantén el mismo `id`, `src` de la imagen y `shop` en ambos idiomas; traduce `title`, `description` y `alt` de la imagen. Las entradas usan las rutas existentes del cuaderno, por lo que añadir una reseña no requiere una nueva entrada en el sitemap.

Template only: replace every placeholder with your own review before adding these entries to the public collections.

Solo es una plantilla: sustituye todos los valores de ejemplo por tu propia reseña antes de añadir estas entradas a las colecciones públicas.

```ts
// English — src/content/reviews.ts
export const reviews: Review[] = [
  {
    id: 'your-review-id',
    title: 'Your review title',
    description: 'Your complete tasting notes.',
    image: {
      src: '/images/cheesecake/your-photo.webp',
      alt: 'Describe your cheesecake photo.',
    },
    shop: { name: 'Shop name', url: 'https://example.com' },
  },
]

// Español — src/content/es/index.ts
export const reviews: Review[] = [
  {
    id: 'your-review-id',
    title: 'El título de tu reseña',
    description: 'Tus notas de degustación completas.',
    image: {
      src: '/images/cheesecake/your-photo.webp',
      alt: 'Describe la foto de tu tarta de queso.',
    },
    shop: { name: 'Shop name', url: 'https://example.com' },
  },
]
```

Layout examples live only in `tests/fixtures/reviews.mjs`; they are not imported by the website or published as real reviews. The rendering tests use them to check both languages, long copy, preserved order, and shop links.

Los ejemplos de diseño solo están en `tests/fixtures/reviews.mjs`; el sitio no los importa ni los publica como reseñas reales. Las pruebas de renderizado los usan para comprobar ambos idiomas, los textos largos, el orden y los enlaces de los locales.

Reviews may optionally include `webSaid`, an array of `{ text, source: { label, url } }` notes. These appear separately under “What the web said:” with a source link beside each note. Keep personal impressions in `description`, paraphrase published facts, and translate each note while sharing its source URL and publication name. Fismuler’s notes link to the 20MINUTOS recipe demonstration and Condé Nast Traveler’s interview with Nino Redruello. PastéBCN’s notes link to its own catalogue and Vinos y Restaurantes’ coverage of Hugo Roche’s chocolate cheesecake. Shop links use Santiago’s supplied Google Maps URLs. Opening attendance and purchasing habits remain his personal account; reviews carry no publication dates.

Las reseñas pueden incluir `webSaid`, un array opcional de notas con la forma `{ text, source: { label, url } }`. Aparecen por separado bajo «Lo que dice la web:», con un enlace a la fuente junto a cada nota. Mantén las impresiones personales en `description`, resume los hechos publicados con tus propias palabras y traduce cada nota conservando la URL y el nombre de la publicación. Las notas de Fismuler enlazan a la demostración de la receta de 20MINUTOS y a la entrevista de Condé Nast Traveler con Nino Redruello. Las de PastéBCN enlazan a su propio catálogo y al artículo de Vinos y Restaurantes sobre la tarta de chocolate de Hugo Roche. Los enlaces de los locales usan las URLs de Google Maps facilitadas por Santiago. La asistencia a la inauguración y los hábitos de compra siguen siendo su relato personal; las reseñas no llevan fechas de publicación.

## Deployment to Cloudflare

The production domain is `https://safernan.dev`. `wrangler.jsonc` configures a static-assets-only Worker named `safernan-website`, serving `dist/` on both `safernan.dev` and `www.safernan.dev`. No runtime server, database, or application secrets are required. Deploying requires Cloudflare authentication and access to the account containing the domain.

Cloudflare's `single-page-application` fallback serves `index.html` for app routes such as `/projects/the-beacon` and `/cheesecake`, so direct links and refreshes work. Existing asset paths serve their files. Unknown app routes display the React not-found view with HTTP status 200; a true server-side 404 would require a different routing setup.

For a first deploy from this checkout:

```sh
npm ci
npx wrangler login
npm run deploy
```

`npm run deploy` runs lint, type checking, and the production build before uploading the site. Wrangler configures the custom domains; Cloudflare creates their DNS records and provisions HTTPS certificates. If a hostname already has a conflicting DNS record, review it before replacing it. Certificate activation may take time after deployment. `npm run preview:cloudflare` builds and serves the site locally through Cloudflare's runtime without publishing it.

For automatic deployments, commit and push the configuration to `safernan121/personal-website`, then connect that repository in Cloudflare **Workers & Pages → Create application → import a Git repository**. Use:

| Setting | Value |
| --- | --- |
| Worker name | `safernan-website` |
| Production branch | `main` |
| Root directory | Repository root |
| Build command | `npm run lint && npm run typecheck && npm run build` |
| Deploy command | `npx wrangler deploy` |

The dashboard build installs dependencies automatically and reads the Node version from `.nvmrc`. Future pushes to the connected production branch will publish the site. This repository configuration alone does not enable automatic deployment; the Cloudflare Git integration must be connected first.

The preferred address is the domain without `www`. The default canonical URL and `og:url` are set in `index.html`; `usePageMetadata` updates them for the current route, excluding query strings and fragments. `public/robots.txt` references `public/sitemap.xml`; update the sitemap when adding public routes. Crawlers that do not execute JavaScript still receive the homepage metadata on every route. Custom social-preview artwork and prerendering remain optional follow-ups.

Both configured hostnames serve the site. To redirect `www` to the preferred address, add Cloudflare's **Redirect from WWW to root** redirect-rule template for this zone, preserving the path and query string. Domain-level redirects are not supported by Workers Static Assets `_redirects` files.

After deployment, check HTTPS on both hostnames, direct links and reloads on every app route, asset loading, `robots.txt`, and `sitemap.xml`.

## Browser security

`public/_headers` applies the same security policy to English, Spanish, and static assets through Cloudflare Workers Static Assets. Vite copies it to `dist/` during the build. The Content Security Policy permits local scripts, styles, fonts, and images, blocks inline scripts, framing, and form submissions, and upgrades insecure resource requests. The other headers disable MIME sniffing and unused device permissions, limit referrer information, and isolate cross-origin resources. Verify changes with `npm run preview:cloudflare`; Vite's preview server does not apply `_headers`.

`public/_headers` aplica la misma política de seguridad al inglés, al español y a los archivos estáticos mediante Cloudflare Workers Static Assets. Vite lo copia a `dist/` durante la compilación. La política de seguridad de contenido permite scripts, estilos, fuentes e imágenes locales, bloquea scripts en línea, la inclusión en marcos y el envío de formularios, y actualiza las solicitudes de recursos inseguros. Las demás cabeceras desactivan la detección automática de tipos MIME y los permisos de dispositivos que no se usan, limitan la información del referente y aíslan los recursos entre orígenes. Comprueba los cambios con `npm run preview:cloudflare`; el servidor de vista previa de Vite no aplica `_headers`.

HSTS lasts one year on `safernan.dev` and `www.safernan.dev`, whose HTTPS certificates have been verified. It does not cover other subdomains or request preload registration. HSTS protects browsers after an HTTPS visit; enable Cloudflare's **Always Use HTTPS** separately to redirect a first HTTP visit. The scoped npm override pins Miniflare's Sharp dependency to `0.35.5`, which fixes [GHSA-wq5f-xc86-pv6w](https://github.com/lovell/sharp/security/advisories/GHSA-wq5f-xc86-pv6w). Remove it once Wrangler's Miniflare dependency uses a patched version, then regenerate the lockfile and run the audit.

HSTS dura un año en `safernan.dev` y `www.safernan.dev`, cuyos certificados HTTPS se han verificado. No cubre otros subdominios ni solicita el registro de precarga. HSTS protege los navegadores después de una visita HTTPS; activa por separado **Always Use HTTPS** en Cloudflare para redirigir una primera visita HTTP. La sustitución de npm fija la dependencia Sharp de Miniflare en `0.35.5`, que corrige [GHSA-wq5f-xc86-pv6w](https://github.com/lovell/sharp/security/advisories/GHSA-wq5f-xc86-pv6w). Elimínala cuando la dependencia Miniflare de Wrangler use una versión corregida, regenera el archivo de bloqueo y ejecuta la auditoría.

## Content boundaries

The original CV, its phone number, and the PDF download are intentionally not included. The displayed email and professional profile links are the chosen contact methods. No blog or education section is included.

## Artwork and sources

The Beacon description is adapted from [its official website](https://thebeacon.gg/), accessed October 5, 2026. Engineering contributions come from Santiago's supplied CV and his confirmed descriptions of the asset-import workflow and combat work. The approximate five-minute setup time is his reported estimate, not a benchmark or an aggregate hours-saved calculation. He confirmed designing and implementing enemies and bosses, with additional contributions to shared combat systems; the copy does not imply ownership of the entire combat architecture or independently verified player reception. Product-wide campaign metrics remain attributed to the game. All game artwork belongs to The Beacon; visible credits link to the source. Local files are the WebP responses served by the official website, saved with matching extensions:

| Local asset | Official source |
| --- | --- |
| `public/images/the-beacon/logo.webp` | [Logo](https://thebeacon.gg/assets/hero_LOGO_letters-BGQjDsLw.png) |
| `public/images/the-beacon/combat.webp` | [Combat](https://thebeacon.gg/assets/combat-vRMshlox.png) |
| `public/images/the-beacon/house.webp` | [Home](https://thebeacon.gg/assets/house-Dnc5OxVk.png) |
| `public/images/the-beacon/social.webp` | [Social](https://thebeacon.gg/assets/social-B8SdEyTm.png) |

CryptoMKT and Uppercap use the following locally served assets, accessed October 5, 2026. Visible captions link to the original article. Company imagery illustrates the product and does not imply Santiago created that specific artwork or every part of the pictured interface.

| Local asset | Source and date |
| --- | --- |
| `public/images/cryptomkt/logo.png` | [Official CryptoMKT logo](https://www.cryptomkt.com/static/global/assets/images/cmkt-blanc.png), current website; not presented as a historical logo |
| `public/images/cryptomkt/trading-2020.png` | [Original screenshot](https://www.criptonoticias.com/wp-content/uploads/2020/05/compra_venta_avanzada.png) in [CriptoNoticias’ guide](https://www.criptonoticias.com/tutoriales-guias/cryptomkt-compra-vende-bitcoin-criptomonedas-moneda-local/), published May 24, 2020; screenshot credited to CryptoMarket. The article was updated March 29, 2024, but this asset is in its May 2020 upload directory and shows the period interface. |
| `public/images/uppercap/logo-2021.png` | [Original Uppercap logo](https://contenido.uppercap.com/wp-content/uploads/2021/02/ident-azul.png), February 2021 upload |
| `public/images/uppercap/launch-2021.png` | [Launch illustration](https://contenido.uppercap.com/wp-content/uploads/2021/01/banner_cohete_sin-logo.png), January 2021 upload |

The Uppercap images appear in its [January 25, 2021 founder story](https://contenido.uppercap.com/knowledgebase/5-lecciones-de-la-startup-chilena-que-debuto-en-pandemia/), last updated February 19, 2021. The original `soporte.uppercap.com` asset URLs now redirect to `contenido.uppercap.com`; files use the PNG originals from that destination. [Uppercap’s July 13, 2020 platform article](https://contenido.uppercap.com/knowledgebase/donde-invertir-en-negocios/) supports its product overview. The old company domain redirects to [Uper](https://www.uper.co/en/), reflected in the website link. Later Uper-branded account-guide screenshots were excluded because the guide was revised in March 2022.

Uppercap also includes public in-app screenshots from two official guides:

| Local asset | Public source |
| --- | --- |
| `public/images/uppercap/reservations-guide.jpg` | [Investment workspace image](https://contenido.uppercap.com/wp-content/uploads/2021/06/reservas-ok-1024x393.jpg) in [the reservations guide](https://contenido.uppercap.com/knowledgebase/que-son-las-reservas-en-uppercap/), first published June 9, 2021 and revised September 29, 2022 |
| `public/images/uppercap/portfolio-guide.png` | [Portfolio image](https://contenido.uppercap.com/wp-content/uploads/2020/07/vender-1024x291.png) in [the private-offer guide](https://contenido.uppercap.com/knowledgebase/como-hacer-una-oferta-privada-en-uppercap/), first published July 13, 2020 and revised March 9, 2022 |
| `public/images/uppercap/private-offer-2020.jpg` | [Private-offer form](https://contenido.uppercap.com/wp-content/uploads/2020/07/imagen-8-Apertura-oferta-privada-de-acciones-e1594661427194.jpg) in the same private-offer guide |
| `public/images/uppercap/offer-created-2020.png` | [Publication confirmation](https://contenido.uppercap.com/wp-content/uploads/2020/07/2020-07-22-13_31_44-Window.png) in the same private-offer guide |

These are product-context screenshots from public support documentation. Their exact capture dates are unverified, and some show later Uper branding. Upload-directory dates alone do not prove that files remained unchanged. The page explicitly states this distinction, provides original-guide links, and offers full-size image links for reading small UI text. Source-example share quantities are not presented as Santiago’s personal holdings or project impact. The launch artwork remains separately identified as original Uppercap material.

Santiago additionally confirmed work on Uppercap’s referrals, main investment mechanisms, and a blockchain contract tokenizing each purchased share. These additions are attributed to his account, alongside the existing CV contributions on project publishing, portfolios, and vesting. Screen descriptions do not claim he personally implemented every pictured feature. No blockchain network, token standard, referral reward percentage, or security/performance claim has been inferred. The [referral guide](https://contenido.uppercap.com/knowledgebase/que-es-el-programa-de-referidos-de-uppercap/) was first published September 22, 2020 but revised July 2, 2024; later reward terms are excluded. A linked step-by-step investment tutorial required sign-in and was not accessed.

Santiago confirmed being part of Uppercap’s original team, helping implement the first web-app iterations and staying through its rebrand. He co-implemented the investment journey across the frontend and backend, including login, public and private company profiles, company vesting options, investment-round setup and launching, share purchases, and integration with Chilean bank APIs for credit-card payments. The copy describes shared implementation rather than sole system ownership or product-design authorship. No payment provider, authentication mechanism, or detailed access-control implementation has been inferred. His observation that much of his work remains recognizable in the product is not used to assert that the underlying code is unchanged.

Santiago confirmed he implemented the front end of the pictured CryptoMarket professional trading view. Its contribution breakdown combines that confirmation, the existing CV text, and the interface elements visible in the screenshot. It does not infer a framework, chart library, data-update mechanism, performance improvement, or custom chart-engine authorship from the image.

A public search found Santiago’s [existing LinkedIn profile](https://www.linkedin.com/in/safernan12/) confirming the CryptoMarket role and a third-party employee-directory listing. Neither adds a substantiated new contribution beyond the CV, so no directory content or additional personal details were added. No company-authored personal feature was found in that search.

The cheesecake illustration is an original inline SVG.

PantryApp uses the owner's existing `docs/pantry-preview.png` and `docs/nutrition-preview.jpg` from the local PantryApp repository, copied into `public/images/pantry-app/`. They show an early example pantry and ingredient nutrition form. Each screenshot has a visible “Early prototype image” warning and “Design may change” label. Screenshots fill their frames without added padding; CSS crops only the nutrition preview's empty side gutters, preserving the original image file and visible form. The homepage uses an original inline SVG sprout mark rather than a product screenshot. The copy speaks directly to home cooks and describes future benefits, informed by the masterplan: pantry tracking, ingredient nutrition, existing-recipe discovery, weekly planning, household stock/shopping, reviewed camera suggestions, and English/Spanish support. The page identifies the app as in development. Detailed storage rules, shopping connectivity requirements, and undecided pricing remain in the PantryApp documentation rather than the public product pitch.

## Manual release checks

- Review at 390px, 768px, and 1440px widths and confirm there is no horizontal overflow.
- Follow all four section links; scroll back to About and check the active navigation.
- Open Behind the keyboard from the homepage footer, follow its cheesecake link, and return to the portfolio. Check `/about` directly and refresh it.
- Open PantryApp from Upcoming projects and the header link, verify both prototype labels, and return to the upcoming section. Check its direct URL and refresh.
- Open each project from the homepage, use Next project and All projects, and check Back/Forward, direct links, and refresh.
- Switch cheesecake tabs with a pointer and with Arrow Left/Right and Home/End. Confirm only the selected panel is visible, reload Reviews, and test browser Back.
- Check the not-found view for both unknown routes and unknown project slugs.
- Navigate from the skip link through contact links using only the keyboard.
- Check email, LinkedIn, and GitHub destinations without submitting messages.
- Enable reduced motion and confirm the pointer glow and smooth scrolling are disabled.
- Check the browser console and network for errors; verify the dates and figures against the content source.
