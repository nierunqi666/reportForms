import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/Index';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(<Provider store={store}>
    <Index/>
</Provider>, document.getElementById('root'));