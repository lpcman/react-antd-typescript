import {handleActions} from "redux-actions";
import hiActions from '../actions/hiAction';
import {initSateHi} from "../store/hiStore";

export const hiReducer = handleActions(
  {
    [hiActions.incrementEnthusiasm as any]: state => ({...state, enthusiasmLevel: state.enthusiasmLevel + 1}),
    [hiActions.decrementEnthusiasm as any]: state => ({
      ...state,
      enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
    })
  },
  initSateHi
);
