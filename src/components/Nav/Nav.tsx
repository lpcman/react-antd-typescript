import * as React from 'react';
import './Nav.less';
import {Button, Divider} from 'antd';
import {Link} from 'react-router-dom'

export interface INav {
  currentlySending: boolean,
  loggedIn: boolean,
  clearError: any,
  logout: any
}

function Nav(props: INav) {
  return (
    <div className="Nav">
      <div className="Nav__wrapper">
        <div className="logo">LOGOLOGOLOGO</div>
        <div className="funcs">
          {
            props.loggedIn ? (
              <div>
                <Link to='/'>Home</Link>
                <Divider type="vertical" />
                {props.currentlySending ? (
                  <Button type="primary" loading={props.currentlySending}>Loading</Button>
                ) : (
                  <a href='#' className='btn btn--login btn--nav' onClick={props.logout}>Logout</a>
                )}
              </div>
            ) : (
              <div>
                <Link to='/register' className='btn btn--login btn--nav' onClick={props.clearError}>Register</Link>
                <Divider type="vertical" />
                <Link to='/login' className='btn btn--login btn--nav' onClick={props.clearError}>Login</Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Nav;
