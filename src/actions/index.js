import {createActions} from '../libs/actionCreator';

export const [
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL
] = createActions('USER_FETCH');
