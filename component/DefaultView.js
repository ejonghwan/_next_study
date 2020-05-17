import React from 'react'
import { GlobalStyles, ActiveBtn, Button } from './GlobalStyles'
import Link from 'next/link'

import LoginBox from './LoginBox'
import LoginForm from './LoginForm'

const DefaultView = ({ children }) => {

    const dummy = {
            isLogged: false,
            user: 'ejonghwan',
            post: [],
            foolowing: [],
            follower: []
        }


    

    return (
        <div className="wrap">
            <GlobalStyles />
            <div className="header">
                <Link href="/"><a>home</a></Link>
                <Link href="/profile"><a>profile</a></Link>
                
            </div>
            {
                dummy.isLogged ? <LoginBox /> : <LoginForm isLogged={dummy.isLogged}/>
            }
           
            {children}
        </div>
    )
}

export default DefaultView;