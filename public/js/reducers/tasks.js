import R from 'ramda'

import {
    FETCH_TASKS_SUCCESS,
    ADD_TASK_SUCCESS,
    UPDATE_TASK
} from '../actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_TASKS_SUCCESS:
            return payload.message.tasks
        case ADD_TASK_SUCCESS:
            return [payload.message, ...state]
        case UPDATE_TASK:
            let newState = state;

            for (let val of newState) {
                if (val.id === payload.id) {
                    val.text = payload.text
                    val.status = payload.status
                    break;
                }
            }

            return newState
        default:
            return state
    }
}