'use client'
import React from 'react'
import { useState } from 'react'
import $ from 'jquery'
import util from '../../../page/api/users/index'


export default function signup({setCheckUser}) {
  const [userInfo, setUserInfo] = useState({email: '', password: '', confirmPassword:''})

  function handleChange(evt){
    evt.preventDefault()
    setUserInfo({...userInfo, [evt.target.name]:evt.target.value})
  }
  function handleSubmitSignup(e){
    e.preventDefault();
    if(userInfo.password == userInfo.confirmPassword){
      (async function (){
        const habibisanidiot = await util.SignUp(userInfo.email, userInfo.password)
        setTimeout(()=>{window.location.replace('/home')},1000)
        console.log('clicked')
        }
    )()}else{
      $('.PDM').css('display','flex')
    }
}
  return (
    <div className='mainlogin'>
    <div className='formdiv'>
    <form className='form' onSubmit={handleSubmitSignup}>
      <h1>Sign Up</h1>
        <label>Email</label>
        <input type="text" onChange={handleChange} name='email' className='text text-black' />
        <label>Password</label>
        <input type="password" onChange={handleChange} name='password' className='text text-black' />
        <label>Confirm Password</label>
        <input type="password" onChange={handleChange} name='confirmPassword' className='text text-black' />
        <button className='click' type='submit'>Sign Up</button>
        <p className='PDM'>Password doesnt match</p>
      </form>
    </div>
        <button className='pass' onClick={()=> {setCheckUser(true)}}>Already Have Account</button>
    </div>
  )
}
