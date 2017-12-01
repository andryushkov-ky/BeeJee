import {
    LOGIN_ADMIN
} from '../actionTypes'

const initialState = false

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN_ADMIN:
            return payload
        default:
            return state
    }
}