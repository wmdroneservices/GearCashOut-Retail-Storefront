import { createSupabaseClient } from "./supabase-client.js";
import { STOREFRONT_KEY } from "./config.js";

const supabase = await createSupabaseClient();

async function loadManufacturers() {
  const { data, error } = await supabase.rpc("public_storefront_manufacturers", { p_store_key: STOREFRONT_KEY });
  if (error) throw error;

  document.querySelector("#manufacturer-count").textContent = data.length;
  document.querySelector("#catalogue-count").textContent = data.reduce((sum, row) => sum + Number(row.product_count || 0), 0).toLocaleString();

  const grid = document.querySelector("#manufacturer-grid");
  grid.innerHTML = data.filter(row => row.visible).map(row => {
    const href = "shop.html?manufacturer=" + encodeURIComponent(row.manufacturer);
    return `<a class="manufacturer-card" href="${href}"><span><strong>${escapeHtml(row.manufacturer)}</strong><small>${row.product_count} products</small></span><span>→</span></a>`;
  }).join("");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

loadManufacturers().catch(error => {
  console.error(error);
  document.querySelector("#manufacturer-grid").innerHTML = "<p>Catalogue connection could not be loaded.</p>";
});
