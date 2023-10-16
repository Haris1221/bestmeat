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
    const [i, setI] = useState(0)
    const [quantity, setQuantity] = useState(1)


    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        };
    
        const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

useEffect(()=> {
    async function retreiveCart(){
        const data = await api.readCart()
        setCartItem(data);
    }
    retreiveCart();
}, [i]);


    function onClick(e){
        e.preventDefault()
        $('.pop').toggle()
        console.log('click')
    }

    async function handleClick(e){
        const remove = await api.deleteFromCart(e.target.name)
        setI(1)
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
        {cartItem.length==0 ? <div className='div flex justify-center items-center text-black w-full'>No items</div>
            : 
            cartItem.filter((elem, i) => cartItem.findIndex((item) => item.name === elem.name) === i).map((elem, i) => {
                
            return <div className='popup bg-white z-20'>
            <Image key={i} 
        src={elem.image}
        width={70}
        height={50}
        alt='' 
    />
    <p className='cartt'>{elem.name}</p>
    <p className='cartt'>{elem.price * quantity}</p>
    <div className='quan'>
            <p className='qu text-xs'>Quantity</p>
            <button className='up' onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button className='up' onClick={incrementQuantity}>+</button>
    </div>
    <button name={elem.name} onClick={handleClick}>X</button>
        </div>
})}
        </div>
        </div>
    </div>
</div>
<div className='navlinks'>
    <Link href='/home'>Home</Link>
    <Link href='/shop'>Shop</Link> 
</div>
    </div>
    )
}
