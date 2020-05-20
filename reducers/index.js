import { combineReducers } from 'redux'
import post from './post'
import user from './user'

const rootReducers = combineReducers({
    user: user,
    post: post,
})


export default rootReducers;