import React from 'react';
import { ActiveBtn } from './GlobalStyles'

const LoginBox = () => {

    const dummy = {
        isLogged: true,
        user: 'ejonghwan',
        post: [],
        foolowing: [],
        follower: []
    }

    return (
        <div>
            {dummy.user}
        </div>
    );
};

export default LoginBox;