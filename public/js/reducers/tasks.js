import R from 'ramda'

import {
    FETCH_TASKS_SUCCESS,
    ADD_TASK,
    UPDATE_TASK
} from '../actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_TASKS_SUCCESS:
            return payload.tasks
        case  ADD_TASK:
            const newClient = R.indexBy(R.prop('id'), [payload]);
            return R.merge(state, newClient)
        case UPDATE_TASK:
            const updateClient = R.indexBy(R.prop('id'), [payload]);
            return R.merge(state, updateClient)
        default:
            return state
    }
}