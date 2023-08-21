import supabase from ".."

async function getUser(){
    const { data: { user } } = await supabase.auth.getUser()
}

async function LogIn(email, password){
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
}

async function LogOut(){
    let { error } = await supabase.auth.signOut()
}

async function SingUp(email, password){
    let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    })
}


export default {
    getUser,
    LogIn,
    LogOut,
    SingUp 
}