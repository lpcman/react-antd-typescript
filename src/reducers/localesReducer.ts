import {handleActions} from "redux-actions";
import updateLocaleAction from '../actions/localesAction';
import {storeLocale} from "../store/localeStore";

export const localesReducer = handleActions(
  {
    [updateLocaleAction as any]: (state, {payload}) => ({...state, ...payload})
  },
  storeLocale
);

export default localesReducer;
