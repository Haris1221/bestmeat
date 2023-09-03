'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import cart from '../../public/images/cart.png'
import search from '../../public/images/search.png'
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
        
        }
    
        fetchData();
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
                <p>Home</p>
                <p>Shop</p>
                <p>Recommended</p>
            </div>
            <div className='header'>
                <div className='left'>WE PRODUCE HALAL MEAT</div>
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
                        <div className='wraps'></div>
                        <div className='wraps'></div>
                        <div className='wraps'></div>
                        <div className='wraps'></div>
                        <div className='wraps'></div>
                        <div className='wraps'></div>
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
