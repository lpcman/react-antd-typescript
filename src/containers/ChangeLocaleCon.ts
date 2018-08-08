import {Dispatch} from "redux";
import {connect} from 'react-redux';
import { injectIntl } from 'react-intl';
import updateLocalesAction from '../actions/localesAction';
import {ILocaleStore} from "../store/localeStore";
import ChangeLocale from "../components/ChangeLocale/";


const mapStateToProps = ({locales: {locale}}: ILocaleStore) => ({locale});

const mapDispatchToProps = (dispatch: Dispatch<any>): object => ({
  changeLocale: (locale: string) => dispatch(updateLocalesAction(locale))
});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(ChangeLocale) as any);

