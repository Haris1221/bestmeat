'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import cart from '../../public/images/cart.png'
import search from '../../public/images/search.png'
import header from '../../public/images/header.png'
import insta from '../../public/images/insta.jpeg'
import twit from '../../public/images/twit.png'
import face from '../../public/images/face.png'
import mail from '../../public/images/mail.png'
import beef from '../../public/images/beef.png'
import util from '../../page/api/users/index'
import api from '../../page/api/api/index';




export default function page() {
    const [user, setUser] = useState({});
    const [meatData, setMeatData] = useState([])
    const [meatobj, setMeatObj] = useState({
        lamb:{},
        sheep:{},
        cow:{},
        beef:{},
        lampChop:{},
        steak:{},
        chicken:{},
        wings:{}
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
            setMeatObj({...meatobj,lamb:{...data[0]}, sheep:{...data[1]}, cow:{...data[2]}, beef:{...data[3]}, lampChop:{...data[4]}, steak:{...data[5]}, chicken:{...data[6]}, wings:{...data[7]}})
        
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
                        <div className='bigbox text-black'>{meatobj.lamb.name} </div>
                        <div className='smallcontainer'>
                            <div className='smallbox'>
                                {meatobj.beef.name}
                                {meatobj.beef.price}
                                <Image src={beef}></Image>

                                </div>
                            <div className='smallbox'>{meatobj.lampChop.name}</div>
                        </div>
                    </div>
                    <div className='rright'>
                    <div className='smallcontainer'>
                            <div className='smallbox'></div>
                            <div className='smallbox'></div>
                        </div>
                        <div className='bigbox'></div>
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
