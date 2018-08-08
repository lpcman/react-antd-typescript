import * as React from 'react';
import EmptyLayout from '../layout/empty/';
import Login from '../containers/LoginCon';

const LoginPage = (props: any) => (
  <EmptyLayout>
    <Login {...props} />
  </EmptyLayout>
);

export default LoginPage;
