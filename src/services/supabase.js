import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(supabaseUrl, import.meta.env.VITE_SUPABASE_KEY);

export default supabase;
export { supabaseUrl };
