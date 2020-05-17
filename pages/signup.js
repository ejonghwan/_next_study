import React, { useState, useEffect } from 'react';
import { GlobalStyle, Button, ActiveBtn } from '../component/GlobalStyle'

const Signup = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [chek, setChek] = useState();

    const handleId = (e) => {
        setId(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordCheck = (e) => {
        setPasswordCheck(e.target.value)
    }

    const PasswordCheck = (e) => {
        setChek(e.target.cheked)
    }

    return (
        <div>
            <GlobalStyle />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">id</label><br />
                    <input id="id" onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="name">name</label><br />
                    <input id="name" onChange={handleName}/>
                </div>
                <div>
                    <label htmlFor="password">password</label><br />
                    <input id="password" onChange={handlePassword}/>
                </div>
                <div>
                    <label htmlFor="password-check">password-check</label><br />
                    <input id="password-check" onChange={handlePasswordCheck}/>
                </div>

                <div>
                    <input id="chekbox" type="checkbox" onChange={PasswordCheck}/>
                    <label htmlFor="chekbox">종환의 말을 들을것을 맹세합니다</label>
                </div>
                <ActiveBtn>signup</ActiveBtn>
            </form>
        </div>
    );
};

export default Signup;