import {ConnectedRouter} from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {addLocaleData} from 'react-intl';
import {Provider} from 'react-redux';
import AntdProvider from './locales/AntdProvider';
import IntlProvider from './locales/IntlProvider';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes/'
import {history, store} from './store/'

import './index.less';

import * as ar from 'react-intl/locale-data/ar';
import * as en from 'react-intl/locale-data/en';
import * as fr from 'react-intl/locale-data/fr';


addLocaleData([...en, ...ar, ...fr]);

ReactDOM.render(
  <Provider store={store}>
    <AntdProvider>
      <IntlProvider>
        <div>
          <ConnectedRouter history={history}>
            {routes}
          </ConnectedRouter>
        </div>
      </IntlProvider>
    </AntdProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
