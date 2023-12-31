'use client'
import { useState, useEffect } from 'react';
import api from '../../../page/api/api/index'
import util from '../../../page/api/cart/index'
import Image from 'next/image';
import logo from '../../../public/images/logo.png'
import insta from '../../../public/images/insta.png'
import twit from '../../../public/images/twit.png'
import face from '../../../public/images/face.png'
import mail from '../../../public/images/mail.png'

export default function page({params}) {
    const [items, setItems] = useState([])
    const [quantity, setQuantity] = useState(1)



    async function addToCart(item) {
        const add = await util.updateCart(item, quantity)
        setTimeout(()=>{
            window.location.reload()
        }, 100)
    }

        useEffect(()=> {
            async function fetchItems(){
                const data = await api.bothTables(params.food)
                const da = data.find(elem => {
                return elem.name == params.food
                })
                setItems(da)
        
            }
            fetchItems()
          },[])
    return (
    <div className='main'>
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
            <div className='descdiv'>
            <p className='taag'>Description</p>
            <p className='desc1'>{items.description}</p>
            </div>
            </div>
            <button className='cartButton' onClick={() => addToCart(items)}>ADD TO CART</button>
        </div>
    </div>
    <div className='footer'>
                    <div className='split'>
                        <div className='info'>
                            <Image className='pic' src={logo} alt=''></Image>
                        <div className='navlinks2'>
                            <p className='tag'>Home</p>
                            <p className='tag'>Shop</p>
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
