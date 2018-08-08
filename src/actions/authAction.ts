/*
 * Actions describe changes of state in your application
 */
import {createAction} from "redux-actions";

/*
 * These are the variables that determine what auth motion.
 * changes in our state.
 */
export const CHANGE_FORM = 'CHANGE_FORM';
export const SET_AUTH = 'SET_AUTH';
export const SENDING_REQUEST = 'SENDING_REQUEST';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const LOGOUT = 'LOGOUT';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

/**
 * Sets the form state
 * @param  {object} newFormState          The new state of the form
 * @param  {string} newFormState.username The new text of the username input field of the form
 * @param  {string} newFormState.password The new text of the password input field of the form
 */
// export function changeForm (newFormState: object) {
//   return {type: CHANGE_FORM, newFormState}
// }
export const changeForm = createAction(CHANGE_FORM, (newFormState: object) => newFormState);

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
// export function setAuthState (newAuthState: boolean) {
//   return {type: SET_AUTH, newAuthState}
// }
export const setAuthState = createAction(SET_AUTH, (newAuthState: boolean) => newAuthState);

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
// export function sendingRequest (sending: boolean) {
//   return {type: SENDING_REQUEST, sending}
// }
export const sendingRequest = createAction(SENDING_REQUEST, (sending: boolean) => sending);

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */

// export function loginRequest (data: object) {
//   return {type: LOGIN_REQUEST, data}
// }
export const loginRequest = createAction(LOGIN_REQUEST, (data: object) => data);

/**
 * Tells the app we want to log out a user
 */
// export function logout () {
//   return {type: LOGOUT}
// }

export const logout = createAction(LOGOUT);

/**
 * Tells the app we want to register a user
 * @param  {object} data          The data we're sending for registration
 * @param  {string} data.username The username of the user to register
 * @param  {string} data.password The password of the user to register
 */
// export function registerRequest (data: object) {
//   return {type: REGISTER_REQUEST, data}
// }
export const registerRequest = createAction(REGISTER_REQUEST, (data: object) => data);

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
// export function requestError (error: string) {
//   return {type: REQUEST_ERROR, error}
// }
export const requestError = createAction(REQUEST_ERROR, (error: string) => error);

/**
 * Sets the `error` state as empty
 */
// export function clearError () {
//   return {type: CLEAR_ERROR}
// }
export const clearError = createAction(CLEAR_ERROR);

export const authActions = {
  changeForm,
  setAuthState,
  sendingRequest,
  loginRequest,
  logout,
  registerRequest,
  requestError,
  clearError
};

export default authActions;
