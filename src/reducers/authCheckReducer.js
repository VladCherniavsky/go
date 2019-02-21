import {AsyncStorage} from 'react-native';
import {persistReducer, REHYDRATE} from 'redux-persist';
import {AUTH_CHECK, AUTH_CHECK_SUCCESS, AUTH_CHECK_FAIL} from '../actions';

const initialState = {
  isLoading: false,
  error: null,
  token: null,
  isLogged: false
};

const AuthReducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        token: action.payload && action.payload.token
      };
    case AUTH_CHECK:
      return {
        ...state,
        isLoading: true
      };
    case AUTH_CHECK_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case AUTH_CHECK_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
};

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['token']
};

export default persistReducer(persistConfig, AuthReducer);
