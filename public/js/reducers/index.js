import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import {
    ADD_TASK_SUCCESS,
    LOGIN_ADMIN
} from '../actionTypes';

import tasks from './tasks'
import pages from './pages'
import admin from './admin'


export default combineReducers({
    routing: routerReducer,
    tasks,
    pages,
    admin,
    form: formReducer.plugin({
        createTask: (state, action) => {
            switch(action.type) {
                case ADD_TASK_SUCCESS:
                    return undefined;
                default:
                    return state;
            }
        },
        login: (state, action) => {
            switch(action.type) {
                case LOGIN_ADMIN:
                    return undefined;
                default:
                    return state;
            }
        }
    }),
})