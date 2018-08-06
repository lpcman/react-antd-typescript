import * as React from 'react';
import LoginForm from '../LoginForm';
import './Login.less';

function Login(props: any) {
  return (
    <div className='Login'>
      <div className='Login__title'>Login</div>
      <LoginForm {...props} />
    </div>
  )
}

export default Login;
