import { supabase } from "./database/database.js"
async function getBack(params) {
    console.log(params)
    if (!params) {
        const { data, error } = await supabase
            .from('products')
            .select('*')
        if (!data) {
            return error
        }
        return data
    } else {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', params)
        if (!data) {
            return error
        }
        return data
    }
}
export { getBack }