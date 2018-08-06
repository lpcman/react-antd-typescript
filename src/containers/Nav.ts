import {connect} from 'react-redux';
import * as actions from '../actions/authAction';
import Nav from '../components/Nav';
import {IAuthStore} from '../store/authStore';

export function mapStateToProps({auth}: IAuthStore) {
  return {
    currentlySending: auth.currentlySending,
    loggedIn: auth.loggedIn
  }
}

export function mapDispatchToProps(dispatch: any) {
  return {
    clearError: () => dispatch(actions.clearError()),
    logout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
