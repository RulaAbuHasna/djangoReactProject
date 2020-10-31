import axios from 'axios';
import { GET_REGEX, DELETE_REGEX, ADD_REGEX, SIGNUP_USER, LOGIN_USER } from './types'

//GET REGEX
export const getRegex = () => dispatch => {
    axios.get('http://127.0.0.1:8000/regexapp/query').then((res) => {
        dispatch({
            type: GET_REGEX,
            payload: res.data
        })
    }).catch((err) => {
        console.log(err)
    })
}

//DELETE REGEX
export const deleteRegex = (id) => dispatch => {
    axios.delete(`http://127.0.0.1:8000/regexapp/query/${id}`).then((res) => {
        dispatch({
            type: DELETE_REGEX,
            payload: id
        })
    }).catch((err) => {
        console.log(err)
    })
}

//ADD REGEX
export const addRegex = (item) => dispatch => {
    axios.post('http://127.0.0.1:8000/regexapp/query/', item).then((res) => {
        dispatch({
            type: ADD_REGEX,
            payload: res.data
        })
    }).catch((err) => {
        console.log(err)
    })
}

//SIGNUP_USER
export const signup = (item) => dispatch => {
    axios.post('http://127.0.0.1:8000/regexapp/users/', item).then((res) => {
        alert("Signed Up successfully")
        dispatch({
            type: SIGNUP_USER,
            payload: res.data
        })
    }).catch((err) => {
        alert("err")
        console.log(err)
    })
}

//SIGNIN_USER
export const login = (item) => dispatch => {
    axios.post('http://127.0.0.1:8000/token-auth/', item).then((res) => {
        alert("signed in successfully")
        localStorage.setItem('token', res.data.token)
        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
    }).catch((err) => {
        alert("err")
        console.log(err)
    })
}