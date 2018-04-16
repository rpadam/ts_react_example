import Counter from '../components/Counter';
import * as actions from '../actions/Counter';
import { CounterState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ count }: CounterState) {
    return {
        count
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CounterAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementCounter()),
        onDecrement: () => dispatch(actions.decrementCounter()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);