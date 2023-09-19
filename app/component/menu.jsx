'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import cart from '../../public/images/cart.png'
import search from '../../public/images/search.png'
import Link from 'next/link'
import $ from 'jquery'
import api from '../../page/api/cart/index'
import { useState, useEffect } from 'react'

export default function menu() {
    const [cartItem, setCartItem] = useState([]);

useEffect(()=> {
    async function retreiveCart(){
        const data = await api.readCart()
        setCartItem(data);
        console.log(cartItem)
    }
    retreiveCart();
}, []);


    function onClick(e){
        e.preventDefault()
        $('.popup').toggle()
    }

    return (
    <div>
    <div className='nav'>
    <div className='logodiv relative'>
        <Image className='logo' src={logo} alt=''></Image>
    </div>
    <div className='input'>
            <Image className='cart' onClick={onClick} src={cart} alt=''></Image>
        <div className='searchdiv'>
            <Image  className='searchimg' src={search} alt=''></Image>
            <input className='se' placeholder='Search'></input>
            <div className='pop'>
        {cartItem.map((elem, i) => {
            return <div className='popup bg-white z-20'>
    <div className='rows'>
            <Image key={i} 
        src={elem.image}
        width={70}
        height={50}
        alt='' 
    />
    <p className='cartt'>{elem.name}</p>
    <p className='cartt'>{elem.price}</p>
    </div>
        </div>
})}
        </div>
        </div>
    </div>
</div>
<div className='navlinks'>
    <Link href='/home'>Home</Link>
    <Link href='/shop'>Shop</Link> 
    <p>Recommended</p>
</div>
    </div>
    )
}
