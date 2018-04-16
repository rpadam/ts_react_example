import Toggle from '../components/Toggle';
import * as actions from '../actions/Toggle';
import { ToggleState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ isOn }: ToggleState) {
    return {
        on: isOn
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ToggleAction>) {
    return {
        toggle: () => dispatch(actions.toggle()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);