import { createClient } from '@supabase/supabase-js'
const supa_key = "sb_publishable_GBOmHHld6rO29cFob9q8iA_Wk45xIHr"
const supa_url = "https://eezypuvohomzhtpkcsob.supabase.co"
const supabase = createClient(supa_url, supa_key)
export { supabase }