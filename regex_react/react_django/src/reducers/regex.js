import { ADD_REGEX, DELETE_REGEX, GET_REGEX } from '../actions/types.js'

const initialState = {
    something: '',
    regex: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REGEX:
            return {
                ...state,
                regex: action.payload
            }
        case DELETE_REGEX:
            return {
                ...state,
                regex: state.regex.filter(item => item.id !== action.payload)
            }
        case ADD_REGEX:
            return {
                ...state,
                regex: [...state.regex, action.payload]
            }
        default:
            return state
    }
}