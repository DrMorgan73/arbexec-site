# ARBEXEC — public website

Public marketing site for ARBEXEC, IEC's No Surprises Act / federal IDR
case-preparation system. Built as a close mirror of the MEDEXEC public
site (getmedexec.com): same design system (navy/teal/cyan palette, type
stacks, pilot strip, hero + case panel, workflow cards, FAQ, universal-NDA
panel, footer), same section order, ARBEXEC content throughout.

This site is **not** the ARBEXEC application. The application
(`parity-idr`) stays behind its Basic Auth gate on its own deployment;
nothing here links to it, and nothing in this repo touches its code,
its gate, or its domains.

## Pages

| File | What it is |
|---|---|
| `index.html` | Home: hero + illustrative case panel, the problem, six-stage workflow, why ARBEXEC, pilot, the IEC team, FAQ, universal-NDA panel, contact |
| `rules.html` | The rulebook: the federal IDR rules behind every verdict, plain language, each cited to 45 CFR 149.510 (mirror of MEDEXEC's Algorithms page) |
| `for-providers.html` | For hospitals & practices: who it serves, what you hand over / get back, the data boundary (mirror of MEDEXEC's For Carriers & TPAs page) |
| `styles.css` / `site.js` | Shared design system + EN/ES language switch (English in the HTML; Spanish in dictionaries, fallback to English per string) |

## House rules carried in this build

- No fees, no pricing, no percentage-of-recovery language anywhere.
- No filer names, no partner/channel names, no hospital or client names,
  no recovery statistics.
- No photo credits (the site ships no stock photography).
- Demo interest routes only through the central IEC CNDA
  (`https://iecincglobal.com/cnda.html`). There is no public demo and no
  demo login for ARBEXEC.
- Honest capability copy: intake is described as the two real routes —
  the FHIR R4 / SMART connection and manual upload — and the capture
  layer as built. The pilot section states the FHIR connection is
  enabled per organization during onboarding, completed through the
  EHR vendor's registration process. No claim of a live vendor
  integration, certification, win rate, or filed-case volume.
- The nav and footer carry a **Sign In** button to the application
  portal (`https://app.arbexec.com/portal/signin`).

## Resolved / status

1. **CNDA origin tag:** resolved — the site links the central CNDA
   directly with `?origin=arbexec` (commit f546565, per the Nov 22,
   2026 all-assets ruling).
2. **Logo:** `assets/logo.webp` is the MEDEXEC-matched "scales" concept
   from the Nov 22, 2026 concept round. DrMorgan's final pick between
   the concepts is still pending; the asset swaps in one file when he
   picks.
3. **Hosting:** this site serves at the arbexec.com apex; the gated
   application lives at app.arbexec.com on its own deployment.
