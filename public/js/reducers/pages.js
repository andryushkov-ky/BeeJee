import R from 'ramda'

import {
    FETCH_TASKS_SUCCESS
} from '../actionTypes'

const initialState = 0

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_TASKS_SUCCESS:
            return Math.ceil(payload.message.total_task_count/3)
        default:
            return state
    }
}