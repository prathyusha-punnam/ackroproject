import * as reduxModule from 'redux';
import {applyMiddleware, compose, createStore} from 'redux';
import createReducer from './reducers';
import thunk from 'redux-thunk';

reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT';

const middleware = [thunk];

var store;

if(window.location.hostname == 'localhost') {

    store = createStore(createReducer(),
    compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

} else {

    store = createStore(createReducer(),
    compose(applyMiddleware(...middleware)));

}


export default store;