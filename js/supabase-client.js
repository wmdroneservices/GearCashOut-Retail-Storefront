import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "./config.js";

export async function createSupabaseClient() {
  const { createClient } = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm");
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true }
  });
}
