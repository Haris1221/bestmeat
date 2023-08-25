import React from 'react'
import { Link } from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import cart from '../../public/images/cart.png'
import search from '../../public/images/search.png'
import header from '../../public/images/header.png'
import insta from '../../public/images/insta.jpeg'
import twit from '../../public/images/twit.png'
import face from '../../public/images/face.png'
import mail from '../../public/images/mail.png'

export default function page() {
    return (
        <div className='main'>
            <div className='nav'>
                <div className='logodiv'>
                    <Image className='logo' src={logo}></Image>
                </div>
                <div className='input'>
                    <Image className='cart' src={cart}></Image>
                    <div className='searchdiv'>
                        <Image  className='searchimg' src={search}></Image>
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
                <Image src={header} className='right'></Image>
            </div>
            <div className='section2'>
                <h1>Recommended</h1>
                <div className='container'>
                    <div className='lleft'>
                        <div className='bigbox'></div>
                        <div className='smallcontainer'>
                            <div className='smallbox'></div>
                            <div className='smallbox'></div>
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
                            <Image className='pic' src={logo}></Image>
                        <div className='navlinks2'>
                            <p className='tag'>Home</p>
                            <p className='tag'>Shop</p>
                            <p className='tag'>Recommended</p>
                        </div>
                    </div>
                        <div className='socials'>
                            <Image src={insta} className='soc'></Image>
                            <Image src={twit} className='soc'></Image>
                            <Image src={face} className='soc'></Image>
                            <Image src={mail} className='soc'></Image>
                        </div>
                    </div>
                </div>
        </div>
    )
}
