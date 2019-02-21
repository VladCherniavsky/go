import {put, takeEvery, call} from 'redux-saga/effects';
import {USER_FETCH} from '../actions';
import {
  userFetchSuccessActionCreator,
  userFetchFailedActionCreator
} from '../actions/actionCreators/userActionCreators';
import {getUser} from '../apiCommunication/userApi';


function* fetchUserData({payload}) {
  try {
    const user = yield call(getUser, payload);
    yield put(userFetchSuccessActionCreator(user));
  } catch (error) {
    yield put(userFetchFailedActionCreator(error.data));
  }
}


function* userSaga() {
  yield takeEvery(USER_FETCH, fetchUserData);
}

export default userSaga;
