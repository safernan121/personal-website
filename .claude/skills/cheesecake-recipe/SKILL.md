---
name: cheesecake-recipe
description: Add, edit, or remove a cheesecake recipe on safernan.dev (the Recipes tab and its /cheesecake/recipes/:slug pages), in English and Spanish. Use when Santiago wants to publish one of his cheesecake recipes, shares ingredients or baking steps, adds a recipe photo, or asks to change an existing recipe or its nutrition.
---

# Cheesecake recipe

Recipes are Santiago's own cheesecakes. Each one gets a card in the Recipes tab and its own page at `/cheesecake/recipes/<slug>` (and `/es/...`). `docs/CONTENT.md` (§ Recipes) is the source of truth for the rules; this skill is the procedure.

## 1. Gather the recipe from Santiago

Never fill gaps with a generic recipe. Get missing instructions from him before presenting a recipe as complete.

| Field | Notes |
| --- | --- |
| Name and subtitle | e.g. `The Protein Cloud` / `Ricotta & cottage cheese cheesecake` |
| Description | Why he makes it, in his voice, one short paragraph. |
| Category | `Style / Main ingredient`, e.g. `Baked / Ricotta`. His rule is that cheesecake has to be baked. |
| Ingredients | Exact quantities as he gives them. Keep ranges (`30–40 g`) and mark optional ones in `note`. |
| Oven, bake, chill, tin | Temperature in °C, bake time, minimum chill, tin or dish. |
| Steps | In order; each gets a short imperative title and a description. |
| Notes | Variations, swaps, crust preference, trade-offs. |
| Nutrition | His figures, and what they cover (whole cheesecake, or a fraction). If he has none, offer an estimate, label it approximate, and get his OK. |
| Photo | Optional; without one the card shows the cheesecake illustration. |

## 2. Prepare the photo (optional)

Recipe photos are WebP, at most 1600 px on the long edge and ideally under ~150 KB, named after the slug, with no location or camera metadata. macOS `sips` can't write WebP; `sharp` is installed (through Wrangler) and applies the EXIF rotation while dropping all metadata:

```sh
node -e "require('sharp')(process.argv[1]).rotate().resize(1600, 1600, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(process.argv[2]).then(console.log)" <source> public/images/cheesecake/<slug>.webp
mdls -name kMDItemLatitude -name kMDItemLongitude public/images/cheesecake/<slug>.webp   # both must be (null)
```

If the subject isn't centred, set `image.position` (CSS `object-position`, e.g. `'center 25%'`) and check the card crop.

## 3. Write the English entry — `src/content/recipes.ts`

Follow the `Recipe` interface at the top of the file; the existing two recipes are the reference.

- `slug`: kebab-case from the name; it becomes the URL and can't change casually once published.
- `details`: one each of `oven`, `bake`, `chill`, `tin`, with those exact ids. The ids stay in English in both languages: the card picks `bake` and `chill` by id.
- `nutrition.scope` states what the figures cover (`Whole cheesecake`, `1/8 of the cheesecake`); `nutrition.note` says they're approximate and depend on ingredients and portion.
- Style: British spelling (flavour, centre, fibre), curly apostrophes (`’`), en dashes for ranges, `°C`, metric units, `tbsp`/`tsp`.

## 4. Write the Spanish entry — `src/content/es/index.ts`

Spanish recipes spread the English entry by index and translate all copy:

```ts
{
  ...englishRecipes[N],
  name: '…', subtitle: '…', description: '…', category: 'Al horno / …',
  image: { ...englishRecipes[N].image!, alt: '…' },   // omit if no image
  ingredients: [ /* same quantities, translated names and notes */ ],
  details: [
    { id: 'oven', label: 'Horno', value: '…' },
    { id: 'bake', label: 'Horneado', value: '…' },
    { id: 'chill', label: 'Refrigeración', value: '…' },
    { id: 'tin', label: 'Molde', value: '…' },
  ],
  steps: [ /* translated */ ],
  notes: [ /* translated */ ],
  nutrition: { scope: '…', values: [ /* translated labels */ ], note: '…' },
}
```

- Same position as the English entry. **Inserting anywhere but the end shifts every later `englishRecipes[N]`** — update them.
- Spanish from Spain, kitchen register used in the existing recipes: imperatives with *tú* (`Forra`, `Tritura`, `Hornea`, `Deja enfriar`), `cucharada`/`cucharadita`, `zumo`, `Una pizca`, `Al horno / …`.
- Numbers: decimal comma and thousands point (`5,4 ml`, `900–1.050 kcal`). Same quantities, times, and facts as English.

## 5. Register the new page

- `public/sitemap.xml`: add two `<url>` blocks (English and Spanish) after the last recipe, copying the existing pattern with `en`, `es`, and `x-default` alternates.
- `tests/i18n.test.mjs`: add `['/cheesecake/recipes/<slug>', 'English name.', 'Spanish name.']` to `pages`.
- `docs/CONTENT.md` § Recipes: add a line on where the recipe and its nutrition figures come from, like the Protein Cloud line.

Routing, page titles, and link previews (`default.png`) come from the content automatically.

## 6. Verify

```sh
npm run lint && npm run typecheck && npm test && npm run build
```

Then `npm run dev` and check, in English and Spanish, at phone and desktop widths, in light and dark mode: the card in `/cheesecake` (photo crop, bake/chill line, recipe count) and the recipe page (details, steps, nutrition, notes).

## 7. Ship

Summarise the recipe in both languages for Santiago, calling out any nutrition you estimated. Commit only when asked. Pushing to `main` deploys to production through CI, so confirm before pushing.

## Editing or removing

- **Edit:** change both languages together. If quantities change, nutrition no longer matches: recalculate it with his OK, or say so in `scope`/`note` as the ricotta recipe does.
- **Remove:** delete both entries, fix later Spanish indexes, remove both sitemap blocks and the test row, delete an unused photo, and update `docs/CONTENT.md`. Consider a redirect in `public/_redirects` if the page was shared.
