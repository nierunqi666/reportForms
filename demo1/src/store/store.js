import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer';
import Logger from 'redux-logger';


export default createStore(reducers, applyMiddleware(Logger));