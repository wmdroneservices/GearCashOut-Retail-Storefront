# GearCashOut Retail Storefront

Dedicated public retail website for the GearCashOut multi-site platform.

## Current Stage

Stage 1 foundation:

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

## Next stages

1. final brand/domain configuration;
2. product detail pages;
3. customer sign-in/account;
4. live website inventory and checkout;
5. order/fulfilment flow;
6. specialist storefronts and future auction channel.

See `docs/RETAIL-STOREFRONT-DIAGNOSTIC-ROADMAP.md`.
