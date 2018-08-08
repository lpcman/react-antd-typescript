import {fork, all} from 'redux-saga/effects'
import {loginFlow, logoutFlow, registerFlow} from "./authSaga";
import {watchAndLog} from "./SagaLog";

// Sagas help us gather all our side effects (network requests in this case) in one place
// The root sagas is what we actually send to Redux's middleware. In here we fork
// each sagas so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.

export default function* rootSaga() {
  yield all([
    fork(watchAndLog),
    fork(loginFlow),
    fork(logoutFlow),
    fork(registerFlow)
  ]);
}
