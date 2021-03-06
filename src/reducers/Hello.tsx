import { EnthusiasmAction } from '../actions/Hello';
import { EnthusiasmState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initialEnthusiasmState: EnthusiasmState = {
    enthusiasmLevel: 1,
    languageName: ''
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

export default enthusiasm;