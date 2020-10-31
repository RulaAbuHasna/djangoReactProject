import { combineReducers } from 'redux'
import regex from './regex'
import signup from './signup'
import login from './signin'

export default combineReducers({
    regex,
    signup,
    login
})