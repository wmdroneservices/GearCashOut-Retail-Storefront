import { createSupabaseClient } from "./supabase-client.js";
import { STOREFRONT_KEY, SUPABASE_URL } from "./config.js";

const supabase=await createSupabaseClient();
const listingId=new URLSearchParams(location.search).get("listing");
const root=document.querySelector("#product-detail");
const breadcrumb=document.querySelector("#breadcrumb-product");

function escapeHtml(v){
  return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

function money(value){
  return "£"+Number(value||0).toFixed(2);
}

async function loadMedia(){
  const response=await fetch(SUPABASE_URL+"/functions/v1/public-listing-media?listing_id="+encodeURIComponent(listingId));
  if(!response.ok) throw new Error("Listing media could not be loaded");
  const payload=await response.json();
  return Array.isArray(payload?.images)?payload.images.map(image=>image.url).filter(Boolean):[];
}

function renderGallery(images,title){
  if(!images.length){
    return '<div class="product-gallery-empty">LISTING PHOTOS<br><span>No public photographs have been selected for this listing.</span></div>';
  }
  return '<div class="product-gallery">'+
    '<div class="product-main-image"><img id="product-main-image" src="'+escapeHtml(images[0])+'" alt="'+escapeHtml(title)+'"></div>'+
    (images.length>1?'<div class="product-thumbnails">'+images.map((url,i)=>
      '<button class="product-thumb'+(i===0?' active':'')+'" type="button" data-image="'+escapeHtml(url)+'" aria-label="View photograph '+(i+1)+'"><img src="'+escapeHtml(url)+'" alt=""></button>'
    ).join("")+'</div>':'')+
  '</div>';
}

function bindGallery(){
  const main=document.querySelector("#product-main-image");
  document.querySelectorAll(".product-thumb").forEach(button=>{
    button.addEventListener("click",()=>{
      if(!main) return;
      main.src=button.dataset.image||main.src;
      document.querySelectorAll(".product-thumb").forEach(item=>item.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

if(!listingId){
  root.innerHTML='<div class="product-not-found"><p class="eyebrow">PRODUCT</p><h1>Product not found.</h1><a class="secondary-button" href="shop.html">Return to shop</a></div>';
}else{
  try{
    const {data,error}=await supabase.rpc("public_storefront_listing",{p_store_key:STOREFRONT_KEY,p_listing_id:listingId});
    if(error) throw error;
    const row=data?.[0];
    if(!row){
      root.innerHTML='<div class="product-not-found"><p class="eyebrow">LISTING UNAVAILABLE</p><h1>This product is no longer available.</h1><a class="secondary-button" href="shop.html">Return to shop</a></div>';
    }else{
      const title=row.listing_title||[row.manufacturer,row.model,row.package_name].filter(Boolean).join(" ");
      breadcrumb.textContent=title;
      let images=[];
      try{ images=await loadMedia(); }catch(error){ console.error(error); }
      if(!images.length&&row.hero_image_url) images=[row.hero_image_url];

      root.innerHTML=
        '<div class="product-detail-grid">'+
          renderGallery(images,title)+
          '<article class="product-info">'+
            '<p class="eyebrow">LIVE STOCK</p>'+
            '<h1>'+escapeHtml(title)+'</h1>'+
            '<div class="product-condition">'+escapeHtml(row.condition_grade||"Used equipment")+'</div>'+
            '<div class="product-price">'+money(row.asking_price)+'</div>'+
            '<div class="product-availability">IN STOCK</div>'+
            '<div class="product-copy">'+
              (row.product_description?'<p>'+escapeHtml(row.product_description)+'</p>':'')+
              (row.listing_notes?'<p>'+escapeHtml(row.listing_notes)+'</p>':'')+
            '</div>'+
            '<dl class="product-specs">'+
              '<div><dt>Manufacturer</dt><dd>'+escapeHtml(row.manufacturer||"—")+'</dd></div>'+
              '<div><dt>Model</dt><dd>'+escapeHtml(row.model||"—")+'</dd></div>'+
              '<div><dt>Package</dt><dd>'+escapeHtml(row.package_name||"—")+'</dd></div>'+
              (row.postage_packing!==null&&row.postage_packing!==undefined?'<div><dt>Postage & packing</dt><dd>'+money(row.postage_packing)+'</dd></div>':'')+
            '</dl>'+
            '<div class="product-status-note">This item is published from the central GearCashOut inventory and is currently available on the website.</div>'+
            '<a class="secondary-button product-back-link" href="shop.html">← Continue shopping</a>'+
          '</article>'+
        '</div>';
      bindGallery();
    }
  }catch(error){
    console.error(error);
    root.innerHTML='<div class="product-not-found"><p class="eyebrow">ERROR</p><h1>We could not load this product.</h1><a class="secondary-button" href="shop.html">Return to shop</a></div>';
  }
}
