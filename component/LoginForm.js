import React from 'react';
import { ActiveBtn, Button } from './GlobalStyles'
import Link from 'next/link'
import { useInput } from '../pages/signup'

const LoginForm = ({ isLogged }) => {

    const dummy = {
        isLogged: true,
        user: 'ejonghwan',
        post: [],
        foolowing: [],
        follower: []
    }

    const [id, handleId] = useInput()
    const [password, handlePassword] = useInput()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            id,
            password,
        })
        // isLogged = true
        // console.log(isLogged)
    }

    return (
        <div className="login-window">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">id</label><br />
                    <input id="id" onChange={handleId} required/>
                </div>
                <div>
                    <label htmlFor="password">password</label><br />
                    <input id="password" onChange={handlePassword} required/>
                </div>
                <ActiveBtn onClick={handleSubmit}>login</ActiveBtn>
                <Button><Link href="/signup"><a>signup</a></Link></Button>
            </form>
    </div>
    );
};

export default LoginForm;