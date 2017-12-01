import '../css/index.pcss';

import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, Router, Route} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'

import configureStore from './store'
// import Register from 'containers/register'
// import Client from 'containers/client'

import Home from './containers/home'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Home} />
        </Router>
    </Provider>,
    document.getElementById('root')
);