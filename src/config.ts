/**
 * Centralized site configuration.
 * All hard-coded URLs and site metadata live here so changes
 * propagate everywhere from a single source of truth.
 */
export const config = {
  /** Public-facing marketing site */
  siteUrl: 'https://funkmybrand.com',

  /** Authenticated app */
  appUrl: 'https://app.funkmybrand.com',

  /** UTM-tagged destinations for marketing-site CTAs (analytics attribution) */
  ctaUrl: {
    nav: 'https://app.funkmybrand.com/?utm_source=funkmybrand&utm_medium=marketing_site&utm_campaign=nav_signin',
    hero: 'https://app.funkmybrand.com/?utm_source=funkmybrand&utm_medium=marketing_site&utm_campaign=hero_cta',
    finalCta: 'https://app.funkmybrand.com/?utm_source=funkmybrand&utm_medium=marketing_site&utm_campaign=final_cta',
  },

  /** SEO / social meta */
  siteName: 'FunkMyBrand',
  siteTitle: 'FunkMyBrand | Your career, versioned.',
  siteDescription:
    'Create, deploy, and track multiple versions of your CV from one focused workspace. Build the version of yourself the world should see.',
  ogImage: 'https://funkmybrand.com/og-image.png',
} as const;
