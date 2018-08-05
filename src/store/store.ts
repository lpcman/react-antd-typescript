import * as Hello from "./helloStore";
import * as Hi from "./hiStore";
import * as Locale from "./localeStore";

export interface IStoreState {
  hello: Hello.IHello,
  hi: Hi.IHi,
  locales: Locale.ILocale
}

const store: IStoreState = {
    hello: Hello.storeHello,
    hi: Hi.storeHi,
    locales: Locale.storeLocale
};

export default store;
