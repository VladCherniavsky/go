import {put, takeEvery} from 'redux-saga/effects';
import {USER_FETCH} from '../actions';
import {
  userFetchSuccessActionCreator,
  userFetchFailedActionCreator
} from '../actions/actionCreators/userActionCreators';


function* fetchUserData() {
  try {
    const user = {name: 'Vlad'};
    yield put(userFetchSuccessActionCreator(user));
  } catch (error) {
    yield put(userFetchFailedActionCreator(error.data));
  }
}


function* userSaga() {
  yield takeEvery(USER_FETCH, fetchUserData);
}

export default userSaga;
