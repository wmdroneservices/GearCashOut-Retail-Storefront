import { createSupabaseClient } from "./supabase-client.js";
import { STOREFRONT_KEY, PAGE_SIZE } from "./config.js";

const supabase = await createSupabaseClient();
const params = new URLSearchParams(location.search);
const state = {
  manufacturer: params.get("manufacturer") || "",
  category: "",
  search: "",
  offset: 0,
  loading: false,
  finished: false,
  categories: new Set()
};

const manufacturerSelect = document.querySelector("#manufacturer-select");
const categorySelect = document.querySelector("#category-select");
const searchInput = document.querySelector("#search-input");
const productGrid = document.querySelector("#product-grid");
const summary = document.querySelector("#result-summary");
const loadMoreButton = document.querySelector("#load-more");

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

async function loadManufacturers() {
  const { data, error } = await supabase.rpc("public_storefront_manufacturers", { p_store_key: STOREFRONT_KEY });
  if (error) throw error;
  for (const row of data.filter(row => row.visible)) {
    manufacturerSelect.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(row.manufacturer)}">${escapeHtml(row.manufacturer)} (${row.product_count})</option>`);
  }
  manufacturerSelect.value = state.manufacturer;
}

function addCategories(rows) {
  rows.forEach(row => {
    const category = row.main_category || row.category;
    if (category) state.categories.add(category);
  });
  const current = categorySelect.value;
  categorySelect.innerHTML = '<option value="">All categories</option>' + [...state.categories].sort().map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  categorySelect.value = current;
}

function renderRows(rows, append) {
  if (!append) productGrid.innerHTML = "";
  productGrid.insertAdjacentHTML("beforeend", rows.map(row => {
    const title = [row.manufacturer,row.model,row.package_name].filter(Boolean).join(" ");
    const image = row.hero_image_url || row.manufacturer_image_url;
    const availability = Number(row.available_units || 0);
    return `<article class="product-card">
      <div class="product-image" ${image ? `style="background-image:url('${escapeAttribute(image)}')"` : ""}>${image ? "" : "Product image pending"}</div>
      <div class="product-meta">${escapeHtml(row.main_category || row.category || "Catalogue")}</div>
      <h2>${escapeHtml(title || "Unnamed product")}</h2>
      <div class="product-meta">${escapeHtml(row.product_type || "")}</div>
      <div class="availability ${availability > 0 ? "available" : "unavailable"}">${availability > 0 ? `${availability} available for sale` : "Catalogue item — availability pending"}</div>
    </article>`;
  }).join(""));
}

function escapeAttribute(value) {
  return String(value ?? "").replace(/['"()\\]/g, "");
}

async function loadProducts({ append=false }={}) {
  if (state.loading || state.finished && append) return;
  state.loading = true;
  loadMoreButton.disabled = true;
  summary.textContent = "Loading products…";

  const { data, error } = await supabase.rpc("public_storefront_catalog", {
    p_store_key: STOREFRONT_KEY,
    p_manufacturer: state.manufacturer || null,
    p_category: state.category || null,
    p_search: state.search || null,
    p_limit: PAGE_SIZE,
    p_offset: state.offset
  });

  state.loading = false;
  if (error) {
    console.error(error);
    summary.textContent = "Catalogue could not be loaded.";
    loadMoreButton.disabled = false;
    return;
  }

  addCategories(data);
  renderRows(data, append);
  state.offset += data.length;
  state.finished = data.length < PAGE_SIZE;
  summary.textContent = `${state.offset.toLocaleString()} products loaded from the central catalogue`;
  loadMoreButton.hidden = state.finished;
  loadMoreButton.disabled = false;
}

function resetAndLoad() {
  state.offset = 0;
  state.finished = false;
  loadProducts();
}

manufacturerSelect.addEventListener("change", () => {
  state.manufacturer = manufacturerSelect.value;
  resetAndLoad();
});
categorySelect.addEventListener("change", () => {
  state.category = categorySelect.value;
  resetAndLoad();
});
let searchTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.search = searchInput.value.trim();
    resetAndLoad();
  }, 250);
});
document.querySelector("#clear-filters").addEventListener("click", () => {
  state.manufacturer = "";
  state.category = "";
  state.search = "";
  manufacturerSelect.value = "";
  categorySelect.value = "";
  searchInput.value = "";
  resetAndLoad();
});
loadMoreButton.addEventListener("click", () => loadProducts({ append:true }));

await loadManufacturers();
await loadProducts();
