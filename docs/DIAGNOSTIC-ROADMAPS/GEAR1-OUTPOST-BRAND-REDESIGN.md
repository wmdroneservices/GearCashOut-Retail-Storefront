# Gear1 Outpost Brand & Retail Redesign Diagnostic Roadmap

**Status:** Active brand-test identity — 10 September 2026.

## Purpose

This roadmap covers the customer-facing identity and visual redesign of the separate Retail Storefront while preserving the shared GearCashOut backend and central catalogue.

## Current identity

- Brand under test: **Gear1 Outpost**.
- Shared brand mark: the existing GearCashOut four-point compass.
- New retail asset: `images/gear1-outpost-brand.svg`.
- Current strapline: **QUALITY GEAR. READY FOR MORE.**
- GearOutlet is retained only as historical temporary identity; it is no longer the active storefront presentation.

## User action

Visitor opens the retail storefront, recognises the Gear1 Outpost brand, browses equipment, opens product detail, and can reach the shared customer account.

## Front-end entry points

- `index.html` — homepage and primary brand presentation.
- `shop.html` — catalogue browsing.
- `product.html` — live listing detail.
- `style.css` — shared visual system.
- `images/gear1-outpost-brand.svg` — retail wordmark using the shared compass.

## Existing data path that must remain unchanged

`quote_catalog_products`
→ canonical retail category routing
→ public storefront RPCs
→ public catalogue/category/manufacturer/model views
→ published WEBSITE `resale_listings`
→ `inventory_assets`
→ retail product detail.

The brand redesign must not duplicate or replace this data path.

## Authentication boundary

Retail pages do not create a second customer identity system. The Account control routes to the central GearCashOut customer account at `https://gearcashout.co.uk/account.html`.

## Brand-test rules

Before final adoption, evaluate:

1. clarity and pronunciation;
2. memorability;
3. suitability for photography, drones, video, audio and broader equipment;
4. ability to support future specialist retail channels;
5. wordmark/logo strength using the shared compass;
6. domain and social availability;
7. UK company-name and trademark conflicts.

## Redesign sequence

1. Test the Gear1 Outpost name and visual identity.
2. Verify homepage, catalogue, product detail and account navigation.
3. Refine typography, colour, navigation and retail messaging.
4. Improve category and product presentation without changing catalogue truth.
5. Implement live purchasing/checkout separately from the brand layer.
6. Only after brand selection, configure the final public domain and remove historical temporary references.

## Failure checkpoints

- Wrong logo: inspect `images/gear1-outpost-brand.svg` against the existing GearCashOut compass source.
- Stale GearOutlet branding: search the retail repository for `GearOutlet` before final release.
- Broken Account: inspect the header links in all three public pages; destination remains central GearCashOut account.
- Missing catalogue: inspect `js/home.js`, `js/shop.js`, `js/config.js` and public storefront RPCs before changing UI.
- Wrong stock state: inspect authoritative Published WEBSITE listing and linked inventory asset before changing front-end display.
- Unrelated imagery: follow the existing curated-image queue rules; never restore unconstrained runtime image searching.

## Verification

After deployment/cache refresh:

1. Homepage shows Gear1 Outpost and the shared compass.
2. Shop page shows Gear1 Outpost and catalogue data.
3. Product page shows Gear1 Outpost and published listing data.
4. Account links from all three pages reach the central customer account/login flow.
5. No service-role credential or private catalogue data is exposed.
6. Existing category/manufacturer/model/stock routing remains functional.
