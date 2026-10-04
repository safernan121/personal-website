# Santiago Fernández — Personal Website

A personal portfolio built with React, TypeScript, and Vite. The first version presents a short introduction and professional experience in a responsive, dark layout inspired by Brittany Chiang's portfolio. This is an original implementation, with Santiago's own content.

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
- `src/components/` contains the reusable profile, navigation, social links, and experience entry components. `Portfolio.module.css` defines their responsive layout and styles.
- `src/index.css` contains shared colors, typography, global accessibility styles, and reduced-motion behavior.
- `index.html` contains the page title, description, and social-preview metadata. Keep these in sync if the introduction changes.
- `public/favicon.svg` is the original initials favicon.

Inter is bundled from `@fontsource-variable/inter` and served locally. The page makes no font-service, analytics, or content-API requests. Content renders in the browser; static HTML prerendering can be considered if search indexing becomes a priority.

## Interaction and accessibility

The single page uses `#about` and `#experience` anchors and updates its active navigation as the visitor scrolls. The profile is sticky on desktop and flows normally on smaller screens. Links support keyboard focus, and a skip link moves focus directly to the content.

The pointer glow is enabled only for desktop-sized viewports with a fine, hover-capable pointer and no reduced-motion preference. Reduced motion also disables smooth scrolling and transitions. All work-history content remains visible without hover.

## Deployment later

This repository does not deploy automatically. A static host can run `npm ci && npm run typecheck && npm run build` and serve `dist/`. No runtime server, database, or environment variables are required. The build assumes hosting at the domain root.

Before connecting a custom domain, add the canonical URL, `og:url`, and an absolute social-preview image URL to `index.html`. DNS, hosting configuration, and domain purchase are a separate step. The local preview server is for review, not production hosting.

## Content boundaries

The original CV, its phone number, and the PDF download are intentionally not included. The displayed email and professional profile links are the chosen contact methods. No project placeholders, blog, or education section are included in v1.

## Manual release checks

- Review at 390px, 768px, and 1440px widths and confirm there is no horizontal overflow.
- Follow both section links; scroll back to About and check the active navigation.
- Navigate from the skip link through contact links using only the keyboard.
- Check email, LinkedIn, and GitHub destinations without submitting messages.
- Enable reduced motion and confirm the pointer glow and smooth scrolling are disabled.
- Check the browser console and network for errors; verify the dates and figures against the content source.
