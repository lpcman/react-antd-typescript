import {handleActions} from "redux-actions";
import produce from 'immer';
import hiActions from '../actions/hiAction';
import {IHi,initSateHi} from "../store/hiStore";

// export const hiReducer = handleActions(
//   {
//     [hiActions.incrementEnthusiasm as any]: state => ({...state, enthusiasmLevel: state.enthusiasmLevel + 1}),
//     [hiActions.decrementEnthusiasm as any]: state => ({
//       ...state,
//       enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
//     })
//   },
//   initSateHi
// );

export const hiReducer = handleActions(
  {
    [hiActions.incrementEnthusiasm as any]: produce<IHi>((draft: IHi, action: any) => {
      draft.enthusiasmLevel = draft.enthusiasmLevel + 1
    }),
    [hiActions.decrementEnthusiasm as any]:produce<IHi>((draft: IHi, action: any) => {
      draft.enthusiasmLevel = Math.max(1, draft.enthusiasmLevel - 1)
    })
  },
  initSateHi
);
