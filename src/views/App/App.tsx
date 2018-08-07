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
          <ChangeLocale/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to="/i18n">link to i18n</Link>
        <FormattedHTMLMessage id="app.content.message"/>
      </div>
    );
  }
}

export default injectIntl(App as any);
