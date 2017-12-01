import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from '../reducers/index.js'
import {persistStore, autoRehydrate} from 'redux-persist'

import { test } from '../middleware'

export default function configureStore(initialState) {
    const store = createStore(reducers, composeWithDevTools(
        applyMiddleware(thunk, test),
        autoRehydrate()
    ));

    persistStore(store);
    return store
}
