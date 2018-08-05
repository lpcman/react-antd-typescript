import {UPDATE_LOCALE} from '../actions/localesAction';
import * as Locales from '../store/localeStore'

const localesReducer = (state: Locales.ILocale = Locales.storeLocale, action: { type: string, payload: any }): Locales.ILocale => {
  switch (action.type) {
    case UPDATE_LOCALE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default localesReducer;
