import signup from "@/app/Auth/SignUp/signup"
import supabase from ".."

async function getUser(){
    const { data: { user } } = await supabase.auth.getUser()
    return user
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


async function SignUp(email, password){
let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  })  
  return {data, error}
}

    async function providerSignUp(){
        
let { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
    }


export default {
    getUser,
    LogIn,
    LogOut,
    SignUp,
    providerSignUp
}