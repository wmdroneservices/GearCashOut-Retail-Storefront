// Explicitly curated storefront hero imagery.
// Runtime web/image search is prohibited: only entries reviewed for the exact entity may render.
export const CATEGORY_HEROES={
  "Cameras":{image:"https://images.pexels.com/photos/32129263/pexels-photo-32129263.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Professional mirrorless camera on white background",source:"https://www.pexels.com/photo/32129263/"},
  "Lenses":{image:"https://images.pexels.com/photos/34956921/pexels-photo-34956921.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Professional camera lens on white background",source:"https://www.pexels.com/photo/34956921/"},
  "Drones":{image:"https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Drone isolated on white background",source:"https://www.pexels.com/photo/4141056/"},
  "Camera Accessories":{image:"https://images.pexels.com/photos/32885747/pexels-photo-32885747.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Camera and photography accessories on white background",source:"https://www.pexels.com/photo/32885747/"},
  "Video Cameras":{image:"https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Professional video camera rig on white background",source:"https://www.pexels.com/photo/14526284/"},
  "Lighting":{image:"https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Professional studio lighting on white background",source:"https://www.pexels.com/photo/28772534/"},
  "Action Cameras":{image:"https://images.pexels.com/photos/19297708/pexels-photo-19297708.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Action camera on white background",source:"https://www.pexels.com/photo/19297708/"},
  "Video Production Equipment":{image:"https://images.pexels.com/photos/34516677/pexels-photo-34516677.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Professional camera setup for video production",source:"https://www.pexels.com/photo/34516677/"},
  "Audio":{image:"https://images.pexels.com/photos/12997264/pexels-photo-12997264.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Professional microphone on white background",source:"https://www.pexels.com/photo/12997264/"},
  "Supports & Stabilisation":{image:"https://images.pexels.com/photos/5653947/pexels-photo-5653947.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Professional camera on support against white background",source:"https://www.pexels.com/photo/5653947/"},
  "Drone Accessories":{image:"https://images.pexels.com/photos/14124991/pexels-photo-14124991.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Drone and controller accessories on white background",source:"https://www.pexels.com/photo/14124991/"},
  "Power & Batteries":{image:"https://images.pexels.com/photos/6370386/pexels-photo-6370386.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Camera battery and charger equipment on white background",source:"https://www.pexels.com/photo/6370386/"},
  "Studio Equipment":{image:"https://images.pexels.com/photos/7383648/pexels-photo-7383648.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Photography studio equipment",source:"https://www.pexels.com/photo/7383648/"},
  "Other Equipment":{image:"https://images.pexels.com/photos/15945023/pexels-photo-15945023.jpeg?auto=compress&cs=tinysrgb&w=1200",alt:"Photography equipment on white background",source:"https://www.pexels.com/photo/15945023/"}
};

export const MANUFACTURER_HEROES={};
export const MODEL_HEROES={};

function manufacturerNameHero(category,manufacturer){
  const safeBrand=String(manufacturer||"").trim();
  const safeCategory=String(category||"Catalogue").trim();
  if(!safeBrand) return null;
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#ffffff"/><rect x="56" y="56" width="1088" height="688" rx="34" fill="#f4f4f0" stroke="#d8dad4" stroke-width="2"/><circle cx="600" cy="230" r="42" fill="#d9ff58"/><text x="600" y="415" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="76" font-weight="700" fill="#111412">${escapeXml(safeBrand)}</text><text x="600" y="500" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="25" font-weight="700" letter-spacing="7" fill="#e76b36">${escapeXml(safeCategory.toUpperCase())}</text><text x="600" y="585" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="22" fill="#6d716d">BRAND HERO • IMAGE CURATION IN PROGRESS</text></svg>`;
  return {image:"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(svg),alt:safeBrand+" "+safeCategory+" brand hero",source:"generated-brand-hero"};
}
function escapeXml(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]));}

export function imageFor({category="",manufacturer="",model=""}){
  const modelKey=[category,manufacturer,model].filter(Boolean).join(" | ");
  if(MODEL_HEROES[modelKey]) return MODEL_HEROES[modelKey];
  const manufacturerKey=[category,manufacturer].filter(Boolean).join(" | ");
  if(MANUFACTURER_HEROES[manufacturerKey]) return MANUFACTURER_HEROES[manufacturerKey];
  if(manufacturer && !model) return manufacturerNameHero(category,manufacturer);
  return CATEGORY_HEROES[category]||null;
}
