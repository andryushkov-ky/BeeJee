import {
    FETCH_TASKS_START,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TASK,
    UPDATE_TASK,
    LOGIN_ADMIN
} from '../actionTypes'

import {
    fetchTasks as fetchTasksApi
} from '../api'

export const fetchTasks = (page, dir, field) => async dispatch => {
    dispatch({type: FETCH_TASKS_START})

    try {
        const tasks = await fetchTasksApi(page, dir, field)
        dispatch({
            type: FETCH_TASKS_SUCCESS,
            payload: tasks
        })
    } catch (err) {
        dispatch({
            type: FETCH_TASKS_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const addTask = task => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: task
    })
}

export const updateTask = task => dispatch => {
    dispatch({
        type: UPDATE_TASK,
        payload: task
    })
}

export const loginAdmin = status => dispatch => {
    dispatch({
        type: LOGIN_ADMIN,
        payload: status
    })
}