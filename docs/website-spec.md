# propertreat.com — Website Spec

This spec covers the public marketing site at propertreat.com. It does not cover the in-product voucher personalisation or redemption flows (see `README.md` for the voucher lifecycle) — those are part of the application, not the marketing site.

**Primary audience:** small independent business owners (cafés, restaurants, hair salons, nail bars, boutique experience businesses) deciding whether to sign up to sell gift vouchers through Proper Treat.

**Secondary audience:** curious gift recipients/purchasers who land on the site out of curiosity after receiving a voucher — the site should not alienate them, but every page's primary CTA targets the merchant.

**Tone:** warm, playful, thoughtful, premium-but-approachable. Never corporate, cold, cluttered, or enterprise-heavy (per `CLAUDE.md`).

---

## 1. Sitemap

| Path | Page | Priority |
|---|---|---|
| `/` | Home | MVP |
| `/how-it-works` | How It Works | MVP |
| `/pricing` | Pricing | MVP |
| `/templates` | Template Gallery | MVP |
| `/about` | About | MVP |
| `/contact` | Contact | MVP |
| `/login` | Login (magic link) | MVP |
| `/signup` | Sign Up | MVP |
| `/privacy` | Privacy Policy | MVP |
| `/terms` | Terms of Service | MVP |
| `/blog` | Blog | Future (Phase 2) |

No `/for-business` as a separate page — merchant feature detail lives on Home, since the entire site is already merchant-facing. Splitting it out adds navigation depth without adding clarity at this stage (Simplicity First, `CLAUDE.md`).

---

## 2. Page Specs

### `/` — Home

**Purpose:** Convert a visiting business owner into a signup within one scroll.

**Target reader:** A café/salon/restaurant owner who heard about Proper Treat from another business or a local listing, browsing on their phone.

**Sections (top to bottom):**
1. Hero — one-line promise + primary CTA ("Sign up") + secondary CTA ("See how it works"). No stock enterprise imagery; lead with an example voucher visual (`/public/hero-voucher-placeholder.svg` until real artwork exists, see §5).
2. Problem/emotion framing — vouchers today are functional but forgettable; gifting should feel like a gift.
3. How it works — condensed 3-4 step version (full detail lives on `/how-it-works`), each step paired with a short line, no jargon.
4. Feature highlights — QR redemption, partial redemption, artistic templates, no card readers/hardware needed. Framed as outcomes ("get repeat visits," "look premium in five minutes"), not technical bullet points.
5. Template teaser — 3-4 example voucher designs, links to `/templates`.
6. Social proof — placeholder founder-credibility line (see §5) instead of an empty section or fake testimonials.
7. Pricing teaser — one line + link to `/pricing`.
8. Final CTA banner — "Start selling gift vouchers today" + sign up.
9. Footer.

**Primary CTA:** Sign up.

**Copy direction:** "The gift voucher your customers will actually want to give." Confident, a little cheeky, never explaining the tech.

---

### `/how-it-works` — How It Works

**Purpose:** Answer "what am I actually setting up?" for a merchant who wants detail before committing.

**Target reader:** A more cautious owner, possibly checking this before showing a business partner or staff member.

**Sections:**
1. Short intro reframing the voucher lifecycle from the merchant's side (create → customer buys & personalises → recipient receives → you redeem via QR).
2. Step-by-step walkthrough mirroring the Voucher Lifecycle in `README.md`, written for a non-technical owner: Create a campaign → Customer buys and personalises → Recipient gets a beautiful digital voucher → You scan and redeem, partial or full.
3. A redemption-specific callout: scanning is fast, works on any phone, no new hardware.
4. CTA: Sign up.

**Primary CTA:** Sign up.

---

### `/pricing` — Pricing

**Purpose:** Remove fee-structure ambiguity before signup, since Stripe Connect take-rate models can look opaque to non-technical owners.

**Target reader:** An owner comparing this against "just doing gift cards through my POS."

**Sections:**
1. Single, simple pricing statement: **5% per voucher sold, no monthly fee, no setup cost.** One flat plan — no tiers.
2. What's included (no setup fee, no hardware, payouts via Stripe).
3. FAQ accordion: "Do I need a Stripe account?", "When do I get paid?", "What if a voucher isn't fully redeemed?", "Is there a contract?"
4. CTA: Sign up.

**Primary CTA:** Sign up.

---

### `/templates` — Template Gallery

**Purpose:** Sell the emotional/design differentiator — this is the page that makes Proper Treat feel unlike generic gift-card software.

**Target reader:** An owner who cares about brand and presentation (most of the target segments do, by nature of the business).

**Sections:**
1. Intro: "Vouchers people actually want to receive."
2. Grid of template examples, categorised loosely (playful, elegant, seasonal) — use `/public/templates/placeholder-*.svg` for now (see §5); swap in real artwork later without changing the grid structure.
3. Note that merchants can apply their own branding on top of templates (ties to "branding configuration" in `README.md` merchant features).
4. CTA: Sign up.

**Primary CTA:** Sign up.

---

### `/about` — About

**Purpose:** Build trust in a solo-founder product; explain the Bath-first, independent-business mission.

**Sections:**
1. Founder story / why Proper Treat exists (voucher systems are functional but emotionally flat).
2. Mission: supporting independent businesses, starting in Bath, expanding across the UK.
3. Values: simplicity, delight, merchant-friendliness (mirrors Product Principles in `CLAUDE.md`).
4. CTA: Sign up / Contact.

**Primary CTA:** Sign up.

---

### `/contact` — Contact

**Purpose:** Low-friction path for a hesitant owner to ask a question before committing, and a support channel post-signup.

**Sections:**
1. Short form (name, business name, email, message) — no phone number requirement.
2. Direct email address as fallback: **phil@propertreat.com**.
3. Response-time expectation line (keeps trust with a solo founder's support capacity).

**Primary CTA:** Submit contact form.

---

### `/login` and `/signup`

**Purpose:** Lowest-friction entry via Supabase magic link auth, per `CLAUDE.md` Authentication section.

**Sections:**
- Single email field, "Send me a login link" — no password field at all.
- `/signup` additionally asks for business name only; everything else, including Stripe Connect onboarding, campaign setup, and branding, happens post-login inside the product, not on the marketing site. Keeps public signup to two fields.

**Primary CTA:** Send magic link.

---

### `/privacy` and `/terms`

**Purpose:** Legal compliance. Standard content; not a design priority. Plain-text layout, no marketing chrome beyond header/footer.

---

### `/blog` (Future — Phase 2)

Flagged as out of scope for MVP. Not specified further here; revisit once there's a content strategy and something to write about.

---

## 3. Navigation & IA

**Header (logged-out):**
`[heart icon] Proper Treat` — How it works — Pricing — Templates — Login — **Sign up** (primary button, visually distinct)

Icon mark + text-set wordmark, not the full logo image with baked-in text (see §5).

Keep the header to these five items max. No mega-menus, no dropdowns — matches Simplicity First and Mobile-First UX principles in `CLAUDE.md`.

**Footer:**
- Column: Product — How it works, Pricing, Templates
- Column: Company — About, Contact
- Column: Legal — Privacy, Terms
- Tagline: something like "Made for independent businesses" or similar warm sign-off
- Social icons, linking out:
  - Instagram — instagram.com/propertreat
  - Twitter/X — @ProperTreatHQ
  - Facebook — ProperTreat
  - LinkedIn — linkedin.com/company/propertreat
  - Threads — threads.com/@propertreat
  - Reddit — r/propertreat
  - Order by expected traffic/relevance to the audience (Instagram and Facebook likely matter most for local small-business owners); don't let the icon row grow wider than it is tall on mobile — collapse to a single row of icons, no labels.

**Mobile nav:** collapses to a hamburger; Sign up button stays visible/sticky given it's the single conversion goal.

---

## 4. Component Inventory

Build from shadcn/ui primitives per `CLAUDE.md` styling rules — no new design system, no component library beyond what's already standard.

- `Hero` — headline, subhead, primary + secondary CTA, visual slot
- `StepSequence` — numbered steps for How It Works (home teaser + full page)
- `FeatureGrid` — icon/heading/short-copy cards
- `TemplateCard` / `TemplateGrid` — voucher artwork preview grid
- `PricingCard` — single-plan card with feature list
- `FAQAccordion`
- `TestimonialCard` — build the component now, populate with placeholder founder-credibility copy (see §5)
- `CTASection` — full-width banner with heading + button, reused across pages
- `ContactForm`
- `SiteHeader` / `SiteFooter`

Keep each component focused and small per the General coding preferences in `CLAUDE.md`; avoid a single monolithic "marketing page" component.

---

## 5. Placeholder Approach (until real assets exist)

Real brand and customer assets don't exist yet. Rather than blocking build or leaving gaps empty, use clearly-placeholder content that can be swapped in later without restructuring pages:

- **Logo:** Resolved. Use `/logo/proper-treat-icon.svg` — the heart/ribbon mark in teal (`#45ABA2` / `rgb(69, 171, 162)`), a transparent-background vector traced from the source mockup, icon only, no wordmark baked in. Pair it with the site name set in regular text in the header/footer.
- **Favicon:** Resolved. `/public/favicon.svg` (padded to a square canvas with ~12% margin so the mark doesn't crowd the tab edge), plus `/public/favicon.ico` (16/32/48 multi-size), `/public/favicon-16x16.png`, `/public/favicon-32x32.png`, and `/public/apple-touch-icon.png` (180×180). Reference these directly in the root layout's `<head>`/metadata rather than regenerating — no further asset work needed here.
- **Template artwork:** Resolved (placeholder). No real voucher designs exist yet, so use the generated placeholder cards at `/public/templates/placeholder-playful.svg`, `placeholder-elegant.svg`, and `placeholder-seasonal.svg` — 400×280 gradient cards in the brand teal/warm palette, each with a watermarked heart mark and a visible "PLACEHOLDER" badge so they're never mistaken for shipped artwork. Same card aspect ratio real artwork will use, so `TemplateGrid`/`TemplateCard` don't need rework when real templates arrive — just swap the `src`.
- **Hero visual:** Resolved (placeholder). `/public/hero-voucher-placeholder.svg` — a mocked-up voucher card (message, £25 amount, non-scannable QR-style graphic, "PLACEHOLDER" badge) for the Home hero slot described in §2. The QR pattern is decorative only, not a real code — never present it as scannable.
- **Social proof:** No customers yet (Phase 1 hasn't launched). Use a single founder-credibility placeholder line instead of a testimonial (e.g. "Built in Bath for independent businesses" or a short founder quote) rather than fake reviews or logos. Swap for real testimonials once Phase 1 merchants are live — never fabricate reviews or customer logos in the meantime.

---

## 6. Resolved Decisions

1. **Site scope:** B2B only. No consumer directory/marketplace page. Consistent with Phase 1 (Bath, direct merchant sales) in `README.md`.
2. **Signup flow:** Stripe Connect onboarding happens after magic-link account creation, inside the product. `/signup` collects only email + business name.
3. **Pricing structure:** Single flat plan, no tiers, per Simplicity First.
4. **Take rate:** 5% per voucher sold, no monthly fee.

---

## Verification Checklist

- [x] Every page above has exactly one primary CTA (Sign up, except Contact which converts to a form submission).
- [x] No page introduces enterprise-style navigation depth (mega-menus, multi-level dropdowns) — consistent with Simplicity First.
- [x] Nothing here contradicts the multi-tenant, Bath-first, phased rollout described in `README.md`.
- [x] Tone direction on every page avoids corporate/cold language, per Product Philosophy in `CLAUDE.md`.
- [x] Logo mark and favicon set are finished assets; template artwork and hero visual use generated, clearly-badged placeholder SVGs (§5, `/public`); social proof uses a placeholder credibility line rather than fabricated reviews/logos; pricing (5%, flat) is a confirmed decision, not a placeholder.
