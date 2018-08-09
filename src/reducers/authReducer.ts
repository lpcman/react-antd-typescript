/*
 * The reducer takes care of state changes in our app through actions
 */

// import {
//   CHANGE_FORM,
//   SET_AUTH,
//   SENDING_REQUEST,
//   REQUEST_ERROR,
//   CLEAR_ERROR
// } from '../constants/auth'
import {handleActions} from "redux-actions";
import produce from 'immer';
import authActions from '../actions/authAction';
import {IAuth, storeAuth} from "../store/authStore";
// import hiActions from "../actions/hiAction";


// Takes care of changing the application state
// function reducer (state: IAuth = storeAuth, action: any) {
//   switch (action.type) {
//     case CHANGE_FORM:
//       return {...state, formState: action.newFormState};
//     case SET_AUTH:
//       return {...state, loggedIn: action.newAuthState};
//     case SENDING_REQUEST:
//       return {...state, currentlySending: action.sending};
//     case REQUEST_ERROR:
//       return {...state, error: action.error};
//     case CLEAR_ERROR:
//       return {...state, error: ''};
//     default:
//       return state
//   }
// }

// const hiReducer = handleActions<IAuth, any>(
//   {
//     [authActions.changeForm as any]: (state, {payload}) => ({...state, formState: payload}),
//     [authActions.setAuthState as any]: (state, {payload}) => ({...state, loggedIn: payload}),
//     [authActions.sendingRequest as any]: (state, {payload}) => ({...state, currentlySending: payload}),
//     [authActions.requestError as any]: (state, {payload}) => ({...state, error: payload}),
//     [authActions.clearError as any]: (state) => ({...state, error: ''})
//   },
//   storeAuth
// );

const hiReducer = handleActions<IAuth, any>(
  {
    [authActions.changeForm as any]: produce<IAuth>((draft: IAuth, action: any) => {
      draft.formState = action.payload;
    }),
    [authActions.setAuthState as any]: produce<IAuth>((draft: IAuth, action: any) => {
      draft.loggedIn = action.payload;
    }),
    [authActions.sendingRequest as any]: produce<IAuth>((draft: IAuth, action: any) => {
      draft.currentlySending = action.payload;
    }),
    [authActions.requestError as any]: produce<IAuth>((draft: IAuth, action: any) => {
      draft.error = action.payload;
    }),
    [authActions.clearError as any]: produce<IAuth>((draft: IAuth, action: any) => {
      draft.error = '';
    })
  },
  storeAuth
);

export default hiReducer;
