import Authenticate from '../components/Authentication';
import * as actions from '../actions/';
import { AuthState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ authenticated = false, userName }: AuthState) {
    return {
        authenticated,
        userName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AuthenticationAction>) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);