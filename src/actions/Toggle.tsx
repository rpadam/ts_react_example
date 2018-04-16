import * as constants from '../constants';

export interface Toggle {
    type: constants.TOGGLE;
}

export type ToggleAction = Toggle;

export function toggle(): Toggle {
    return {
        type: constants.TOGGLE
    };
}