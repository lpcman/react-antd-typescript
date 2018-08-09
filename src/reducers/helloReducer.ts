import {handleActions} from "redux-actions";
import produce from 'immer';
import helloActions from '../actions/helloAction';
import {IHello, storeHello} from "../store/helloStore";

// export const helloReducer = handleActions(
//   {
//     [helloActions.incrementEnthusiasm as any]: state => ({...state, enthusiasmLevel: state.enthusiasmLevel + 1}),
//     [helloActions.decrementEnthusiasm as any]: state => ({
//       ...state,
//       enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
//     }),
//   },
//   storeHello
// );

export const helloReducer = handleActions(
  {
    [helloActions.incrementEnthusiasm as any]: produce<IHello>((draft: IHello, action: any) => {
      draft.enthusiasmLevel = draft.enthusiasmLevel + 1
    }),
    [helloActions.decrementEnthusiasm as any]: produce<IHello>((draft: IHello, action: any) => {
      draft.enthusiasmLevel = Math.max(1, draft.enthusiasmLevel - 1)
    })
  },
  storeHello
);
