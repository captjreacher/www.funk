# FunkMyBrand Marketing Site

This is the standalone static marketing site for `funkmybrand.com`. 

## Constraints & Architecture
- **Completely separate** from the product app (`app.funkmybrand.com`).
- **Does not touch** or deploy to `www.funkmybrand.com`.
- Pure static site generated via Vite + React + Tailwind CSS.
- The `public/CNAME` file restricts GitHub Pages deployment to the root domain.

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

## Deployment

This site is designed to be deployed to GitHub Pages or any static hosting service.

1. Build the site:
   ```bash
   npm run build
   ```
2. The static output will be in the `dist` directory.
3. If using GitHub Pages, push the `dist` folder to your `gh-pages` branch, or configure GitHub Pages to deploy from GitHub Actions using the generated static files. The `CNAME` file is already included in `public/` and will be copied to `dist/` automatically.
