# Retail Storefront Developer Diagnostic Roadmap

## Status
Stage 1 foundation implemented 7 September 2026.

## User action
Public visitor opens the retail website, browses the complete central catalogue, filters by manufacturer/category/search, and sees whether a catalogue product currently has published website stock.

## Front-end entry points
- `index.html` → `js/home.js`
- `shop.html` → `js/shop.js`
- `js/config.js`
- `js/supabase-client.js`

## Catalogue path
`quote_catalog_products`
→ `public_storefront_manufacturers('retail')`
→ public manufacturer selector

`quote_catalog_products`
+ `catalog_sales_content`
+ `sales_catalog_visibility`
+ website `resale_listings`
+ `inventory_assets`
→ `public_storefront_catalog('retail', ...)`
→ public product cards.

## Visibility controls
The storefront uses the existing `sales_catalog_visibility` system.

Scope types:
- manufacturer
- category
- product

Modes:
- auto
- show
- hide

Default state is `auto`, meaning all 73 current catalogue manufacturers are enabled unless management explicitly hides one.

## Security boundary
Public browser calls use only the Supabase publishable key.

The public RPCs deliberately do not expose:
- purchase prices;
- internal notes;
- customer data;
- staff data;
- market evidence;
- service-role credentials.

## Stock truth
Public availability is calculated from:

`resale_listings.status='Published'`
→ `sales_outlets.outlet_code='WEBSITE'`
→ linked `inventory_assets.catalog_product_id`

The catalogue itself is not duplicated.

## Failure checkpoints
1. Confirm `sales_storefronts.store_key='retail'` is active.
2. Confirm manufacturer is not hidden.
3. Confirm catalogue product exists.
4. Confirm public RPC works.
5. Confirm browser uses publishable, never service-role, credentials.
6. For stock availability, confirm published WEBSITE listing and unsold inventory asset.
7. Never expose internal buying prices merely because the source catalogue contains them.

## Next steps
- product detail page;
- management manufacturer/category visibility UI;
- shared customer authentication UI;
- live product purchase flow;
- checkout and order integration;
- final brand/domain configuration.


## Visual design pass — 7 September 2026

The initial functional interface was replaced with a configurable premium storefront design.

### Design principles
- neutral temporary identity while final brand/domain remain undecided;
- dark editorial hero with configurable lime/orange accent system;
- premium specialist-equipment marketplace appearance;
- responsive mobile layout;
- large visual hierarchy rather than a generic admin/dashboard appearance.

### Pages affected
- `index.html`
- `shop.html`
- `style.css`

### Behaviour preserved
The visual pass does not alter:
- shared Supabase backend;
- public catalogue RPCs;
- manufacturer visibility;
- category visibility;
- product visibility;
- stock truth;
- search/filter/pagination logic.

### Next verification
Open the deployed/preview website and verify:
1. homepage visual hierarchy;
2. mobile layout;
3. catalogue loading;
4. manufacturer navigation;
5. product search and filters.


## Temporary GearOutlet identity — 7 September 2026

The storefront now uses the established GearCashOut four-point compass visual language as a temporary retail-channel identity.

- asset: `images/gearoutlet-brand.svg`;
- temporary name: **GearOutlet**;
- compass styling retained from the existing GearCashOut identity;
- wordmark treatment: Gear + orange Outlet;
- temporary strapline: **QUALITY GEAR. READY FOR MORE.**

This is presentation-only. No Supabase, catalogue, authentication, inventory, visibility or sales workflow was changed. The final brand and domain remain configurable.
