import {connect} from 'react-redux';
import Login from '../components/Login';
import actions from '../actions/authAction';

export function mapStateToProps(state: any, ownProps: any) {
  return {
    history: ownProps.history,
    ...state.auth
  }
}

export function mapDispatchToProps(dispatch: any) {
  return {
    clearError: () => dispatch(actions.clearError()),
    changeForm: (payload: any) => dispatch(actions.changeForm(payload)),
    login: (payload: any)=> {
      console.log(payload); //tslint:disable-line
      return dispatch(actions.loginRequest(payload))
    },
    logout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
