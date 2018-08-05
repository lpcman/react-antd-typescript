import {connect} from 'react-redux';
import {LocaleProvider} from 'antd';
import {ILocaleStore} from "../store/localeStore";
import {Locale} from "antd/lib/locale-provider";


export interface ILocaleProviderProps {
  locale: Locale;
}

const mapStateToProps = ({locales: {antd}}: ILocaleStore): ILocaleProviderProps => ({
  locale: antd
});

export default connect(mapStateToProps)(LocaleProvider as any);
