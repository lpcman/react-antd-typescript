import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/hiAction';
import Hello from '../components/Hello';

export function mapStateToProps({ hi, auth }: any) {
    return {
        enthusiasmLevel: hi.enthusiasmLevel,
        name: hi.languageName,
        username: auth.formState.username
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
