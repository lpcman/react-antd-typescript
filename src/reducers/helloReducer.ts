import {handleActions} from "redux-actions";
import helloActions from '../actions/helloAction';
import {storeHello} from "../store/helloStore";

export const helloReducer = handleActions(
  {
    [helloActions.incrementEnthusiasm as any]: state => ({...state, enthusiasmLevel: state.enthusiasmLevel + 1}),
    [helloActions.decrementEnthusiasm as any]: state => ({
      ...state,
      enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
    }),
  },
  storeHello
);
