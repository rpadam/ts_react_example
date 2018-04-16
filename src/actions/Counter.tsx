import * as constants from '../constants';

export interface IncremenetCounter {
    type: constants.INCREMENT_COUNTER;
}

export interface DecrementCounter {
    type: constants.DECREMENT_COUNTER;
}

export type CounterAction = IncremenetCounter | DecrementCounter;

export function incrementCounter(): IncremenetCounter {
    return {
        type: constants.INCREMENT_COUNTER
    };
}

export function decrementCounter(): DecrementCounter {
    return {
        type: constants.DECREMENT_COUNTER
    };
}
