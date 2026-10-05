# Santiago Fernández — Personal Website

A personal portfolio built with React, TypeScript, and Vite. It presents an introduction, professional experience, individual project pages, and a cheesecake notebook. The responsive, dark layout is inspired by Brittany Chiang's portfolio, with an original implementation and Santiago's own content.

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

Uppercap also includes public in-app screenshots from two official guides:

| Local asset | Public source |
| --- | --- |
| `public/images/uppercap/reservations-guide.jpg` | [Investment workspace image](https://contenido.uppercap.com/wp-content/uploads/2021/06/reservas-ok-1024x393.jpg) in [the reservations guide](https://contenido.uppercap.com/knowledgebase/que-son-las-reservas-en-uppercap/), first published June 9, 2021 and revised September 29, 2022 |
| `public/images/uppercap/portfolio-guide.png` | [Portfolio image](https://contenido.uppercap.com/wp-content/uploads/2020/07/vender-1024x291.png) in [the private-offer guide](https://contenido.uppercap.com/knowledgebase/como-hacer-una-oferta-privada-en-uppercap/), first published July 13, 2020 and revised March 9, 2022 |
| `public/images/uppercap/private-offer-2020.jpg` | [Private-offer form](https://contenido.uppercap.com/wp-content/uploads/2020/07/imagen-8-Apertura-oferta-privada-de-acciones-e1594661427194.jpg) in the same private-offer guide |
| `public/images/uppercap/offer-created-2020.png` | [Publication confirmation](https://contenido.uppercap.com/wp-content/uploads/2020/07/2020-07-22-13_31_44-Window.png) in the same private-offer guide |

These are product-context screenshots from public support documentation. Their exact capture dates are unverified, and some show later Uper branding. Upload-directory dates alone do not prove that files remained unchanged. The page explicitly states this distinction, provides original-guide links, and offers full-size image links for reading small UI text. Source-example share quantities are not presented as Santiago’s personal holdings or project impact. The launch artwork remains separately identified as original Uppercap material.

Santiago additionally confirmed work on Uppercap’s referrals, main investment mechanisms, and a blockchain contract tokenizing each purchased share. These additions are attributed to his account, alongside the existing CV contributions on project publishing, portfolios, and vesting. Screen descriptions do not claim he personally implemented every pictured feature. No blockchain network, token standard, referral reward percentage, or security/performance claim has been inferred. The [referral guide](https://contenido.uppercap.com/knowledgebase/que-es-el-programa-de-referidos-de-uppercap/) was first published September 22, 2020 but revised July 2, 2024; later reward terms are excluded. A linked step-by-step investment tutorial required sign-in and was not accessed.

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
