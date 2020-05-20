export const initialState = {
    isLogged: false,
    user: 'ejonghwan',
}


export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const SIGN_UP = "SIGN_UP"


export const loginAction = {
    type: LOG_IN,
    data: {
        user: 'ee'
    }
}

export const logoutAction = {
    type: LOG_OUT,
    data: null
}

export const signupAction = (data) => {
    return {
        type: SIGN_UP,
        data: data
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN : {
            return {
                ...state,
                user: action.data
            }
        }

        case LOG_OUT : {
            return {
                ...state,
                user: null,
            }
        }

        case SIGN_UP : {
            return {
                ...state,
                data: action.data
            }
        }

        default : {
            return {
                ...state
            }
        }

    }
} 



export default reducer;
