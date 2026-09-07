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


## Category hero imagery — first batch, 7 September 2026

### Purpose
When a visitor selects a supported category, including a combined manufacturer × category filter, the shop now shows an editorial category hero above the catalogue results.

These images are separate from product-card imagery and do not alter catalogue records.

### Current first batch
The first ten raw catalogue categories alphabetically were mapped:

1. Accessory
2. Action Camera
3. Action Camera Accessories
4. Audio
5. Bags & Cases
6. Batteries
7. Binocular Case
8. Body Camera
9. Broadcast Cameras
10. Cable

### Front-end path
`shop.html` category hero container
→ `js/category-heroes.js` category-to-editorial-image mapping
→ `js/shop.js` `renderCategoryHero()`
→ white-background block hero above results.

### Rules
- hero imagery is editorial stock imagery, not the catalogue product image;
- no image URL is written into `quote_catalog_products`;
- hero images do not affect manufacturer/category/product visibility;
- white or near-white backgrounds are required so the image visually blends into the block layout;
- image source/audit record: `docs/CATEGORY-HERO-IMAGE-SOURCES.md`.

### Known first-batch refinement
The Binocular Case and Body Camera entries currently use closest-match compact/optics imagery that satisfies the white-background visual rule; replace these with stronger exact-category stock imagery when found.


## Hero imagery research review — Batch 100, 7 September 2026

A separate review layer was created before wiring further imagery into live filters.

### Scope
- 50 categories;
- 25 manufacturers;
- 25 product lines.

### Review path
`hero-image-review.html`
→ `js/hero-image-review.js`
→ 100 researched stock/editorial candidate cards
→ direct source-page links for approval.

### Safety rule
Batch 100 is **review-only**. It does not alter current live category hero mappings, catalogue records, Supabase data, pricing, inventory, visibility, or public RPCs.

After approval, candidates move into the production mapping with separate entity scopes for manufacturer, category and product line, plus an explicit precedence rule for combined selections.


## Corrected hero research methodology — 7 September 2026

The original generic-image Batch 100 was rejected following review.

### New mandatory sequence
1. Query the actual catalogue entity.
2. Identify a representative real product/model from that entity.
3. Search manufacturer-specific or official imagery for that product family.
4. Reject generic objects that merely resemble the category.
5. Prefer a recognisable hero product on a clean white/light background.
6. Avoid duplicates unless visually and semantically justified.
7. Keep research manifest and final production mapping separate.

### Corrected Batch 100
A replacement Batch 100 now consists of 100 catalogue-derived manufacturer/category/product-line/model targets. It replaces the previous review methodology and is the source-of-truth queue for image selection.


## Catalogue image population preview — 7 September 2026

The public shop product grid now attempts product-specific imagery for each live catalogue row at render time. The image lookup is derived from the actual manufacturer + model + package/product context rather than a generic category image.

### Data flow
quote_catalog_products → public_storefront_catalog RPC → shop.js product identity → public-media image lookup → product card.

### Guardrail
If no product-specific public image is resolved, the card remains in an explicit pending state. The system must not silently substitute an unrelated generic object.

### Next hardening
Replace runtime public-media lookup with a curated approved image mapping/cache after the user reviews coverage and quality. This avoids unstable third-party lookup behaviour while preserving product relevance.


## Image population fault and fix — 7 September 2026

**First failure:** the product card stored row JSON in an HTML data attribute after stripping quotation marks. The subsequent `JSON.parse` therefore failed before the product-image resolver could make any lookup.

**Minimal repair:** preserve the exact row JSON using URI encoding in the data attribute and decode it immediately before parsing. This changes only the image resolver handoff and does not alter catalogue, RPC, pricing, stock or sales logic.


## Catalogue-first homepage browsing — 7 September 2026

The homepage primary **Browse catalogue** action now takes the user to a category-first browsing section rather than immediately presenting an A–Z/all-products experience.

The homepage uses the main catalogue groupings, including Cameras, Lenses, Drones, Video Cameras, Action Cameras, Camera Accessories, Lighting, Audio, Supports & Stabilisation, Video Production Equipment, Drone Accessories, Power & Batteries and Studio Equipment.

Each category links into the existing central catalogue using the category query parameter. Manufacturer browsing remains available as a separate route and the underlying catalogue/RPC/backend remains unchanged.


## Correction: category cards must use the existing shop grid — 7 September 2026

The previous homepage category-first implementation was the wrong visual interpretation: it created a separate list/grid section rather than using the established Retail Storefront shop layout.

**Correct behaviour:** opening **Browse Catalogue** now keeps the exact shop page structure shown in the storefront: left filters and the existing card grid. The initial grid contains category cards (Cameras, Lenses, Drones, Video Cameras, Action Cameras, etc.) instead of individual products. Clicking a category then switches that same grid to the products within the selected category.

This is a front-end navigation/layout correction only. The central catalogue, manufacturer controls, Supabase RPCs, buying and sales backend remain unchanged.


## Retail browse hierarchy: Category → Manufacturer → Model → Live Stock — 7 September 2026

### User journey
The Retail Storefront now follows a hierarchical browse journey while preserving the existing sidebar and card-grid layout:

1. **Browse Categories** — category cards, each with a relevant hero image.
2. **Select Category** — only manufacturers relevant to that category are shown, each as an image card.
3. **Select Manufacturer** — models relevant to that manufacturer and category are shown as image cards.
4. **Select Model** — only actual units currently published to the WEBSITE outlet are shown as stock cards, with condition and asking price.

No category/manufacturer/model card requires a product-count number.

### Live data path
Category card
→ `public_storefront_category_manufacturers(store_key, category)`
→ manufacturer card
→ `public_storefront_models(store_key, category, manufacturer)`
→ model card
→ `public_storefront_stock(store_key, category, manufacturer, model)`
→ published WEBSITE resale listings joined to inventory assets and sales content.

### Safety and visibility
All new public RPCs are SECURITY DEFINER with fixed public search path and apply storefront visibility rules. Stock output deliberately excludes private fields such as serial numbers, storage locations, purchase prices and internal notes.

Only listings with **Published** status on the active **WEBSITE** outlet are exposed as live stock.

### Hero imagery
- Main category cards use explicit clean-background category hero mappings where available.
- Manufacturer, model and stock cards resolve imagery from the actual manufacturer/model identity rather than substituting unrelated generic objects.
- The selected hierarchy level also receives a relevant top hero.
- Curated catalogue/inventory sales imagery can replace runtime lookup as it is approved and populated.


## Image-system hard stop and curated replacement pipeline — 7 September 2026

### Fault identified
The live storefront was performing an unconstrained runtime Wikimedia search from manufacturer/model/category text. This could return semantically wrong media, including people, unrelated objects and duplicates. This was the first failure behind the poor card imagery.

### Immediate repair
- Removed the Wikimedia runtime image resolver completely.
- Removed runtime fallback searching from category, manufacturer, model and stock cards.
- Cleared the previous mixed hero mapping before replacement.
- Cards without an explicitly curated image now show a neutral **IMAGE CURATION — Approved image pending** state rather than an unrelated photograph.
- The 14 main storefront categories now have individually researched, explicit white-background/clean-background hero selections from Pexels research.

### Dedicated image queue
A new isolated Supabase table, `public.retail_storefront_image_queue`, was created so image research does not overwrite Gemma's evidence/catalogue work:

- 34 category targets
- 188 category/manufacturer targets
- 3,526 category/manufacturer/model targets
- 3,845 exact catalogue-product targets

Each target carries independent fields for source URL, source name, licence status, research status and explicit approval.

### Approval rule
Only an explicitly approved mapping may render. Candidate or unverified web results must never silently appear on the public storefront.

### Public access
`public_storefront_image_assets(category, manufacturer)` returns only approved rows with non-empty image URLs. Internal research notes and rejected/pending candidates remain private.

### Coordination rule
This queue is deliberately separate from `catalog_sales_content`, which is currently part of the shared research workflow. Do not overwrite or bulk-edit Gemma/other-agent catalogue evidence or sales-content records while this pipeline is being populated.


## Staff Image Research Workspace — 7 September 2026

A dedicated internal Image Research workspace is now available in the Retail Storefront at `image-research.html`.

### Access
The page is protected by Supabase Authentication and the existing `public.is_staff_manager()` permission check. Only an active staff manager can load or save the research queue. The retail image queue itself now has RLS enabled and direct anon/authenticated table access revoked; the UI uses manager-only RPCs.

### What the workspace allows
- Filter by scope: category, manufacturer, model or exact product.
- Filter by research status and search the queue.
- Review the exact catalogue target.
- Preview a candidate image.
- Record image URL, source page URL and source name.
- Record licence/rights status and research notes.
- Mark a candidate pending, candidate, approved, rejected or blocked.
- Explicitly approve imagery for storefront use.

### Database routes
- `staff_retail_image_research_list(...)`
- `staff_retail_image_research_save(...)`
- Existing public storefront imagery remains limited to explicitly approved records.

This workspace is deliberately isolated from `catalog_sales_content` so it does not interfere with Gemma or other agents' catalogue/evidence research.
