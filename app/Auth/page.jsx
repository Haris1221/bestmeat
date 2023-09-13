'use client'
import { useState } from 'react'
import Login from './Login/login'
import Signup from './SignUp/signup'

export default function page() {
const [checkUser, setCheckUser] = useState(true)

    return (
        <div>
            {checkUser ?
            <Login setCheckUser={setCheckUser}/> :
            <Signup setCheckUser={setCheckUser}/>
        } 
        </div>
    )
}

