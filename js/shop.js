import { createSupabaseClient } from "./supabase-client.js";
import { STOREFRONT_KEY } from "./config.js";
import { CATEGORY_HEROES } from "./category-heroes.js";

const supabase=await createSupabaseClient();
const params=new URLSearchParams(location.search);

const CATALOGUE_CATEGORIES=["Cameras","Lenses","Drones","Camera Accessories","Video Cameras","Lighting","Action Cameras","Video Production Equipment","Audio","Supports & Stabilisation","Drone Accessories","Power & Batteries","Studio Equipment","Other Equipment"];

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
function cardImage(id,alt){return '<div class="product-image hierarchy-image"><div class="image-loading">Finding relevant image…</div><img id="'+id+'" alt="'+escapeHtml(alt)+'" hidden loading="lazy"></div>';}
function commonsUrl(query){return "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch="+encodeURIComponent(query)+"&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=900&format=json&origin=*";}

async function resolveImage(query,img,fallback){
  try{
    if(fallback){img.src=fallback;img.hidden=false;img.closest(".product-image")?.classList.add("has-image");return;}
    const json=await (await fetch(commonsUrl(query))).json();
    const page=Object.values(json?.query?.pages||{})[0];
    const url=page?.imageinfo?.[0]?.thumburl||page?.imageinfo?.[0]?.url;
    if(url){img.src=url;img.hidden=false;img.closest(".product-image")?.classList.add("has-image");}
  }catch(e){console.warn("Hero image lookup failed",query,e);}
  finally{img.closest(".product-image")?.querySelector(".image-loading")?.remove();}
}

function categoryHeroFor(category){return CATEGORY_HEROES[category]||null;}

function setHero({title,description,query,fallback}){
  categoryHero.hidden=false;
  categoryHeroTitle.textContent=title;
  categoryHeroDescription.textContent=description;
  categoryHeroImage.removeAttribute("src");
  categoryHeroImage.alt=title;
  if(fallback){categoryHeroImage.src=fallback;return;}
  resolveImage(query,categoryHeroImage,null);
}

function clearHero(){categoryHero.hidden=true;categoryHeroImage.removeAttribute("src");}

function populateCategorySelect(){
  categorySelect.innerHTML='<option value="">All categories</option>'+CATALOGUE_CATEGORIES.map(c=>'<option value="'+escapeHtml(c)+'">'+escapeHtml(c)+'</option>').join("");
  categorySelect.value=state.category;
}

async function loadManufacturers(){
  const {data,error}=await supabase.rpc("public_storefront_manufacturers",{p_store_key:STOREFRONT_KEY});
  if(error) throw error;
  manufacturerSelect.innerHTML='<option value="">All manufacturers</option>';
  data.filter(r=>r.visible).forEach(r=>manufacturerSelect.insertAdjacentHTML("beforeend",'<option value="'+escapeHtml(r.manufacturer)+'">'+escapeHtml(r.manufacturer)+'</option>'));
  manufacturerSelect.value=state.manufacturer;
}

function bindCardImages(items){
  items.forEach(item=>{
    const img=document.querySelector("#"+item.id);
    if(img)resolveImage(item.query,img,item.fallback||null);
  });
}

function renderCategories(){
  clearHero();
  resultsEyebrow.textContent="ALL EQUIPMENT";
  resultsTitle.textContent="Browse categories";
  summary.textContent="Choose the type of equipment you want to browse";
  loadMoreButton.hidden=true;
  const imageJobs=[];
  productGrid.innerHTML=CATALOGUE_CATEGORIES.map((category,i)=>{
    const id="category-image-"+i,hero=categoryHeroFor(category);
    imageJobs.push({id,query:category+" professional equipment product on white background",fallback:hero?.image});
    return '<a class="product-card hierarchy-card" href="shop.html?category='+encodeURIComponent(category)+'">'+
      cardImage(id,hero?.alt||category)+
      '<div class="product-meta">CATEGORY</div><h2>'+escapeHtml(category)+'</h2>'+
      '<div class="availability available">Browse '+escapeHtml(category)+' <span>→</span></div></a>';
  }).join("");
  bindCardImages(imageJobs);
}

async function renderManufacturers(){
  const hero=categoryHeroFor(state.category);
  setHero({title:state.category,description:"Choose a manufacturer to browse "+state.category.toLowerCase()+".",query:state.category+" professional equipment",fallback:hero?.image});
  resultsEyebrow.textContent="CATEGORY";
  resultsTitle.textContent=state.category+" manufacturers";
  summary.textContent="Choose a manufacturer";
  loadMoreButton.hidden=true;
  productGrid.innerHTML='<div class="catalogue-loading">Loading manufacturers…</div>';
  const {data,error}=await supabase.rpc("public_storefront_category_manufacturers",{p_store_key:STOREFRONT_KEY,p_category:state.category});
  if(error){console.error(error);summary.textContent="Manufacturers could not be loaded.";return;}
  const imageJobs=[];
  productGrid.innerHTML=data.map((row,i)=>{
    const id="manufacturer-image-"+i;
    const query=[row.manufacturer,row.representative_model,state.category].filter(Boolean).join(" ");
    imageJobs.push({id,query});
    return '<a class="product-card hierarchy-card" href="shop.html?category='+encodeURIComponent(state.category)+'&manufacturer='+encodeURIComponent(row.manufacturer)+'">'+
      cardImage(id,row.manufacturer)+
      '<div class="product-meta">MANUFACTURER</div><h2>'+escapeHtml(row.manufacturer)+'</h2>'+
      '<div class="product-meta">'+escapeHtml(row.representative_model||state.category)+'</div>'+
      '<div class="availability available">Browse '+escapeHtml(row.manufacturer)+' <span>→</span></div></a>';
  }).join("");
  bindCardImages(imageJobs);
}

async function renderModels(){
  setHero({title:state.manufacturer+" "+state.category,description:"Choose a model. The next step shows the actual units currently in stock on this website.",query:state.manufacturer+" "+state.category});
  resultsEyebrow.textContent="MANUFACTURER";
  resultsTitle.textContent=state.manufacturer+" "+state.category;
  summary.textContent="Choose a model";
  loadMoreButton.hidden=true;
  productGrid.innerHTML='<div class="catalogue-loading">Loading models…</div>';
  const {data,error}=await supabase.rpc("public_storefront_models",{p_store_key:STOREFRONT_KEY,p_category:state.category,p_manufacturer:state.manufacturer});
  if(error){console.error(error);summary.textContent="Models could not be loaded.";return;}
  const imageJobs=[];
  productGrid.innerHTML=data.map((row,i)=>{
    const id="model-image-"+i,query=state.manufacturer+" "+row.model;
    imageJobs.push({id,query});
    return '<a class="product-card hierarchy-card" href="shop.html?category='+encodeURIComponent(state.category)+'&manufacturer='+encodeURIComponent(state.manufacturer)+'&model='+encodeURIComponent(row.model)+'">'+
      cardImage(id,query)+
      '<div class="product-meta">MODEL</div><h2>'+escapeHtml(row.model)+'</h2>'+
      '<div class="availability available">View stock <span>→</span></div></a>';
  }).join("");
  bindCardImages(imageJobs);
}

async function renderStock(){
  setHero({title:state.manufacturer+" "+state.model,description:"These are the actual units currently published and available on this website.",query:state.manufacturer+" "+state.model});
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
  const imageJobs=[];
  productGrid.innerHTML=data.map((row,i)=>{
    const id="stock-image-"+i,query=row.manufacturer+" "+row.model;
    imageJobs.push({id,query,fallback:row.hero_image_url});
    return '<article class="product-card stock-card">'+
      cardImage(id,query)+
      '<div class="product-meta">'+escapeHtml(row.condition_grade||"Used equipment")+'</div>'+
      '<h2>'+escapeHtml(row.listing_title||[row.manufacturer,row.model,row.package_name].filter(Boolean).join(" "))+'</h2>'+
      '<div class="product-meta">'+escapeHtml(row.package_name||"")+'</div>'+
      '<div class="stock-price">£'+Number(row.asking_price||0).toFixed(2)+'</div>'+
      '<div class="availability available">In stock</div></article>';
  }).join("");
  bindCardImages(imageJobs);
}

async function renderSearch(){
  clearHero();
  resultsEyebrow.textContent="SEARCH";
  resultsTitle.textContent="Search results";
  summary.textContent="Loading products…";
  const {data,error}=await supabase.rpc("public_storefront_catalog",{p_store_key:STOREFRONT_KEY,p_manufacturer:state.manufacturer||null,p_category:state.category||null,p_search:state.search,p_limit:120,p_offset:0});
  if(error){summary.textContent="Catalogue could not be loaded.";return;}
  loadMoreButton.hidden=true;
  const jobs=[];
  productGrid.innerHTML=data.map((row,i)=>{
    const id="search-image-"+i,query=[row.manufacturer,row.model,row.package_name].filter(Boolean).join(" ");
    jobs.push({id,query,fallback:row.hero_image_url});
    return '<article class="product-card">'+cardImage(id,query)+'<div class="product-meta">'+escapeHtml(row.main_category||row.category||"Catalogue")+'</div><h2>'+escapeHtml([row.manufacturer,row.model,row.package_name].filter(Boolean).join(" "))+'</h2><div class="availability '+(Number(row.available_units)>0?"available":"unavailable")+'">'+(Number(row.available_units)>0?"Available for sale":"Catalogue item")+'</div></article>';
  }).join("");
  summary.textContent=data.length+" matching catalogue products";
  bindCardImages(jobs);
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

await loadManufacturers();
populateCategorySelect();
searchInput.value=state.search;
render();
