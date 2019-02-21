import {all, fork} from 'redux-saga/effects';
import userSaga from './userSaga';
import authCheckSaga from './authCheckSaga';

const sagas = [
  userSaga,
  authCheckSaga
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
