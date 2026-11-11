import { supabase } from "./database/database.js"
async function addBack(nome, preco) {
    if(!nome || !preco){
        return error
    }
    const {data, error} = await supabase
    .from('products')
    .insert({nome: nome, preco:Number(preco)})

    if(error){
        return error
    }
    return "Dado inserido com sucesso"
}
async function getBack(params) {
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
export { addBack, getBack }