'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import cart from '../../public/images/cart.png'
import search from '../../public/images/search.png'
import Link from 'next/link'
import api from '../../page/api/api/index';
import insta from '../../public/images/insta.png'
import twit from '../../public/images/twit.png'
import face from '../../public/images/face.png'
import mail from '../../public/images/mail.png'


export default function Page() {
  const [featuredData, setFeaturedData] = useState([])
  const [bothItems, setbothItems] = useState([])

    useEffect(()=> {
    async function fetchItems(){
        const data = await api.bothTables()
        setbothItems(data)
    }
    fetchItems()
  },[])
  
  useEffect(() => {
    async function fetchFeatured() {
        const data = await api.featured();
        setFeaturedData(data);
    }

    fetchFeatured();
    }, []);
  
  return (
  <div className='main'>
            <div className='contain'>
    {bothItems.map((elem, i) => {
        console.log(elem.image)
        return <div className='things'>
        <Link href={`shop/${elem.name}`}>
        <Image key={i} className='im'
        src={elem.image}
        width={100}
        height={500}
        alt='' 
    />
    </Link>
    <p className='te text-black '>$CAD {elem.price} <br/> {elem.fullname}</p>
    </div>
    })}
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
