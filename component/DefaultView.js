import React from 'react'
import { GlobalStyle, ActiveBtn, Button } from './GlobalStyle'
import Link from 'next/link'

const DefaultView = ({ children }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="wrap">
            <GlobalStyle />
            <div className="header">
                <Link href="/"><a>home</a></Link>
                <Link href="/profile"><a>profile</a></Link>
                
            </div>

            <div className="login-window">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="id">id</label><br />
                        <input id="id" />
                    </div>
                    <div>
                        <label htmlFor="password">password</label><br />
                        <input id="password" />
                    </div>
                    <ActiveBtn>login</ActiveBtn>
                    <Button><Link href="/signup"><a>signup</a></Link></Button>
                </form>
            </div>
            {children}
        </div>
    )
}

export default DefaultView;