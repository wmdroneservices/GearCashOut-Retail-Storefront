# Gear1 Outpost Retail Storefront

Dedicated public retail website for the GearCashOut multi-site platform.

## Current Brand Test

The active customer-facing test identity is **Gear1 Outpost**.

- uses the existing GearCashOut four-point compass as the shared brand mark;
- retail wordmark asset: `images/gear1-outpost-brand.svg`;
- current strapline: **QUALITY GEAR. READY FOR MORE.**;
- brand/domain remains subject to final testing and clearance.

The previous GearOutlet identity is historical and should not be used for new customer-facing work.

## Current Stage

Stage 1 foundation plus initial brand test:

- separate public website repository;
- shared Supabase platform backend;
- one shared customer identity;
- complete buying catalogue available to the storefront;
- manufacturer filtering;
- manufacturer visibility controlled centrally through the existing `sales_catalog_visibility` model;
- safe public catalogue RPCs that do not expose purchase costs, internal notes, customer data, staff data or market evidence.

## Catalogue

Current source catalogue: `public.quote_catalog_products`.

The public storefront reads the catalogue through:

- `public.public_storefront_manufacturers('retail')`
- `public.public_storefront_catalog('retail', ...)`

This keeps the existing purchase catalogue authoritative.

## Local configuration

The current project uses:

- Supabase URL: `https://npdpopaoazbpmwsgyosp.supabase.co`
- Supabase publishable key: configured in `js/config.js`

No service-role credential is used in browser code.

## Diagnostic Roadmaps

- `docs/RETAIL-STOREFRONT-DIAGNOSTIC-ROADMAP.md` — catalogue, stock, imagery, product detail and authentication/navigation investigation.
- `docs/DIAGNOSTIC-ROADMAPS/GEAR1-OUTPOST-BRAND-REDESIGN.md` — current brand test and visual redesign investigation.

## Next stages

1. browser-test the Gear1 Outpost identity and Account navigation;
2. continue systematic storefront testing;
3. final brand/domain configuration after testing and clearance;
4. refine the visual redesign;
5. live website inventory and checkout;
6. order/fulfilment flow;
7. specialist storefronts and future auction channel.
