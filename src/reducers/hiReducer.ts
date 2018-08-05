import {DECREMENT_ENTHUSIASM, EnthusiasmAction, INCREMENT_ENTHUSIASM} from '../actions/hiAction';
import * as Hi from '../store/hiStore';

export function enthusiasm(state: Hi.IHi = Hi.storeHi, action: EnthusiasmAction): Hi.IHi {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
    case DECREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
  }
  return state;
}
