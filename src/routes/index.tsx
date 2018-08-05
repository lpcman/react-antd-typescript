import * as React from 'react';
import {Route, Switch} from 'react-router';
import About from '../views/About';
import Home from '../views/home/';
import I18N from '../views/i18n/';
import NoMatch from '../views/NoMatch';

const routes = (
  <Switch>
    <Route exact={true} path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/i18n" component={I18N}/>
    <Route component={NoMatch}/>
  </Switch>
);

export default routes
