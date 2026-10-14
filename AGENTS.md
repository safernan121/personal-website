# Repository instructions

## Keep English and Spanish in sync

- Every website change must include the equivalent change in both English and Spanish in the same update. When either language changes, update the other before considering the work complete.
- This applies to additions, edits, removals, and fixes in page content, navigation, UI, functionality, accessibility labels, and metadata. Preserve the same facts, meaning, and behavior in both languages.
- English remains the default at `/`; Spanish pages live under `/es/`. Keep corresponding routes and internal links consistent.
- English content lives in `src/content/`, Spanish content in `src/content/es/index.ts`, and interface translations in `src/i18n/ui.ts`. Update both versions and the sitemap when adding or removing pages.
- Content rules, attribution, and image sources are documented in `docs/CONTENT.md`; keep it current when content or sources change.
- Shared components and styles can implement a change once when it applies to both languages. Verify the result in both English and Spanish, including layout with translated text.

## Deploy only from main

- Production deploys come from `main`. Pushing to `main` deploys automatically through GitHub Actions after lint, type checking, tests, and the build pass.
- Don't deploy from another branch or a local checkout unless the user explicitly asks for that deploy. `npm run deploy` refuses to run off `main`; set `ALLOW_BRANCH_DEPLOY=1` only when the user has asked for a branch deploy.
