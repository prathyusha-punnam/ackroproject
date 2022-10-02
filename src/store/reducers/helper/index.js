import {combineReducers} from 'redux';
import message from './message.reducer';

const helperReducers = combineReducers({
    message
});

export default helperReducers;