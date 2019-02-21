import {createActions} from '../libs/actionCreator';
import {
  USER_FETCH as USER_FETCH_TYPE,
  AUTH_CHECK as AUTH_CHECK_TYPE
} from './actionTypes';

export const [
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL
] = createActions(USER_FETCH_TYPE);

export const [
  AUTH_CHECK,
  AUTH_CHECK_SUCCESS,
  AUTH_CHECK_FAIL
] = createActions(AUTH_CHECK_TYPE);
