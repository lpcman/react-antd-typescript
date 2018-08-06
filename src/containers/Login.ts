import {connect} from 'react-redux';
import * as actions from '../actions/authAction';
import Login from '../components/Login';
import {IAuthStore} from '../store/authStore';

export function mapStateToProps({auth}: IAuthStore) {
  return {

  }
}

export function mapDispatchToProps(dispatch: any) {
  return {
    clearError: () => dispatch(actions.clearError()),
    logout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
