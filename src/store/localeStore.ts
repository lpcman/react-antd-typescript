import {Locale} from "antd/lib/locale-provider";
import {flattenMessages} from "../locales/utils";
import {messages, antMessages, DEFAULT_LOCALE} from "../locales/messages";

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
