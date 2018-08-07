import * as React from 'react';
import { Select } from 'antd';
const Option = Select.Option;
import {LOCALES_LANGS} from "../../locales/messages";
import './ChangeLocale.less';

function ChangeLocale(props: any) {
  return (
    <div className="ChangeLocale">
      <Select defaultValue={LOCALES_LANGS[props.locale]} onChange={props.changeLocale}>
        {
          Object.keys(LOCALES_LANGS).map( lang =>
            <Option key={lang} value={lang}>{LOCALES_LANGS[lang]}</Option>
          )
        }
      </Select>
    </div>
  )
}

export default ChangeLocale;
