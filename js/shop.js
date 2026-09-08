import { createSupabaseClient } from "./supabase-client.js";
import { STOREFRONT_KEY, SUPABASE_URL } from "./config.js";
import { imageFor } from "./category-heroes.js";

const supabase=await createSupabaseClient();
const params=new URLSearchParams(location.search);

let CATALOGUE_CATEGORIES=[];

const state={
  category:params.get("category")||"",
  manufacturer:params.get("manufacturer")||"",
  model:params.get("model")||"",
  search:params.get("search")||""
};

const manufacturerSelect=document.querySelector("#manufacturer-select");
const categorySelect=document.querySelector("#category-select");
const searchInput=document.querySelector("#search-input");
const productGrid=document.querySelector("#product-grid");
const summary=document.querySelector("#result-summary");
const loadMoreButton=document.querySelector("#load-more");
const resultsEyebrow=document.querySelector("#results-eyebrow");
const resultsTitle=document.querySelector("#results-title");
const categoryHero=document.querySelector("#category-hero");
const categoryHeroTitle=document.querySelector("#category-hero-title");
const categoryHeroImage=document.querySelector("#category-hero-image");
const categoryHeroDescription=document.querySelector("#category-hero-description");

function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function cardImage(id,alt,image=null){
  if(!image?.image){
    return '<div class="product-image hierarchy-image image-curation-pending"><div class="curation-label">IMAGE CURATION<br><span>Approved image pending</span></div></div>';
  }
  return '<div class="product-image hierarchy-image has-image"><img id="'+id+'" src="'+escapeHtml(image.image)+'" alt="'+escapeHtml(image.alt||alt)+'" loading="lazy"></div>';
}

function categoryHeroFor(category){return imageFor({category});}
function manufacturerHeroFor(category,manufacturer){return imageFor({category,manufacturer});}
function modelHeroFor(category,manufacturer,model){return imageFor({category,manufacturer,model});}

function setHero({title,description,fallback}){
  categoryHeroTitle.textContent=title;
  categoryHeroDescription.textContent=description;
  categoryHeroImage.removeAttribute("src");
  if(!fallback?.image){categoryHero.hidden=true;return;}
  categoryHero.hidden=false;
  categoryHeroImage.src=fallback.image;
  categoryHeroImage.alt=fallback.alt||title;
}

function clearHero(){categoryHero.hidden=true;categoryHeroImage.removeAttribute("src");}

function populateCategorySelect(){
  categorySelect.innerHTML='<option value="">All categories</option>'+CATALOGUE_CATEGORIES.map(c=>'<option value="'+escapeHtml(c)+'">'+escapeHtml(c)+'</option>').join("");
  categorySelect.value=state.category;
}

async function loadCategories(){
  const {data,error}=await supabase.rpc("public_storefront_categories",{p_store_key:STOREFRONT_KEY});
  if(error) throw error;
  CATALOGUE_CATEGORIES=(data||[]).map(row=>row.category).filter(Boolean);
}

async function loadManufacturers(){
  const {data,error}=await supabase.rpc("public_storefront_manufacturers",{p_store_key:STOREFRONT_KEY});
  if(error) throw error;
  manufacturerSelect.innerHTML='<option value="">All manufacturers</option>';
  data.filter(r=>r.visible).forEach(r=>manufacturerSelect.insertAdjacentHTML("beforeend",'<option value="'+escapeHtml(r.manufacturer)+'">'+escapeHtml(r.manufacturer)+'</option>'));
  manufacturerSelect.value=state.manufacturer;
}

function renderCategories(){
  clearHero();
  resultsEyebrow.textContent="ALL EQUIPMENT";
  resultsTitle.textContent="Browse categories";
  summary.textContent="Choose the type of equipment you want to browse";
  loadMoreButton.hidden=true;
  productGrid.innerHTML=CATALOGUE_CATEGORIES.map((category,i)=>{
    const id="category-image-"+i,hero=categoryHeroFor(category);
    return '<a class="product-card hierarchy-card" href="shop.html?category='+encodeURIComponent(category)+'">'+
      cardImage(id,hero?.alt||category,hero)+
      '<div class="product-meta">CATEGORY</div><h2>'+escapeHtml(category)+'</h2>'+
      '<div class="availability available">Browse '+escapeHtml(category)+' <span>→</span></div></a>';
  }).join("");
}

async function renderManufacturers(){
  const hero=categoryHeroFor(state.category);
  setHero({title:state.category,description:"Choose a manufacturer to browse "+state.category.toLowerCase()+".",fallback:hero});
  resultsEyebrow.textContent="CATEGORY";
  resultsTitle.textContent=state.category+" manufacturers";
  summary.textContent="Choose a manufacturer";
  loadMoreButton.hidden=true;
  productGrid.innerHTML='<div class="catalogue-loading">Loading manufacturers…</div>';
  const {data,error}=await supabase.rpc("public_storefront_category_manufacturers",{p_store_key:STOREFRONT_KEY,p_category:state.category});
  if(error){console.error(error);summary.textContent="Manufacturers could not be loaded.";return;}
  productGrid.innerHTML=data.map((row,i)=>{
    const id="manufacturer-image-"+i;
    const hero=manufacturerHeroFor(state.category,row.manufacturer);
    return '<a class="product-card hierarchy-card" href="shop.html?category='+encodeURIComponent(state.category)+'&manufacturer='+encodeURIComponent(row.manufacturer)+'">'+
      cardImage(id,row.manufacturer,hero)+
      '<div class="product-meta">MANUFACTURER</div><h2>'+escapeHtml(row.manufacturer)+'</h2>'+
      '<div class="product-meta">'+escapeHtml(row.representative_model||state.category)+'</div>'+
      '<div class="availability available">Browse '+escapeHtml(row.manufacturer)+' <span>→</span></div></a>';
  }).join("");
}

async function renderModels(){
  setHero({title:state.manufacturer+" "+state.category,description:"Choose a model. The next step shows the actual units currently in stock on this website.",fallback:manufacturerHeroFor(state.category,state.manufacturer)});
  resultsEyebrow.textContent="MANUFACTURER";
  resultsTitle.textContent=state.manufacturer+" "+state.category;
  summary.textContent="Choose a model";
  loadMoreButton.hidden=true;
  productGrid.innerHTML='<div class="catalogue-loading">Loading models…</div>';
  const {data,error}=await supabase.rpc("public_storefront_models",{p_store_key:STOREFRONT_KEY,p_category:state.category,p_manufacturer:state.manufacturer});
  if(error){console.error(error);summary.textContent="Models could not be loaded.";return;}
  productGrid.innerHTML=data.map((row,i)=>{
    const id="model-image-"+i;
    const hero=modelHeroFor(state.category,state.manufacturer,row.model);
    return '<a class="product-card hierarchy-card" href="shop.html?category='+encodeURIComponent(state.category)+'&manufacturer='+encodeURIComponent(state.manufacturer)+'&model='+encodeURIComponent(row.model)+'">'+
      cardImage(id,state.manufacturer+" "+row.model,hero)+
      '<div class="product-meta">MODEL</div><h2>'+escapeHtml(row.model)+'</h2>'+
      '<div class="availability available">View stock <span>→</span></div></a>';
  }).join("");
}

async function loadStockImages(rows){
  await Promise.all(rows.map(async(row,i)=>{
    const target=document.querySelector("#stock-media-"+i);
    if(!target) return;
    try{
      const response=await fetch(SUPABASE_URL+"/functions/v1/public-listing-media?listing_id="+encodeURIComponent(row.listing_id));
      if(!response.ok) throw new Error("Media request failed");
      const payload=await response.json();
      const first=payload?.images?.[0]?.url||row.hero_image_url||null;
      if(!first){
        target.innerHTML='<div class="curation-label">LISTING PHOTOS<br><span>No public photo available</span></div>';
        return;
      }
      target.classList.remove("image-curation-pending");
      target.classList.add("has-image");
      target.innerHTML='<img src="'+escapeHtml(first)+'" alt="'+escapeHtml(row.listing_title||[row.manufacturer,row.model].filter(Boolean).join(" "))+'">';
    }catch(error){
      console.error(error);
      target.innerHTML='<div class="curation-label">LISTING PHOTOS<br><span>Photo unavailable</span></div>';
    }
  }));
}

async function renderStock(){
  setHero({title:state.manufacturer+" "+state.model,description:"These are the actual units currently published and available on this website.",fallback:modelHeroFor(state.category,state.manufacturer,state.model)});
  resultsEyebrow.textContent="IN STOCK";
  resultsTitle.textContent=state.manufacturer+" "+state.model;
  loadMoreButton.hidden=true;
  productGrid.innerHTML='<div class="catalogue-loading">Checking live stock…</div>';
  const {data,error}=await supabase.rpc("public_storefront_stock",{p_store_key:STOREFRONT_KEY,p_category:state.category,p_manufacturer:state.manufacturer,p_model:state.model});
  if(error){console.error(error);summary.textContent="Stock could not be loaded.";return;}
  if(!data.length){
    summary.textContent="No units are currently published for sale.";
    productGrid.innerHTML='<div class="catalogue-empty">There are currently no '+escapeHtml(state.manufacturer+" "+state.model)+' units published for sale on this website.</div>';
    return;
  }
  summary.textContent=data.length===1?"1 unit currently in stock":data.length+" units currently in stock";
  productGrid.innerHTML=data.map((row,i)=>{
    const title=row.listing_title||[row.manufacturer,row.model,row.package_name].filter(Boolean).join(" ");
    return '<a class="product-card stock-card" href="product.html?listing='+encodeURIComponent(row.listing_id)+'">'+
      '<div id="stock-media-'+i+'" class="product-image hierarchy-image image-curation-pending"><div class="curation-label">LISTING PHOTOS<br><span>Loading…</span></div></div>'+
      '<div class="product-meta">'+escapeHtml(row.condition_grade||"Used equipment")+'</div>'+
      '<h2>'+escapeHtml(title)+'</h2>'+
      '<div class="product-meta">'+escapeHtml(row.package_name||"")+'</div>'+
      '<div class="stock-price">£'+Number(row.asking_price||0).toFixed(2)+'</div>'+
      '<div class="availability available">View product <span>→</span></div></a>';
  }).join("");
  void loadStockImages(data);
}

async function renderSearch(){
  clearHero();
  resultsEyebrow.textContent="SEARCH";
  resultsTitle.textContent="Search results";
  summary.textContent="Loading products…";
  const {data,error}=await supabase.rpc("public_storefront_catalog",{p_store_key:STOREFRONT_KEY,p_manufacturer:state.manufacturer||null,p_category:state.category||null,p_search:state.search,p_limit:120,p_offset:0});
  if(error){summary.textContent="Catalogue could not be loaded.";return;}
  loadMoreButton.hidden=true;
  productGrid.innerHTML=data.map((row,i)=>{
    const id="search-image-"+i;
    const query=[row.manufacturer,row.model,row.package_name].filter(Boolean).join(" ");
    const hero=row.hero_image_url?{image:row.hero_image_url,alt:query}:modelHeroFor(row.main_category||row.category,row.manufacturer,row.model);
    return '<article class="product-card">'+cardImage(id,state.manufacturer+" "+row.model,hero)+'<div class="product-meta">'+escapeHtml(row.main_category||row.category||"Catalogue")+'</div><h2>'+escapeHtml([row.manufacturer,row.model,row.package_name].filter(Boolean).join(" "))+'</h2><div class="availability '+(Number(row.available_units)>0?"available":"unavailable")+'">'+(Number(row.available_units)>0?"Available for sale":"Catalogue item")+'</div></article>';
  }).join("");
  summary.textContent=data.length+" matching catalogue products";
}

function render(){
  if(state.search){renderSearch();return;}
  if(!state.category){renderCategories();return;}
  if(!state.manufacturer){renderManufacturers();return;}
  if(!state.model){renderModels();return;}
  renderStock();
}

function navigate(){
  const q=new URLSearchParams();
  if(state.category)q.set("category",state.category);
  if(state.manufacturer)q.set("manufacturer",state.manufacturer);
  if(state.model)q.set("model",state.model);
  if(state.search)q.set("search",state.search);
  location.href="shop.html"+(q.toString()?"?"+q.toString():"");
}

manufacturerSelect.addEventListener("change",()=>{state.manufacturer=manufacturerSelect.value;state.model="";navigate();});
categorySelect.addEventListener("change",()=>{state.category=categorySelect.value;state.manufacturer="";state.model="";navigate();});
let timer;
searchInput.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(()=>{state.search=searchInput.value.trim();navigate();},350);});
document.querySelector("#clear-filters").addEventListener("click",()=>{state.category="";state.manufacturer="";state.model="";state.search="";navigate();});
loadMoreButton.hidden=true;

await loadCategories();
await loadManufacturers();
populateCategorySelect();
searchInput.value=state.search;
render();
