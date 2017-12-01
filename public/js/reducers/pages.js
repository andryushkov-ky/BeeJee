import R from 'ramda'

import {
    FETCH_TASKS_SUCCESS
} from '../actionTypes'

const initialState = 0

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_TASKS_SUCCESS:
            return payload.total_task_count
        default:
            return state
    }
}