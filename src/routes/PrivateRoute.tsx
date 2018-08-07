import * as React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

import {clearError} from "../actions/authAction";

function PrivateRoute({component: Component, store, ...rest}: any) {
  const {loggedIn} = store.getState().auth;
  store.dispatch(clearError());
  return <Route
    {...rest}
    render={
      props => loggedIn ? (<Component {...props} />) : ( //tslint:disable-line
        <Redirect to={
          {
            pathname: "/login",
            state: {
              from: props.location
            }
          }
        }/>
      )
    }
  />
}

export default PrivateRoute;
