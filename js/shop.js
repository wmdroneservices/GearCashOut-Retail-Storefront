import { createSupabaseClient } from "./supabase-client.js";
import { STOREFRONT_KEY, PAGE_SIZE } from "./config.js";
import { CATEGORY_HEROES } from "./category-heroes.js";

const supabase = await createSupabaseClient();
const params = new URLSearchParams(location.search);
const state = { manufacturer:params.get("manufacturer")||"", category:params.get("category")||"", search:"", offset:0, loading:false, finished:false, categories:new Set() };

const manufacturerSelect=document.querySelector("#manufacturer-select");
const categorySelect=document.querySelector("#category-select");
const searchInput=document.querySelector("#search-input");
const productGrid=document.querySelector("#product-grid");
const summary=document.querySelector("#result-summary");
const loadMoreButton=document.querySelector("#load-more");
const categoryHero=document.querySelector("#category-hero");
const categoryHeroTitle=document.querySelector("#category-hero-title");
const categoryHeroImage=document.querySelector("#category-hero-image");
const categoryHeroDescription=document.querySelector("#category-hero-description");

function escapeHtml(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function escapeAttribute(value){return String(value??"").replace(/['"()\\]/g,"");}

function imageKey(row){
 return [row.manufacturer,row.model,row.package_name,row.product_type,row.main_category||row.category].filter(Boolean).join(" ");
}
function productImageUrl(row){
 // Live external thumbnail: product-specific query, not a generic category substitute.
 // Wikimedia Special:FilePath returns an image when an exact matching public media file exists;
 // otherwise the card remains a deliberate image-pending state rather than inventing a generic product.
 const q=imageKey(row);
 return "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch="+encodeURIComponent(q)+"&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=900&format=json&origin=*";
}
async function resolveImage(row,img){
 const cached=img.dataset.resolved;
 if(cached) return;
 try{
   const res=await fetch(productImageUrl(row));
   const json=await res.json();
   const pages=json?.query?.pages||{};
   const page=Object.values(pages)[0];
   const url=page?.imageinfo?.[0]?.thumburl||page?.imageinfo?.[0]?.url;
   if(url){img.src=url;img.alt=imageKey(row);img.dataset.resolved="1";img.closest(".product-image").classList.add("has-image");}
 }catch(e){/* keep honest pending state */ }
}

async function loadManufacturers(){
 const {data,error}=await supabase.rpc("public_storefront_manufacturers",{p_store_key:STOREFRONT_KEY});
 if(error) throw error;
 for(const row of data.filter(row=>row.visible)){
  manufacturerSelect.insertAdjacentHTML("beforeend",`<option value="${escapeHtml(row.manufacturer)}">${escapeHtml(row.manufacturer)} (${row.product_count})</option>`);
 }
 manufacturerSelect.value=state.manufacturer;
}
function addCategories(rows){
 rows.forEach(row=>{const category=row.main_category||row.category;if(category)state.categories.add(category);});
 const current=categorySelect.value;
 categorySelect.innerHTML='<option value="">All categories</option>'+[...state.categories].sort().map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
 categorySelect.value=current;
}
function renderCategoryHero(){
 const hero=CATEGORY_HEROES[state.category];
 if(!hero){categoryHero.hidden=true;categoryHeroImage.removeAttribute("src");return;}
 categoryHeroTitle.textContent=state.category;
 categoryHeroImage.src=hero.image;categoryHeroImage.alt=hero.alt;
 categoryHeroDescription.textContent=state.manufacturer?`Editorial category view for ${state.manufacturer} × ${state.category}.`:`Editorial category view for ${state.category}.`;
 categoryHero.hidden=false;
}
function renderRows(rows,append){
 if(!append)productGrid.innerHTML="";
 const html=rows.map((row,i)=>{
  const id="catalogue-image-"+(state.offset+i);
  const title=[row.manufacturer,row.model,row.package_name].filter(Boolean).join(" ");
  const availability=Number(row.available_units||0);
  return `<article class="product-card" data-product='${escapeAttribute(JSON.stringify(row))}'>
   <div class="product-image"><div class="image-loading">Finding product image…</div><img id="${id}" hidden loading="lazy"></div>
   <div class="product-meta">${escapeHtml(row.main_category||row.category||"Catalogue")}</div>
   <h2>${escapeHtml(title||"Unnamed product")}</h2>
   <div class="product-meta">${escapeHtml(row.product_type||"")}</div>
   <div class="availability ${availability>0?"available":"unavailable"}">${availability>0?`${availability} available for sale`:"Catalogue item — availability pending"}</div>
  </article>`;
 }).join("");
 productGrid.insertAdjacentHTML("beforeend",html);
 [...productGrid.querySelectorAll(".product-card")].slice(append?Math.max(0,productGrid.children.length-rows.length):0).forEach(card=>{
   const row=JSON.parse(card.dataset.product);
   const img=card.querySelector("img");
   resolveImage(row,img).finally(()=>{card.querySelector(".image-loading")?.remove();img.hidden=!img.src;});
 });
}
async function loadProducts({append=false}={}){
 if(state.loading||(state.finished&&append))return;
 state.loading=true;loadMoreButton.disabled=true;summary.textContent="Loading products…";
 const {data,error}=await supabase.rpc("public_storefront_catalog",{p_store_key:STOREFRONT_KEY,p_manufacturer:state.manufacturer||null,p_category:state.category||null,p_search:state.search||null,p_limit:PAGE_SIZE,p_offset:state.offset});
 state.loading=false;
 if(error){console.error(error);summary.textContent="Catalogue could not be loaded.";loadMoreButton.disabled=false;return;}
 addCategories(data);renderCategoryHero();renderRows(data,append);
 state.offset+=data.length;state.finished=data.length<PAGE_SIZE;
 summary.textContent=`${state.offset.toLocaleString()} products loaded from the central catalogue`;
 loadMoreButton.hidden=state.finished;loadMoreButton.disabled=false;
}
function resetAndLoad(){state.offset=0;state.finished=false;loadProducts();}
manufacturerSelect.addEventListener("change",()=>{state.manufacturer=manufacturerSelect.value;renderCategoryHero();resetAndLoad();});
categorySelect.addEventListener("change",()=>{state.category=categorySelect.value;renderCategoryHero();resetAndLoad();});
let searchTimer;searchInput.addEventListener("input",()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{state.search=searchInput.value.trim();resetAndLoad();},250);});
document.querySelector("#clear-filters").addEventListener("click",()=>{state.manufacturer="";state.category="";state.search="";manufacturerSelect.value="";categorySelect.value="";searchInput.value="";renderCategoryHero();resetAndLoad();});
loadMoreButton.addEventListener("click",()=>loadProducts({append:true}));
await loadManufacturers();renderCategoryHero();await loadProducts();