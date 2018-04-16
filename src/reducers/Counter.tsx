import { CounterAction } from '../actions/Counter';
import { CounterState } from '../types/index';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/index';

const initialState: CounterState = {
    count: 0,
};

export function count(state: CounterState = initialState, action: CounterAction): CounterState {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count + 1 };
        case DECREMENT_COUNTER:
            return { ...state, count: Math.max(1, state.count - 1) };
        default: return state;
    }
}

export default count;