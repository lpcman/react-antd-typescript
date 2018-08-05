import {DECREMENT_ENTHUSIASM, EnthusiasmAction, INCREMENT_ENTHUSIASM} from '../actions/helloAction';
import * as Hello from '../store/helloStore';

export function enthusiasm(state: Hello.IHello = Hello.storeHello, action: EnthusiasmAction): Hello.IHello {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
    case DECREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
  }
  return state;
}
