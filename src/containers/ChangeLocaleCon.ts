import {Dispatch} from "redux";
import {connect} from 'react-redux';
import { injectIntl } from 'react-intl';
import * as actions from '../actions/localesAction';
import {ILocaleStore} from "../store/localeStore";
import ChangeLocale from "../components/ChangeLocale/";


const mapStateToProps = ({locales: {locale}}: ILocaleStore) => ({locale});

const mapDispatchToProps = (dispatch: Dispatch<actions.IUpdateLocales>) => ({
  changeLocale: (locale: string) => dispatch(actions.updateLocales(locale))
});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(ChangeLocale) as any);

