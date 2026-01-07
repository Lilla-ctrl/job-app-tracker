import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_API;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
