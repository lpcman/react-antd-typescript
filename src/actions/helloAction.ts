import {createAction} from "redux-actions";

export const INCREMENT_ENTHUSIASM = 'HELLO_INCREMENT_ENTHUSIASM';
export const DECREMENT_ENTHUSIASM = 'HELLO_DECREMENT_ENTHUSIASM';

export const incrementEnthusiasm = createAction(INCREMENT_ENTHUSIASM);
export const decrementEnthusiasm = createAction(DECREMENT_ENTHUSIASM);

const helloActions = {
  incrementEnthusiasm,
  decrementEnthusiasm,
};

export default helloActions;
