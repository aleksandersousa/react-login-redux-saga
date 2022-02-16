import userActionTypes from '../types';

export const logInStart = credentials => ({
  type: userActionTypes.LOG_IN_START,
  payload: credentials,
});

export const logInSuccess = user => ({
  type: userActionTypes.LOG_IN_SUCCESS,
  payload: user,
});

export const logInFailure = error => ({
  type: userActionTypes.LOG_IN_FAILURE,
  payload: error,
});

export const logOut = () => ({
  type: userActionTypes.LOG_OUT,
});
