import {Locale} from "antd/lib/locale-provider";
import {antMessages, DEFAULT_LOCALE, messages} from "../locales/messages";
import {flattenMessages} from "../locales/utils";

export interface ILocale {
  locale: string;
  messages: object;
  antd: Locale
}

export interface ILocaleStore {
  locales: ILocale
}

export const storeLocale: ILocale = {
  locale: DEFAULT_LOCALE,
  messages: flattenMessages(messages[DEFAULT_LOCALE]),
  antd: antMessages[DEFAULT_LOCALE]
};
