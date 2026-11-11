import { createClient } from '@supabase/supabase-js'
const supa_key = import.meta.env.VITE_SUPABASE_KEY
const supa_url = import.meta.env.VITE_SUPABASE_URL
console.log(supa_key, supa_url)
const supabase = createClient(supa_url, supa_key)
console.log(supabase)
export { supabase }