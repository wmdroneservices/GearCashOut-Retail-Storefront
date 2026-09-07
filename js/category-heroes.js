// Approved storefront imagery only.
// No runtime image search is permitted: every displayed image must be explicitly curated.
export const CATEGORY_HEROES = {};

export const MANUFACTURER_HEROES = {};

export const MODEL_HEROES = {};

export function imageFor({category="",manufacturer="",model=""}){
  const modelKey=[category,manufacturer,model].filter(Boolean).join(" | ");
  if(MODEL_HEROES[modelKey]) return MODEL_HEROES[modelKey];
  if(MANUFACTURER_HEROES[[category,manufacturer].filter(Boolean).join(" | ")]) return MANUFACTURER_HEROES[[category,manufacturer].filter(Boolean).join(" | ")];
  return CATEGORY_HEROES[category]||null;
}
