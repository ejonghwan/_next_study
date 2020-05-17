import React, { useState, useEffect } from 'react';
import { GlobalStyles, Button, ActiveBtn } from '../component/GlobalStyles'

export const useInput = (initalState = null) => {
    const [state, setter] = useState(initalState);
    const handler = (e) => {
        setter(e.target.value)
    }
    return [state, handler]
}


const Signup = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        !chek ? setChekErr(true) : setChekErr(false) 

       
    }

   

    const [id, setId] = useInput();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [chek, setChek] = useState(false);
    const [passwordCheckErr, setPasswordCheckErr] = useState(false);
    const [chekErr, setChekErr] = useState(false);



    
    // const handleId = (e) => {
    //     setId(e.target.value);
    // }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordCheck = (e) => {
        // setPasswordCheckErr(password !== e.target.value)
        password !== e.target.value ? setPasswordCheckErr(true) : setPasswordCheckErr(false)
        console.log(password !== e.target.value)
        setPasswordCheck(e.target.value)
    
    }

    const handleCheckbox = (e) => {
        setChek(e.target.checked)
        // chek ? setChekErr(false) : null
        setChekErr(false)
        console.log(chek)
    }

    return (
        <div>
            <GlobalStyles />
            <form onSubmit={handleSubmit}>
                {id}
                <div>
                    <label htmlFor="id">id</label><br />
                    <input id="id" onChange={setId} />
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
                    { passwordCheckErr && <div style={{color: "red", }}>비밀번호가 일치하지 않습니다</div> }
                </div>

                <div>
                    {/* checked 속성에 state값을 넣어야함. 그리고 함수에는 e.target.checked */}
                    <input id="checkbox" type="checkbox" checked={chek} onChange={handleCheckbox}/>
                    <label htmlFor="checkbox">종환의 말을 들을것을 맹세합니다</label>
                    { chekErr && <div style={{color: "red", }}>내 말을 안듣겠다고 ?</div> }
                </div>
                <ActiveBtn>signup</ActiveBtn>
            </form>
        </div>
    );
};

export default Signup;