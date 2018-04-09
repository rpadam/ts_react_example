import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export interface Login {
    type: constants.LOGIN;
}

export function login(): Login {
    return {
        type: constants.LOGIN
    };
}

export interface Logout {
    type: constants.LOGOUT;
}

export function logout(): Logout {
    return {
        type: constants.LOGOUT
    };
}

export type AuthenticationAction = Login | Logout;