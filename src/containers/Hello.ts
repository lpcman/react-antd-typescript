import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/helloAction';
import Hello from '../components/Hello';
import { IHelloStore } from '../store/helloStore';

export function mapStateToProps({ hello }: IHelloStore) {
    return {
        enthusiasmLevel: hello.enthusiasmLevel,
        name: hello.languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
