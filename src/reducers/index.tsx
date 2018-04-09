import { EnthusiasmAction , AuthenticationAction } from '../actions';
import { EnthusiasmState , AuthState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM , LOGIN, LOGOUT } from '../constants/index';

import { combineReducers } from 'redux';

const initialEnthusiasmState: EnthusiasmState = {
    enthusiasmLevel: 1,
    languageName: ''
};

const initialAuthState: AuthState = {
    authenticated: false,
    userName: ''
};

export function enthusiasm(state: EnthusiasmState = initialEnthusiasmState, action: EnthusiasmAction): EnthusiasmState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default: return state;
    }
}

export function authentication(state: AuthState = initialAuthState, action: AuthenticationAction): AuthState {
    switch (action.type) {
        case LOGIN:
            return { ...state, authenticated: true};
        case LOGOUT:
            return { ...state, authenticated: false, userName: ''};
        default: return state;
    }
}

export const rootReducer =  combineReducers({ enthusiasm, authentication });

// export default rootReducer;