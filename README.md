# FunkMyBrand - Marketing Site

This is the standalone static marketing site for [FunkMyBrand.com](https://funkmybrand.com).

## Tech Stack
- React
- Vite
- Tailwind CSS v4
- Lucide React (Icons)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

This is a static site. The build process creates a purely static bundle.

```bash
# Build the static site
npm run build
```

The output will be generated in the `dist` folder. 
A `CNAME` file is automatically copied to `dist` since it lives in the `public` directory, enabling custom domain support (`funkmybrand.com`) on GitHub Pages or similar static hosting providers.

No backend services or auth (e.g. Supabase) are included in this repo.
