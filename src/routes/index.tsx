import * as React from 'react';
import {Route, Switch} from 'react-router';
import PrivateRoute from './PrivateRoute';

import App from '../views/App/';
import About from '../views/About';
import Login from '../views/Login';
import Home from '../views/Home/';
import I18N from '../views/I18N';
import NoMatch from '../views/NoMatch';

function getRoutes(store: any) {
  return (
    <Switch>
      <Route exact={true} path="/" component={App}/>
      <Route path="/login" component={Login}/>
      <Route path="/about" component={About}/>
      <PrivateRoute path="/home" component={Home} store={store}/>
      <PrivateRoute path="/i18n" component={I18N} store={store}/>
      <Route component={NoMatch}/>
    </Switch>
  );
}

export default getRoutes;
