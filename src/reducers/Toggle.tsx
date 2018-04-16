import { ToggleAction } from '../actions/Toggle';
import { ToggleState } from '../types/index';
import { TOGGLE } from '../constants/index';

const initialToggleState: ToggleState = {
    isOn: false
};

export function toggle(state: ToggleState = initialToggleState, action: ToggleAction ): ToggleState {
    var _isOn = !state.isOn;
    switch (action.type) {
        case TOGGLE:
            return { ...state, isOn: _isOn};
        default: return state;
    }
}

export default toggle;