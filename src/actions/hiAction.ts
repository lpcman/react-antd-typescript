import {createAction} from "redux-actions";

export const INCREMENT_ENTHUSIASM = 'HI_INCREMENT_ENTHUSIASM';
export const DECREMENT_ENTHUSIASM = 'HI_DECREMENT_ENTHUSIASM';

export const incrementEnthusiasm = createAction(INCREMENT_ENTHUSIASM);
export const decrementEnthusiasm = createAction(DECREMENT_ENTHUSIASM);

const hiActions = {
  incrementEnthusiasm,
  decrementEnthusiasm,
};

export default hiActions;
