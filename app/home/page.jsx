'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import header from '../../public/images/header.png'
import insta from '../../public/images/insta.png'
import twit from '../../public/images/twit.png'
import face from '../../public/images/face.png'
import mail from '../../public/images/mail.png'
import beef from '../../public/images/beef.png'
import lamb from '../../public/images/lamb.png'
import lambChop from '../../public/images/lambChop.png'
import steak from '../../public/images/steak.png'
import chicken from '../../public/images/chicken.png'
import wings from '../../public/images/wings.png'
import util from '../../page/api/users/index'
import api from '../../page/api/api/index';
import Link from 'next/link'





export default function page() {
    const [user, setUser] = useState({});
    const [meatData, setMeatData] = useState([])
    const [meatobj, setMeatObj] = useState({
        lamb:{},
        sheep:{},
        cow:{},
        lampChop:{},
        steak:{},
        chicken:{},
        wings:{},
        beef:{},
    })
    const [featuredData, setFeaturedData] = useState([])
    const [featuredObj, setFeaturedObj] = useState({
        mixed:{},
        beef:{},
        chicken:{},
        fried:{},
        lamb:{},
        pick:{},
    })


    useEffect(()=> {
        async function fetch(){
            const user1 = await util.getUser()
            setUser(user1)
        }fetch();
    },[])

    useEffect(() => {
        async function fetchData() {
            const data = await api.meat();
            setMeatData(data);
            setMeatObj({...meatobj,lamb:{...data[0]}, sheep:{...data[1]}, cow:{...data[2]}, beef:{...data[7]}, lampChop:{...data[3]}, steak:{...data[4]}, chicken:{...data[5]}, wings:{...data[6]}})
            console.log(meatobj.beef.name)
        }
    
        fetchData();
        }, []);

    useEffect(() => {
        async function fetchFeatured() {
            const data = await api.featured();
            setFeaturedData(data);
            setFeaturedObj({...featuredObj, mixed:{...data[0]}, beef:{...data[1]}, chicken:{...data[2]}, fried:{...data[3]}, lamb:{...data[4]}, pick:{...data[5]}})
        }
    
        fetchFeatured();
        }, []);
    
        
    

    return (
        <div className='main'>
            <div className='header'>
    <div className='left'>UNDER CONSTRUCTION</div>
    <Image src={header} className='right' alt=''></Image>
</div>
            <div className='section2'>
                <h1>Recommended</h1>
                <div className='container'>
                    <div className='lleft'>
                        <div className='bigbox'>
                            <Image className='lamb' src={lamb}></Image>
                            <div className='price'>
                            {meatobj.lamb.name}: &nbsp;
                            CAD${meatobj.lamb.price}
                            </div>
                            </div>
                        <div className='smallcontainer'>
                            <div className='smallbox'>
                                <Image className='small' src={beef}></Image>
                                <div className='price2'>
                                {meatobj.beef.name}: &nbsp;
                                CAD${meatobj.beef.price}
                                </div>
                                </div>
                            <div className='smallbox'>
                                <Image className='small' src={lambChop}></Image>
                                <div className='price2'>
                                {meatobj.lampChop.name}: &nbsp;
                                CAD${meatobj.lampChop.price}
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className='rright'>
                    <div className='smallcontainer'>
                            <div className='smallbox'>
                                <Image className='small' src={chicken}></Image>
                                <div className='price2'>
                                {meatobj.chicken.name}: &nbsp;
                                CAD${meatobj.chicken.price}
                                </div>
                                </div>
                            <div className='smallbox'>
                                <Image className='small' src={wings}></Image>
                                <div className='price2'>
                                {meatobj.wings.name}: &nbsp;
                                CAD${meatobj.wings.price}
                                </div>
                            </div>
                        </div>
                        <div className='bigbox text-black'>
                                <Image className='small' src={steak}></Image>
                                <div className='price'>
                                {meatobj.steak.name}: &nbsp;
                                CAD${meatobj.steak.price}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section3'></div>
                <div className='container2'>
                <div className='featured'>
                <h1>Featured items</h1>
                </div>
                    <div className='wrapdiv'>
                        <Link href={`/shop/${featuredObj.mixed.name}`}>
                        <div className='wraps'>
                            <p className='name'>{featuredObj.mixed.name}</p>
                            <div className='desc'>{featuredObj.mixed.description}
                            <Image className='img'
                                src={featuredObj.mixed.image}
                                width={90}
                                height={10}
                                alt='' 
                                />
                            </div>
                            <p className='pr'>CAD${featuredObj.mixed.price}</p>
                        </div>
                        </Link>
                        <Link href={`/shop/${featuredObj.beef.name}`}>
                        <div className='wraps'>
                        <p className='name'>{featuredObj.beef.name}</p>
                            <div className='desc'>{featuredObj.beef.description}
                            <Image className='imgp'
                                src={featuredObj.beef.image}
                                width={90}
                                height={500}
                                alt='' 
                                />
                            </div>
                            <p className='pr'>CAD${featuredObj.beef.price}</p>
                        </div>
                        </Link>
                        <Link href={`/shop/${featuredObj.chicken.name}`}>
                        <div className='wraps'>
                        <p className='name'>{featuredObj.chicken.name}</p>
                            <div className='desc'>{featuredObj.chicken.description}
                            <Image className='img'
                                src={featuredObj.chicken.image}
                                width={90}
                                height={500}
                                alt='' 
                                />
                            </div>
                            <p className='pr'>CAD${featuredObj.chicken.price}</p>
                        </div>
                        </Link>
                        <Link href={`/shop/${featuredObj.fried.name}`}>
                        <div className='wraps'>
                        <p className='name'>{featuredObj.fried.name}</p>
                            <div className='desc'>{featuredObj.fried.description}
                            <Image className='imgp'
                                src={featuredObj.fried.image}
                                width={90}
                                height={500}
                                alt='' 
                                />
                            </div>
                            <p className='pr'>CAD${featuredObj.fried.price}</p>
                        </div>
                        </Link>
                        <Link href={`/shop/${featuredObj.lamb.name}`}>
                        <div className='wraps'>
                        <p className='name'>{featuredObj.lamb.name}</p>
                            <div className='desc'>{featuredObj.lamb.description}
                            <Image className='img'
                                src={featuredObj.lamb.image}
                                width={90}
                                height={100}
                                alt='' 
                                />
                            </div>
                            <p className='pr'>CAD${featuredObj.lamb.price}</p>
                        </div>
                        </Link>
                        <Link href={`/shop/${featuredObj.pick.name}`}>
                        <div className='wraps'>
                        <p className='name'>{featuredObj.pick.name}</p>
                            <div className='desc'>{featuredObj.pick.description}
                            <Image className='img'
                                src={featuredObj.pick.image}
                                width={90}
                                height={500}
                                alt='' 
                                />
                            </div>
                            <p className='pr'>CAD${featuredObj.pick.price}</p>
                        </div>
                        </Link>
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






