# Change Note — Account Navigation and Brand Testing Preparation

**Date:** 10 September 2026

## First actual failure

The public Retail Storefront displayed an Account button on the homepage, shop page and product page, but the control was an inert `<button>` with no navigation handler. Clicking it therefore did nothing.

## Investigation

The Retail Storefront repository currently contains the public catalogue, shop and product-detail pages and a shared Supabase client. It does not yet contain its own customer login/account pages.

The central Action-Buyer-UK customer account is already implemented at `https://gearcashout.co.uk/account.html`, with its own authentication guard and customer account workflow.

## Minimal repair

The Account controls on `index.html`, `shop.html` and `product.html` were changed from inert buttons to links to the central GearCashOut customer account.

No duplicate authentication system was introduced into the retail repository.

## Brand state

The current **GearOutlet** name and artwork remain temporary. The existing visual system is deliberately treated as a presentation layer while brand-name testing takes place. No backend/catalogue/inventory data is tied to the GearOutlet name.

## Next testing sequence

1. Browser-test Account navigation on homepage.
2. Browser-test Account navigation on Shop.
3. Browser-test Account navigation on Product.
4. Test the current catalogue/filter/product-detail workflow.
5. Test candidate retail names before committing the logo/domain.
6. Redesign the storefront around the selected brand rather than repeatedly redesigning the temporary identity.

## Verification state

Repository change completed. Live browser verification remains pending deployment/cache refresh.
