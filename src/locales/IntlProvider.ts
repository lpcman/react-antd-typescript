import {IntlProvider, addLocaleData} from 'react-intl';
import {connect} from 'react-redux';
import {ILocaleStore} from "../store/localeStore";

import * as zh from 'react-intl/locale-data/zh';
import * as en from 'react-intl/locale-data/en';
import * as ar from 'react-intl/locale-data/ar';
import * as fr from 'react-intl/locale-data/fr';

addLocaleData([...zh, ...en, ...ar, ...fr]);

const mapStateToProps = ({locales: {locale, messages}}: ILocaleStore) => ({
  key: locale,
  locale,
  messages
});

export default connect(mapStateToProps)(IntlProvider);
