import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';
import {ILocaleStore} from "../store/localeStore";

const mapStateToProps = ({locales: {locale, messages}}: ILocaleStore) => ({
  key: locale,
  locale,
  messages
});

export default connect(mapStateToProps)(IntlProvider);
