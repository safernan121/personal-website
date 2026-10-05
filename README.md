# Santiago Fernández — Personal Website

A personal portfolio built with React, TypeScript, and Vite. It presents an introduction, professional experience, individual project pages, and a cheesecake notebook. The responsive, dark layout is inspired by Brittany Chiang's portfolio, with an original implementation and Santiago's own content.

## Local development

Use Node 22 (`nvm use` reads `.nvmrc`) and npm. Vite also supports Node 20.19+; the dependency lockfile is committed.

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

- `src/content/profile.ts` contains the identity, introduction, social links, and ordered experience entries. Edit this file to update the content. Achievement figures refer to their original product/company context; keep that context when editing.
- `src/content/projects.ts` contains the three project pages, their descriptions, contributions, and metadata. Product descriptions use the linked public sources; personal contributions retain the CV-derived text. CryptoMKT and Uppercap include dated imagery and source links from the employment period. Dates for the latter two reflect the shared employment period, not separate project launch dates.
- `src/content/cheesecake.ts` contains the notebook introduction and initial tab copy. Recipes and reviews intentionally start empty; no personal reviews or recipes have been invented, and there is no submission form or persistence layer.
- `src/pages/` contains the homepage, project detail, cheesecake, and not-found views. `Pages.module.css` styles the new pages and shared header.
- `src/components/` contains the reusable profile, navigation, social links, and experience entry components. `Portfolio.module.css` defines their responsive layout and styles.
- `src/index.css` contains shared colors, typography, global accessibility styles, and reduced-motion behavior.
- `index.html` contains the default page title, description, and social-preview metadata. `usePageMetadata` updates these in the browser for each route. Crawlers that do not execute JavaScript still receive the default metadata; prerendering would be needed for reliable per-project social previews.
- `public/favicon.svg` is the original initials favicon.

Inter is bundled from `@fontsource-variable/inter` and served locally. The page makes no font-service, analytics, or content-API requests. Content renders in the browser; static HTML prerendering can be considered if search indexing becomes a priority.

## Interaction and accessibility

The homepage uses `#about`, `#experience`, and `#projects` anchors and updates its active navigation as the visitor scrolls. The profile is sticky on desktop and flows normally on smaller screens. Links support keyboard focus, and a skip link moves focus directly to the content.

React Router provides the following routes, browser history, hash navigation, and scroll restoration:

- `/` — portfolio
- `/projects/the-beacon` — game overview and engineering contributions
- `/projects/cryptomkt` — professional trading interface
- `/projects/uppercap` — investment platform
- `/cheesecake` — Recipes and Reviews tabs

The notebook defaults to Recipes; `/cheesecake?tab=reviews` opens Reviews directly. Tabs support Left/Right arrows, Home/End, and Tab to enter the active panel. An unrecognized tab query falls back to Recipes. Page changes move keyboard focus to the main content; tab changes preserve focus and scroll position. Unknown routes display a not-found view.

The pointer glow is enabled only for desktop-sized viewports with a fine, hover-capable pointer and no reduced-motion preference. Reduced motion also disables smooth scrolling and transitions. All work-history content remains visible without hover.

## Deployment later

This repository does not deploy automatically. A static host can run `npm ci && npm run typecheck && npm run build` and serve `dist/`. No runtime server, database, or environment variables are required. The build assumes hosting at the domain root.

**Configure an SPA fallback:** requests for app routes such as `/projects/the-beacon` and `/cheesecake` must serve `index.html` with status 200, while existing asset paths serve their actual files. Vite development and preview already support this. For example, Netlify can use a `_redirects` rule `/* /index.html 200`; configure the equivalent rewrite on the chosen host. Without it, direct links and reloads on nested routes may return a server 404. No provider-specific deployment has been added yet.

Before connecting a custom domain, add the canonical URL, `og:url`, and an absolute social-preview image URL to `index.html`. DNS, hosting configuration, and domain purchase are a separate step. The local preview server is for review, not production hosting.

## Content boundaries

The original CV, its phone number, and the PDF download are intentionally not included. The displayed email and professional profile links are the chosen contact methods. No blog or education section is included.

## Artwork and sources

The Beacon description is adapted from [its official website](https://thebeacon.gg/), accessed October 5, 2026. Engineering contributions come from Santiago's supplied CV. Product-wide campaign metrics remain attributed to the game. All game artwork belongs to The Beacon; visible credits link to the source. Local files are the WebP responses served by the official website, saved with matching extensions:

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

Santiago confirmed he implemented the front end of the pictured CryptoMarket professional trading view. Its contribution breakdown combines that confirmation, the existing CV text, and the interface elements visible in the screenshot. It does not infer a framework, chart library, data-update mechanism, performance improvement, or custom chart-engine authorship from the image.

A public search found Santiago’s [existing LinkedIn profile](https://www.linkedin.com/in/safernan12/) confirming the CryptoMarket role and a third-party employee-directory listing. Neither adds a substantiated new contribution beyond the CV, so no directory content or additional personal details were added. No company-authored personal feature was found in that search.

The cheesecake illustration is an original inline SVG.

## Manual release checks

- Review at 390px, 768px, and 1440px widths and confirm there is no horizontal overflow.
- Follow all three section links; scroll back to About and check the active navigation.
- Open each project from the homepage, use Next project and All projects, and check Back/Forward, direct links, and refresh.
- Switch cheesecake tabs with a pointer and with Arrow Left/Right and Home/End. Confirm only the selected panel is visible, reload Reviews, and test browser Back.
- Check the not-found view for both unknown routes and unknown project slugs.
- Navigate from the skip link through contact links using only the keyboard.
- Check email, LinkedIn, and GitHub destinations without submitting messages.
- Enable reduced motion and confirm the pointer glow and smooth scrolling are disabled.
- Check the browser console and network for errors; verify the dates and figures against the content source.
