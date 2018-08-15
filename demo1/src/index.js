import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Provider} from 'react-redux';
import store from './store/store';

import {
    BrowserRouter as Router
} from 'react-router-dom';
import config from './router/router.config';
import Route from './router/route';

ReactDOM.render(<Provider store={store}>
    <Router>
        <Route routes={config.routes}></Route>
    </Router>  
</Provider>, document.getElementById('root'));