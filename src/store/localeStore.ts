import {Locale} from "antd/lib/locale-provider";
import {DEFAULT_LOCALE, flattenMessages} from "../locales/utils";
import translation from "../locales/messages";
import antdLocales from "../locales/antd";

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
  messages: flattenMessages(translation[DEFAULT_LOCALE]),
  antd: antdLocales[DEFAULT_LOCALE]
};
