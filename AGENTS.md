# Repository instructions

## Keep English and Spanish in sync

- Every website change must include the equivalent change in both English and Spanish in the same update. When either language changes, update the other before considering the work complete.
- This applies to additions, edits, removals, and fixes in page content, navigation, UI, functionality, accessibility labels, and metadata. Preserve the same facts, meaning, and behavior in both languages.
- English remains the default at `/`; Spanish pages live under `/es/`. Keep corresponding routes and internal links consistent.
- English content lives in `src/content/`, Spanish content in `src/content/es/index.ts`, and interface translations in `src/i18n/ui.ts`. Update both versions and the sitemap when adding or removing pages.
- Shared components and styles can implement a change once when it applies to both languages. Verify the result in both English and Spanish, including layout with translated text.
