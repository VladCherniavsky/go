import {USER_FETCH, USER_FETCH_SUCCESS, USER_FETCH_FAIL} from '../actions';

const initialState = {
  isLoading: false,
  error: null,
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH:
      return {
        ...state,
        isLoading: true
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case USER_FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
};
