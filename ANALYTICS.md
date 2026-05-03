# Analytics — Plausible

This project uses [Plausible Analytics](https://plausible.io) for lightweight, privacy-friendly engagement tracking on the FunkMyBrand marketing site.

## Why Plausible?

Plausible is a GDPR-compliant, cookie-free analytics platform. It does not use cookies, does not collect personal data, and is fully compliant with GDPR, CCPA, and PECR — meaning no consent banner is required. The script is also very small (<1 KB), adding no meaningful performance overhead.

---

## Dashboard Setup

1. Create an account at [plausible.io](https://plausible.io).
2. Add a new site with the domain `funkmybrand.com`.
3. Plausible will provide a script snippet — it is already wired into `index.html`:
   ```html
   <script defer data-domain="funkmybrand.com" src="https://plausible.io/js/script.js"></script>
   ```
4. Pageviews will start appearing in the dashboard immediately after deploy.
5. For custom events, enable **Custom Events** under the site's settings in the Plausible dashboard.

Full setup guide: https://plausible.io/docs/custom-event-goals

---

## Tracked Custom Events

| Event name            | Where it fires                                  | Props                  |
|-----------------------|-------------------------------------------------|------------------------|
| `cta_hero_click`      | Hero section "Start building" CTA button        | —                      |
| `preview_button_click`| Hero section "View product preview" button      | —                      |
| `cta_final_click`     | Final section "Start building" CTA button       | —                      |
| `archetype_view`      | Archetype card `onMouseEnter` (each card)       | `archetype` (string)   |

Pageviews (route changes) are tracked automatically by the Plausible script.

---

## How to Add New Events

1. Locate (or add) the `trackEvent` helper in `src/App.tsx`:

   ```typescript
   const trackEvent = (eventName: string, props?: Record<string, any>) => {
     if (window.plausible) {
       window.plausible(eventName, { props });
     }
   };
   ```

2. Call it wherever you want to record an interaction:

   ```typescript
   // Simple event — no extra properties
   onClick={() => trackEvent('signup_button_click')}

   // Event with properties for segmentation
   onClick={() => trackEvent('plan_selected', { plan: 'pro' })}
   ```

3. Add the new event name to the table above so it stays documented.

4. In the Plausible dashboard, go to **Goals** and add a **Custom Event** goal matching the exact event name string. This makes the event visible in your dashboard funnels and goal reports.

---

## Notes

- `window.plausible` is only defined when the Plausible script has loaded (i.e., in production). The `if (window.plausible)` guard prevents errors in local development.
- The `declare global` block in `App.tsx` gives TypeScript the correct type for `window.plausible` so you get proper type-checking.
- If you need server-side or API-level event tracking (e.g., for backend conversion events), use the [Plausible Events API](https://plausible.io/docs/events-api).
