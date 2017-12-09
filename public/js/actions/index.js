import {
    FETCH_TASKS_START,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TASK_START,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
    UPDATE_TASK,
    LOGIN_ADMIN
} from '../actionTypes'

import {
    fetchTasks as fetchTasksApi,
    addTask as addTaskApi
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

export const addTask = (data, img) => async dispatch => {
    dispatch({type: ADD_TASK_START})

    try {
        const task = await addTaskApi(data, img)

        dispatch({
            type: ADD_TASK_SUCCESS,
            payload: task
        })
    } catch (err) {
        dispatch({
            type: ADD_TASK_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const updateTask = task => dispatch => {
    /// todo here must be a request to server API
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