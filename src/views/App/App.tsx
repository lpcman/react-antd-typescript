import * as React from 'react';
import {Link} from 'react-router-dom'
import {FormattedHTMLMessage, injectIntl} from 'react-intl';
import logo from '../../img/logo.svg';
import './App.less';
import ChangeLocale from '../../containers/ChangeLocaleCon';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <ChangeLocale/>
          <FormattedHTMLMessage id="app.content.message"/>
        </div>
        <div className="App-nav">
          <p>no auth</p>
          <Link to="/login">link to login</Link>
          <Link to="/about">link to about</Link>
          <p>auth</p>
          <Link to="/home">link to home</Link>
          <Link to="/i18n">link to i18n</Link>
        </div>
      </div>
    );
  }
}

export default injectIntl(App as any);
