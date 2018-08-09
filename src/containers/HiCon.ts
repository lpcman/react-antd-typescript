import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import hiActions from '../actions/hiAction';
import Hello from '../components/Hello';
import {getGreeting} from "../selectors/authSelector";

export function mapStateToProps({ hi, auth }: any) {
    return {
        enthusiasmLevel: hi.enthusiasmLevel,
        name: hi.languageName,
        username: auth.formState.username,
        greeting: getGreeting({auth} as any)
    }
}

export function mapDispatchToProps(dispatch: Dispatch<any>): object {
    return {
        onDecrement: () => dispatch(hiActions.decrementEnthusiasm()),
        onIncrement: () => dispatch(hiActions.incrementEnthusiasm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
