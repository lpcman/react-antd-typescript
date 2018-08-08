import {take} from 'redux-saga/effects';

export function* watchAndLog() {
  while(true) {
    const action = yield take('*');
    console.log("%c[SAGA LOG]: %O", 'font-weight:bold;', action); // tslint:disable-line
  }
}
