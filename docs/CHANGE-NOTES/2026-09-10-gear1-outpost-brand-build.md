# 10 September 2026 — Gear1 Outpost brand build

## Starting state inspected

- current Retail Storefront repository;
- existing Retail Storefront Diagnostic Roadmap;
- current GearCashOut compass source asset;
- active `retail` storefront state in Supabase.

## First failure / decision

The previous customer-facing identity was the temporary GearOutlet presentation. The user selected **Gear1 Outpost** for the next brand test and requested reuse of the existing GearCashOut compass logo.

## Change made

Created:

- `images/gear1-outpost-brand.svg`

The compass mark is reused from the existing GearCashOut brand artwork. The retail wordmark is now **Gear1 Outpost** with the existing orange accent and the strapline **QUALITY GEAR. READY FOR MORE.**

Updated:

- `index.html`
- `shop.html`
- `product.html`
- `README.md`

The central Account destination remains `https://gearcashout.co.uk/account.html`.

## Backend safety

No Supabase schema, RPC, catalogue, inventory, listing, sales, customer-authentication or checkout logic was changed.

The live `retail` storefront record remains active. Branding is a presentation-layer change.

## Verification status

GitHub changes completed. Live browser/cache verification remains pending until the deployed preview reflects the new commits.

## Next investigation

- test Gear1 Outpost across homepage, shop and product detail;
- search for stale GearOutlet references;
- continue brand/domain/trademark suitability testing;
- then refine the visual system around the selected identity.

See `docs/DIAGNOSTIC-ROADMAPS/GEAR1-OUTPOST-BRAND-REDESIGN.md`.
