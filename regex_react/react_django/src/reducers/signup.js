import { SIGNUP_USER } from '../actions/types'

const initialState = {
    something: '',
    user: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNUP_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
