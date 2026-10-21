---
name: cheesecake-review
description: Add, edit, reorder, or remove a cheesecake review on safernan.dev (the Reviews tab at /cheesecake?tab=reviews), in English and Spanish. Use when Santiago wants to post a review of a cheesecake from a shop, bakery, or restaurant, shares a cheesecake photo with tasting notes, or asks to change an existing review.
---

# Cheesecake review

Reviews are Santiago's own tasting notes about cheesecakes he bought or ate somewhere. They render in full in the Reviews tab, in array order, with no dates, ratings, or detail pages. `docs/CONTENT.md` (§ Reviews) is the source of truth for the rules; this skill is the procedure.

## 1. Gather what only Santiago can provide

Never invent impressions, visits, or habits. Before writing, make sure you have:

| Field | Notes |
| --- | --- |
| Photo | His own photo of the cheesecake. Required. |
| Shop name and city | The title is `Shop, City` (e.g. `PastéBCN, Barcelona`). |
| Shop link | His Google Maps share link (`https://maps.app.goo.gl/...`). Ask for it; don't search for one. |
| Tasting notes | His impressions in his own words: texture, cheese vs. sweetness, crust, how it compares, whether he'd go back. |
| Position | Where it goes in the list (default: end). |
| "What the web said" | Optional. Ask whether he wants it. |

If he gives rough notes, shape them into one first-person paragraph that keeps his opinions and verdict intact. Show him the draft before publishing if you changed more than wording.

## 2. Prepare the photo

Review photos are JPEGs at most 1600 px on the long edge, with no location or camera metadata. Name the file after the review id. `sharp` is installed (through Wrangler); it applies the EXIF rotation and drops all metadata unless asked to keep it:

```sh
node -e "require('sharp')(process.argv[1]).rotate().resize(1600, 1600, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(process.argv[2]).then(console.log)" <source> public/images/cheesecake/<id>.jpg
mdls -name kMDItemLatitude -name kMDItemLongitude public/images/cheesecake/<id>.jpg   # both must be (null)
```

Open the result to check orientation and framing. Never publish a photo that still carries GPS data.

## 3. Write the English entry — `src/content/reviews.ts`

```ts
{
  id: 'shop-city',                       // kebab-case, e.g. 'pastebcn-barcelona'
  title: 'Shop, City',
  description: 'His tasting notes, one paragraph.',
  image: {
    src: '/images/cheesecake/shop-city.jpg',
    alt: 'What the photo shows: the slice or cakes, plate or box, top and centre.',
  },
  shop: { name: 'Shop', url: 'https://maps.app.goo.gl/...' },
  webSaid: [                             // optional
    {
      text: 'A paraphrased, published fact, attributed in the sentence.',
      source: { label: 'Publication', url: 'https://...' },
    },
  ],
}
```

Style: British spelling (flavour, favourite, centre), curly apostrophes (`’`), en dashes for ranges.

`webSaid` rules: personal impressions stay in `description`; each note paraphrases one published fact (recipe, ingredients, chef, history) from a source you actually read, names the source in the text, and links to it. Two notes is the current pattern. Use WebSearch/WebFetch to find and read sources; never cite a page you haven't opened.

## 4. Write the Spanish entry — `src/content/es/index.ts`

Spanish reviews spread the English entry by index, so `id`, `title`, and `shop` are shared and only copy is translated:

```ts
{
  ...englishReviews[N],
  description: 'Traducción de sus notas.',
  image: {
    src: englishReviews[N].image.src,
    alt: 'Traducción del texto alternativo.',
  },
  webSaid: [
    { text: 'Traducción de la nota.', source: englishReviews[N].webSaid![0].source },
  ],
}
```

- Put it at the same position as the English entry. **Inserting anywhere but the end shifts the index of every later review** — update each `englishReviews[N]` reference after it, in the spread, `image.src`, and every `webSaid![i].source`.
- Spanish from Spain, natural rather than literal; keep his voice, opinions, and hedges. “Tarta de queso”, not “cheesecake”. Decimal comma (`5,4`), `«»` quotes.
- Same facts and meaning in both languages; nothing added or dropped.

## 5. Keep the docs current — `docs/CONTENT.md`

Update the “Current reviews cover…” paragraph under § Reviews: which shops are covered and which sources their `webSaid` notes link to. The § Original artwork line already covers his own photos.

Reviews use existing routes: no sitemap, route, or preview-image change.

## 6. Verify

```sh
npm run lint && npm run typecheck && npm test && npm run build
```

Tests check that both languages render every review title on `/cheesecake?tab=reviews`. Then `npm run dev` and look at `/cheesecake?tab=reviews` and `/es/cheesecake?tab=reviews` at phone and desktop widths, in light and dark mode: photo crop, title wrapping, links.

## 7. Ship

Summarise the review in both languages for Santiago. Commit only when asked. Pushing to `main` deploys to production through CI, so confirm before pushing.

## Editing or removing

- **Edit:** change both languages together; if a fact in `webSaid` changes, re-check the source.
- **Remove:** delete both entries, fix the Spanish indexes after it, delete the photo if nothing else uses it, and update `docs/CONTENT.md`. An empty list shows the translated “No reviews yet” state.
- **Reorder:** move both entries and rewrite every Spanish index affected.
