import enthusiasm from './Hello';
import toggle from './Toggle'; 

import { combineReducers } from 'redux';

export const rootReducer =  combineReducers({
    enthusiasm,
    toggle
});
