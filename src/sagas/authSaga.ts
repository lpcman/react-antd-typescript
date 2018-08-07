import {take, call, put, race} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {hashSync} from 'bcryptjs';
import genSalt from '../auth/salt';
import auth from '../auth';
import * as action from '../actions/authAction';
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
} from '../constants/auth';


/**
 * Effect to handle authorization
 * @param  {string} username               The username of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 * @param  {boolean} options.isRegistering Is this a register request?
 */
export function * authorize ({username, password, isRegistering}: any) {
  // We send an action that tells Redux we're sending a request
  yield put(action.sendingRequest(true));

  // We then try to register or log in the user, depending on the request
  try {
    const salt = genSalt(username);
    const hash = hashSync(password, salt);
    let response;

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!
    if (isRegistering) {
      response = yield call(auth.register, username, hash);
    } else {
      response = yield call(auth.login, username, hash);
    }

    return response
  } catch (error) {
    // If we get an error we send Redux the appropiate action and return
    yield put(action.requestError(error.message));

    return false
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put(action.sendingRequest(false))
  }
}

/**
 * Effect to handle logging out
 */
export function * logout () {
  // We tell Redux we're in the middle of a request
  yield put(action.sendingRequest(true));

  // Similar to above, we try to log out by calling the `logout` function in the
  // `auth` module. If we get an error, we send an appropiate action. If we don't,
  // we return the response.
  try {
    const response = yield call(auth.logout);
    yield put(action.sendingRequest(false));

    return response
  } catch (error) {
    yield put(action.requestError(error.message))
  }
}

/**
 * Log in saga
 */
export function * loginFlow () {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const request = yield take(LOGIN_REQUEST);
    const {username, password} = request.data;

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    const winner = yield race({
      auth: call(authorize, {username, password, isRegistering: false}),
      logout: take(LOGOUT)
    });

    // If `authorize` was the winner...
    if (winner.auth) {
      // ...we send Redux appropiate actions
      yield put(action.setAuthState(true)); // User is logged in (authorized)
      yield put(action.changeForm({username: '', password: ''})); // Clear form
      // forwardTo('/dashboard') // Go to dashboard page
      yield put(push('/'))
    }
  }
}

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT` actions
 */
export function * logoutFlow () {
  while (true) {
    yield take(LOGOUT);
    yield put(action.setAuthState(false));

    yield call(logout);
    // forwardTo('/')
    yield put(push('/about'))
  }
}

/**
 * Register saga
 * Very similar to log in saga!
 */
export function * registerFlow () {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const request = yield take(REGISTER_REQUEST);
    const {username, password} = request.data;

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    const wasSuccessful = yield call(authorize, {username, password, isRegistering: true});

    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      yield put(action.setAuthState(true)); // User is logged in (authorized) after being registered
      yield put(action.changeForm({username: '', password: ''})); // Clear form
      // forwardTo('/dashboard') // Go to dashboard page
      yield put(push('/i18n'))
    }
  }
}
