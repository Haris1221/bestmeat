'use client'
import { useState, useEffect } from 'react';
import api from '../../../page/api/api/index'
import Image from 'next/image';
import logo from '../../../public/images/logo.png'
import cart from '../../../public/images/cart.png'
import search from '../../../public/images/search.png'
import Link from 'next/link';
import insta from '../../../public/images/insta.png'
import twit from '../../../public/images/twit.png'
import face from '../../../public/images/face.png'
import mail from '../../../public/images/mail.png'

export default function page({params}) {
    const [items, setItems] = useState([])
    const [quantity, setQuantity] = useState(1)

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        };
    
        const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const addToCart = () => {
        console.log(`Added ${quantity} ${items.name} to cart`);
        }
        const calculateTotalPrice = () => {
            return (items.price * quantity).toFixed(2); 
        }
    useEffect(() => {
        async function retrieveItems() {
            const data = await api.retrieveData(params.food);
            setItems(data[0]);
            console.log(data[0])
        }

        retrieveItems();
        }, []);
    return (
    <div className='main'>
            <div className='nav'>
                <div className='logodiv'>
                    <Image className='logo' src={logo} alt=''></Image>
                </div>
                <div className='input'>
                    <Image className='cart' src={cart} alt=''></Image>
                    <div className='searchdiv'>
                        <Image  className='searchimg' src={search} alt=''></Image>
                        <input className='se' placeholder='Search'></input>
                    </div>
                </div>
            </div>
            <div className='navlinks'>
            <Link href='home'>Home</Link> 
                <Link href='shop'>Shop</Link> 
                <p>Recommended</p>
            </div>
    <div className='food flex justify-end '>
        <Image className='foodimg'
        src={items.image}
        width={700}
        height={700}
        alt=''
        />
        <div className='foodDet'>
            <div className='nameandprice'>
            <p>{items.fullname}</p>
            <p>CAD$ {items.price}</p>
            <div className='quan'>
            <p>Quantity</p>
            <button className='up' onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button className='up' onClick={incrementQuantity}>+</button>
            </div>
            <div className='descdiv'>
            <p className='taag'>Description</p>
            <p className='desc1'>{items.description}</p>
            </div>
            </div>
            <button className='cartButton' onClick={addToCart}>ADD TO CART $CAD{calculateTotalPrice()}</button>
        </div>
    </div>
    <div className='footer'>
                    <div className='split'>
                        <div className='info'>
                            <Image className='pic' src={logo} alt=''></Image>
                        <div className='navlinks2'>
                            <p className='tag'>Home</p>
                            <p className='tag'>Shop</p>
                            <p className='tag'>Recommended</p>
                        </div>
                    </div>
                        <div className='socials'>
                            <Image src={insta} className='soc' alt=''></Image>
                            <Image src={twit} className='soc' alt=''></Image>
                            <Image src={face} className='soc' alt=''></Image>
                            <Image src={mail} className='soc' alt=''></Image>
                        </div>
                    </div>
                </div>
    </div>
  )
}
