import {put, takeEvery, call} from 'redux-saga/effects';
import {AUTH_CHECK} from '../actions';
import {
  authCheckSuccessActionCreator,
  authCheckFailedActionCreator
} from '../actions/actionCreators/authCheckActionCreators';
import {checkAuth as checkAuthAPi} from '../apiCommunication/checkAuthApi';

function* checkAuth({payload}) {
  try {
    const authData = yield call(checkAuthAPi, {token: payload});
    yield put(authCheckSuccessActionCreator(authData));
  } catch (error) {
    yield put(authCheckFailedActionCreator(error.data));
  }
}

function* authCheckSaga() {
  yield takeEvery(AUTH_CHECK, checkAuth);
}

export default authCheckSaga;
