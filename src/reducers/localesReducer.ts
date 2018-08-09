import {handleActions} from "redux-actions";
import produce from 'immer';
import updateLocaleAction from '../actions/localesAction';
import {ILocale, storeLocale} from "../store/localeStore";

// export const localesReducer = handleActions(
//   {
//     [updateLocaleAction as any]: (state, {payload}) => ({...state, ...payload})
//   },
//   storeLocale
// );

export const localesReducer = handleActions(
  {
    [updateLocaleAction as any]: produce<ILocale>((draft: ILocale, action: any) => {
      draft.locale = action.payload.locale;
      draft.messages = action.payload.messages;
      draft.antd = action.payload.antd;
    })
  },
  storeLocale
);

export default localesReducer;
