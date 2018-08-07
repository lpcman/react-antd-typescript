import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import IntlProvider from './locales/IntlProvider';
import AntdProvider from './locales/AntdProvider';
import registerServiceWorker from './registerServiceWorker';
import {history, store} from './store/'
import getRoutes from './routes/'

import './index.less';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <AntdProvider>
        <div>
          <ConnectedRouter history={history}>
            {getRoutes(store)}
          </ConnectedRouter>
        </div>
      </AntdProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
