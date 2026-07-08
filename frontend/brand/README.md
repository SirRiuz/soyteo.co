# soyteo.co — brand assets

Monogram **"t."** — the "t" of _teo_ with the trailing dot from the home
typewriter titles ("Mateo .", "Software dev.") as the brand mark.

Palette (same as the site): ink `#2F2F2F`, cream `#F4ECE1`, terracotta `#E76F51`.

| File                | Use                                                    |
| ------------------- | ------------------------------------------------------ |
| `icon.svg`          | Primary mark (ink bg). Source of `public/favicon.svg`. |
| `icon-light.svg`    | Light variant (cream bg).                              |
| `icon-apple.svg`    | Full-bleed square for `apple-touch-icon.png`.          |
| `icon-maskable.svg` | Glyph in safe zone for the PWA maskable icon.          |
| `og-image.html`     | 1200×630 template for `public/og-image.png`.           |

## Regenerating `public/` assets

Requires Google Chrome installed (used headless to rasterize):

```bash
bash generate.sh
```

Outputs favicon PNGs (16/32/48), `icon-192/512.png`, `icon-maskable-512.png`,
`apple-touch-icon.png`, `og-image.png` and copies `favicon.svg` into
`frontend/public/`.
