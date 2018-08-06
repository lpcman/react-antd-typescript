import * as React from 'react';
import {Route, Switch} from 'react-router';
import About from '../views/About';
import Login from '../views/Login';
import Home from '../views/home/';
import I18N from '../views/i18n/';
import NoMatch from '../views/NoMatch';
import {clearError} from '../actions/authAction'

// import App from '../containers/App'
// import Home from '../containers/Home'
// import Login from '../containers/Login'
// import Register from '../containers/Register'
// import Dashboard from '../containers/Dashboard'
// import NotFound from '../containers/NotFound'

function getRoutes(store: any) {

  /**
   * Checks authentication status on route change
   * @param  {object}   nextState The state we want to change into when we change routes
   * @param  {function} replace Function provided by React Router to replace the location
   */
  function checkAuth (nextState: any, replace: any) {
    const {loggedIn} = store.getState()

    store.dispatch(clearError())

    // Check if the path isn't dashboard. That way we can apply specific logic to
    // display/render the path we want to
    if (nextState.location.pathname !== '/dashboard') {
      if (loggedIn) {
        if (nextState.location.state && nextState.location.pathname) {
          replace(nextState.location.pathname)
        } else {
          replace('/')
        }
      }
    } else {
      // If the user is already logged in, forward them to the homepage
      if (!loggedIn) {
        if (nextState.location.state && nextState.location.pathname) {
          replace(nextState.location.pathname)
        } else {
          replace('/')
        }
      }
    }
  }

  return (
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route onEnter={checkAuth}>
        <Route path="/i18n" component={I18N}/>
      </Route>
      <Route component={NoMatch}/>
      {/*<App>*/}
          {/*<Route path='/' component={Home} />*/}
          {/*<Route onEnter={checkAuth}>*/}
            {/*<div>*/}
              {/*<Route path='/login' component={Login} />*/}
              {/*<Route path='/register' component={Register} />*/}
              {/*<Route path='/dashboard' component={Dashboard} />*/}
              {/*<Route path='/home' component={HomeNew} />*/}
            {/*</div>*/}
          {/*</Route>*/}
          {/*<Route path='*' component={NotFound} />*/}
      {/*</App>*/}
    </Switch>
  );
}

export default getRoutes;
