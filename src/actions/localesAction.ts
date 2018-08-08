import {createAction} from "redux-actions";
import {messages, antMessages} from '../locales/messages';
import {flattenMessages} from '../locales/utils';

export const UPDATE_LOCALE = 'UPDATE_LOCALE';

export const updateLocaleAction = createAction(
  UPDATE_LOCALE,
  (locale: string) => ({
    locale,
    messages: flattenMessages(messages[locale]),
    antd: antMessages[locale]
  })
);

export default updateLocaleAction
