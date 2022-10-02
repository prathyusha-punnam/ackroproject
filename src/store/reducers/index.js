import {combineReducers} from 'redux';
import contact from './contact/contact.reducer';
import helper from './helper'


const createReducer = () =>
    combineReducers({
        contact,
        helper
    });

export default createReducer;