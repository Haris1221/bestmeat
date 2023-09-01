'use client'
import React from 'react'
import util from '../../../page/api/users/index'
import { useState } from 'react'

export default function Login({setCheckUser}) {
  const [userInfo, setUserInfo] = useState({email: '', password: ''})

  function handleSubmitLogin(evt){
    evt.preventDefault();
    (async function (){
    const habibisanidiot = await util.LogIn(userInfo.email, userInfo.password)
    setTimeout(()=>{window.location.replace('/home')},1000)
    console.log('logged in')
    }
)()
}      
function handleChange(evt){
  evt.preventDefault()
  setUserInfo({...userInfo, [evt.target.name]:evt.target.value})
}
return (
    <div className='mainlogin'>
    <div className='formdiv'>
      <form className='form' onSubmit={handleSubmitLogin}>
      <h1>Log In</h1>
        <label>Email</label>
        <input type="text" onChange={handleChange} name='email' className='text text-black' />
        <label>Password</label>
        <input type="password" onChange={handleChange} name='password' className='text text-black' />
        <button className='click' type='submit'>Log In</button>
        <button onClick={()=> {setCheckUser(false)}}>New User? Sign Up</button>
      </form>
    </div>
    </div>
  )
}
