import supabase from ".."
import api from '../users/index'

async function updateCart(item, quantity){
    const user = await api.getUser()
    for(let i = 1; i<=quantity; i++)
        {const random2 = await readCart()
        const random = [...random2, item]
        const { data, error } = await supabase
        .from('cart')
        .update({ shoppingcart: random})
        .eq('user_id', user.id)
        .select()}
}


async function readCart(){
    const user = await api.getUser()
    let { data: cart, error } = await supabase
    .from('cart')
    .select('shoppingcart')
    .eq('user_id', user.id)
    return cart[0].shoppingcart
}

async function deleteFromCart(name){
    const user = await api.getUser()
    const read = await readCart()
    const itemName = read.filter(elem => elem.name == name)
    const { data, error } = await supabase
    .from('cart')
    .update({ shoppingcart: itemName})
    .eq('user_id', id)
    .select()

}

async function deleteCart(id){
    const { data, error } = await supabase
    .from('cart')
    .update({ shoppingcart: []})
    .eq('user_id', id)
    .select()

}




export default {
    updateCart,
    deleteFromCart,
    deleteCart,
    readCart
}