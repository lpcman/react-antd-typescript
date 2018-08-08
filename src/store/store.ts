import * as Hello from "./helloStore";
import * as Hi from "./hiStore";
import * as Locale from "./localeStore";
import * as Auth from "./authStore";

export interface IStoreState {
  hello: Hello.IHello,
  hi: Hi.IHi,
  locales: Locale.ILocale,
  auth: Auth.IAuth
}

export const initialState: IStoreState = {
  hello: Hello.storeHello,
  hi: Hi.initSateHi,
  locales: Locale.storeLocale,
  auth: Auth.storeAuth
};
