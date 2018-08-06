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

const initialState: IStoreState = {
  hello: Hello.storeHello,
  hi: Hi.storeHi,
  locales: Locale.storeLocale,
  auth: Auth.storeAuth
};

export default initialState;
