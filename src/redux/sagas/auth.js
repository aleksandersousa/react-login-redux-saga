import { all, call, put, takeLatest } from 'redux-saga/effects';

import { logInFailure, logInSuccess } from '../actions/auth';
import types from '../types';

const logIn = async (email, password) => {
  // chamada da api
  return { email, password };
};

export function* logInWithCredentials({ payload: { email, password } }) {
  try {
    const user = yield logIn(email, password);

    yield put(logInSuccess(user));
  } catch (error) {
    yield put(logInFailure(error));
  }
}

export function* onLogInStart() {
  yield takeLatest(types.LOG_IN_START, logInWithCredentials);
}

export function* authSagas() {
  yield all([call(onLogInStart)]);
}
