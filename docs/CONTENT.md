# Content guide

How the website's content is organized, the rules for editing it, and where every fact and image comes from. For setup and architecture, see the [README](../README.md).

## Where content lives

All copy is typed data in `src/content/`. Pages render from it; nothing is fetched at runtime.

| File | Contents |
| --- | --- |
| `src/content/profile.ts` | Identity, introduction, the grouped tech stack under the name, social links (including the résumé), ordered experience entries, and homepage sections |
| `src/content/projects.ts` | The Beacon, CryptoMKT, and Uppercap project pages: descriptions, role, contributions, technologies, media, and sources |
| `src/content/upcomingProjects.ts` | Upcoming projects (PantryApp): planned features, technologies, and prototype screenshots |
| `src/content/about.ts` | The personal “Behind the keyboard” page at `/about` |
| `src/content/cheesecake.ts` | Cheesecake notebook introduction and tab copy |
| `src/content/recipes.ts` | Recipe entries, each with its own `/cheesecake/recipes/:slug` page |
| `src/content/reviews.ts` | Cheesecake review type and entries |
| `src/content/es/index.ts` | Spanish versions of all of the above |
| `src/i18n/ui.ts` | Interface and accessibility copy in both languages |
| `resume/santiago-fernandez-cv.html` | Source of the résumé PDF |

## Writing rules

- **Both languages, every change.** Every addition, edit, or removal is made in English and Spanish in the same update, with the same facts and meaning. Spanish entries share identifiers, assets, and source URLs with English. TypeScript requires matching interface keys, and `npm test` checks content parity and that internal links stay in the current language. Update `public/sitemap.xml` when adding or removing pages.
- **Lead with the benefit.** Open with the product or team outcome, then support it with concrete work. The homepage gives the short version; project pages carry the detail.
- **Keep attribution precise.** Product and company scale (users, transactions) appears separately from personal contributions and is attributed to the product. Shared work is described as shared (“co-implemented”, “major contributor”), and deep dives end with a credit line.
- **Technologies are real tools.** Each experience and project lists technologies actually used in `stack`, not focus areas.
- **Describe employer tools in general terms.** No code, internal file names, repository names, or commit links.
- **Don't present plans as features.** Upcoming projects describe intended outcomes and must keep the in-development status and prototype warnings.

## Projects and deep dives

Engineering role and contributions appear before product imagery and context. CryptoMKT and Uppercap show dated imagery and source links from the employment period; their dates reflect the shared employment period, not separate launch dates.

A contribution can include optional `details`, which the project page shows under a collapsible “How I built it”:

```ts
details: {
  flow?: { label: string; steps: { title: string; text: string }[] }, // step diagram
  sections: { label: string; text?: string; items?: string[] }[],  // e.g. The problem, What I built, Key decision, Outcome
  credit?: string,                                                  // who else built what
}
```

The Beacon uses deep dives for the house editor, the asset-import pipeline, and Tinker.

## Résumé

`public/santiago-fernandez-cv.pdf` is a one-page English PDF linked from both languages (the link is marked `hreflang="en"`). Edit `resume/santiago-fernandez-cv.html`, then run `npm run cv` to regenerate it with the macOS Google Chrome install. Keep it to one page, and keep its Skillcap points consistent with `profile.ts` and `projects.ts`. No phone number is published; the email and LinkedIn links are the chosen contact methods.

## Recipes

Add recipes to `src/content/recipes.ts` (and Spanish equivalents) with optional photos under `public/images/cheesecake/`. Each recipe gets its own page, and the Recipes tab builds its list from the entries; add the new routes to the sitemap. Keep ingredient ranges and optional ingredients, state the nutrition scope (for example, whole cheesecake), and get missing instructions from the author before presenting a recipe as complete. Recipe detail IDs stay language-independent so list cards can select baking and chilling details in either language.

The Protein Cloud uses Santiago's own ricotta and cottage cheese recipe and nutrition estimates.

## Reviews

Reviews appear in full in the Reviews tab (`/cheesecake?tab=reviews`). Each entry needs a photo, title, description, and linked shop name; there are no dates or ratings. Array order is display order, and a translated empty state appears when there are no entries. Reviews use existing routes, so adding one doesn't change the sitemap.

Add the English entry to `src/content/reviews.ts` and the Spanish one to `src/content/es/index.ts`. Keep `id`, image `src`, and `shop` identical; translate `title`, `description`, and image `alt`. Template (replace every placeholder):

```ts
// English — src/content/reviews.ts
{
  id: 'your-review-id',
  title: 'Your review title',
  description: 'Your complete tasting notes.',
  image: { src: '/images/cheesecake/your-photo.webp', alt: 'Describe your cheesecake photo.' },
  shop: { name: 'Shop name', url: 'https://example.com' },
}

// Español — src/content/es/index.ts
{
  id: 'your-review-id',
  title: 'El título de tu reseña',
  description: 'Tus notas de degustación completas.',
  image: { src: '/images/cheesecake/your-photo.webp', alt: 'Describe la foto de tu tarta de queso.' },
  shop: { name: 'Shop name', url: 'https://example.com' },
}
```

Reviews may include `webSaid`, an array of `{ text, source: { label, url } }` notes shown under “What the web said:”. Keep personal impressions in `description`, paraphrase published facts, and translate each note while keeping its source. Layout examples live only in `tests/fixtures/reviews.mjs` and are never published.

Current reviews cover Fismuler and PastéBCN in Barcelona with Santiago's photos and tasting notes. Fismuler's notes link to 20MINUTOS' recipe demonstration and Condé Nast Traveler's interview with Nino Redruello; PastéBCN's link to its own catalogue and Vinos y Restaurantes' coverage of Hugo Roche's chocolate cheesecake. Shop links use Santiago's Google Maps URLs. Opening attendance and purchasing habits are his personal account.

## Sources and attribution

### The Beacon

The game description is adapted from [the official website](https://thebeacon.gg/), accessed October 5, 2026. Engineering contributions come from Santiago's CV, his confirmed descriptions of his work, and a review of his contributions to the project:

- The house editor shipped to players; Santiago owns its product layer and placement rules, built on another engineer's voxel-editor foundation.
- Tinker was created by another engineer; Santiago is a major contributor. Its use by artists and other non-developers to build and test abilities and enemies is Santiago's account.
- The asset pipeline extends the open-source Importality plugin. The “1,500+ configurations” and “649 layered sprite variants” figures come from counting the project's import configurations. The roughly five-minute manual setup per asset is Santiago's estimate, not a benchmark, and no aggregate hours-saved figure is claimed.
- Touch and controller input was a shared implementation; another engineer did earlier mobile work.
- Santiago designed and implemented enemy and boss combat behavior and contributed to shared combat systems; the copy doesn't claim ownership of the whole combat architecture.

Campaign metrics are attributed to the game. All game artwork belongs to The Beacon, with visible credits linking to the source:

| Local asset | Official source |
| --- | --- |
| `public/images/the-beacon/logo.webp` | [Logo](https://thebeacon.gg/assets/hero_LOGO_letters-BGQjDsLw.png) |
| `public/images/the-beacon/combat.webp` | [Combat](https://thebeacon.gg/assets/combat-vRMshlox.png) |
| `public/images/the-beacon/house.webp` | [Home](https://thebeacon.gg/assets/house-Dnc5OxVk.png) |
| `public/images/the-beacon/social.webp` | [Social](https://thebeacon.gg/assets/social-B8SdEyTm.png) |

### CryptoMKT

Santiago confirmed he built the frontend of the pictured professional trading view with Django and Node.js. The contribution breakdown combines that confirmation, the CV, and the interface elements visible in the screenshot. No chart library, data-update mechanism, or performance improvement is inferred.

| Local asset | Source and date |
| --- | --- |
| `public/images/cryptomkt/logo.png` | [Official CryptoMKT logo](https://www.cryptomkt.com/static/global/assets/images/cmkt-blanc.png), current website; not presented as a historical logo |
| `public/images/cryptomkt/trading-2020.png` | [Original screenshot](https://www.criptonoticias.com/wp-content/uploads/2020/05/compra_venta_avanzada.png) in [CriptoNoticias' guide](https://www.criptonoticias.com/tutoriales-guias/cryptomkt-compra-vende-bitcoin-criptomonedas-moneda-local/), published May 24, 2020 and credited to CryptoMarket. The article was updated March 29, 2024, but the asset is in its May 2020 upload directory and shows the period interface. |

### Uppercap

Santiago was part of Uppercap's original team, helping build the first web-app iterations and staying through its rebrand. He co-implemented the investment journey across frontend and backend (login, company profiles, vesting options, investment rounds, share purchases, and Chilean bank API integration for card payments), contributed to portfolios and referrals, and implemented Solidity smart contracts representing purchased shares and vesting. He confirmed the stack as Django, Node.js, and Solidity. The copy describes shared implementation, not sole ownership or product design. No payment provider, token standard, referral reward, or security claim is inferred.

| Local asset | Source and date |
| --- | --- |
| `public/images/uppercap/logo-2021.png` | [Original Uppercap logo](https://contenido.uppercap.com/wp-content/uploads/2021/02/ident-azul.png), February 2021 upload |
| `public/images/uppercap/launch-2021.png` | [Launch illustration](https://contenido.uppercap.com/wp-content/uploads/2021/01/banner_cohete_sin-logo.png), January 2021 upload |
| `public/images/uppercap/reservations-guide.jpg` | [Investment workspace](https://contenido.uppercap.com/wp-content/uploads/2021/06/reservas-ok-1024x393.jpg) in [the reservations guide](https://contenido.uppercap.com/knowledgebase/que-son-las-reservas-en-uppercap/), first published June 9, 2021, revised September 29, 2022 |
| `public/images/uppercap/portfolio-guide.png` | [Portfolio](https://contenido.uppercap.com/wp-content/uploads/2020/07/vender-1024x291.png) in [the private-offer guide](https://contenido.uppercap.com/knowledgebase/como-hacer-una-oferta-privada-en-uppercap/), first published July 13, 2020, revised March 9, 2022 |
| `public/images/uppercap/private-offer-2020.jpg` | [Private-offer form](https://contenido.uppercap.com/wp-content/uploads/2020/07/imagen-8-Apertura-oferta-privada-de-acciones-e1594661427194.jpg) in the same guide |
| `public/images/uppercap/offer-created-2020.png` | [Publication confirmation](https://contenido.uppercap.com/wp-content/uploads/2020/07/2020-07-22-13_31_44-Window.png) in the same guide |

The logo and launch artwork appear in Uppercap's [January 25, 2021 founder story](https://contenido.uppercap.com/knowledgebase/5-lecciones-de-la-startup-chilena-que-debuto-en-pandemia/); the [July 13, 2020 platform article](https://contenido.uppercap.com/knowledgebase/donde-invertir-en-negocios/) supports the product overview. The guide screenshots are product context from public support documentation: exact capture dates are unverified, some show later Uper branding, and the page says so. Example share quantities are not presented as personal holdings or impact. The old domain redirects to [Uper](https://www.uper.co/en/).

### PantryApp

The public overview is adapted from PantryApp's own planning documents and README, reviewed October 6, 2026, and its screenshots come from the PantryApp project. Every screenshot carries a visible “Early prototype image” / “Design may change” label; CSS crops only empty side gutters. The page describes intended features, promises no release date or price, and keeps detailed storage, connectivity, and pricing decisions out of the public pitch.

### Link previews

`public/images/previews/` holds the 1200×630 images shown when a page is shared. `default.png` (the SF logo and name) is used for every page except projects, which use their own card: The Beacon, CryptoMKT, and Uppercap show the official logos listed above, and PantryApp shows its sprout mark. Regenerate them with `npm run previews` (macOS Google Chrome) after changing a logo, and add a card when adding a project; `npm test` checks every sitemap page has one. Titles, descriptions, and image alt text come from `src/pageMetadata.ts` in both languages.

### Original artwork

The favicon, the cheesecake illustration, and the PantryApp sprout mark are original inline SVGs. Review photos are Santiago's own.

## Manual release checks

- Review at 390px, 768px, and 1440px widths, in English and Spanish, with no horizontal overflow.
- Follow the header links (Work, Upcoming, Cheesecake) from the homepage and from a project page.
- Switch between light and dark modes, reload, and confirm the choice persists; clear site data and confirm the mode follows the system setting.
- Open Behind the keyboard from the homepage footer, follow its cheesecake link, and return. Check `/about` directly and refresh it.
- Open PantryApp from Upcoming projects and the header, verify both prototype labels, and check its direct URL and refresh.
- Open each project from the homepage; use Next project and All projects; check Back/Forward, direct links, and refresh. Open and close each “How I built it”.
- Switch cheesecake tabs with a pointer and with Arrow Left/Right and Home/End; reload Reviews and test browser Back.
- Check the not-found view for unknown routes and unknown project slugs.
- Navigate from the skip link through the contact links using only the keyboard.
- Check the email, LinkedIn, GitHub, and résumé links.
- Enable reduced motion and confirm smooth scrolling and transitions are disabled.
- Paste a project link and the homepage, in both languages, into a link-preview debugger and confirm the title, description, and image.
- Check the browser console and network panel for errors, and verify dates and figures against the sources above.
