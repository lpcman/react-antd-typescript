import * as React from 'react';
import EmptyLayout from '../layout/empty/';
import Login from '../containers/Login';

const LoginPage = (props: any) => (
  <EmptyLayout>
    <Login {...props} />
  </EmptyLayout>
);

export default LoginPage;
