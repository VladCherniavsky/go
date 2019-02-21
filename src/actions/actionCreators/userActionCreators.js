import {ActionCreator} from '../../libs/actionCreator';

import {USER_FETCH} from '../index';

const userFetchActionCreators = new ActionCreator(USER_FETCH);

export const userFetchActionCreator = userFetchActionCreators.request;
export const userFetchSuccessActionCreator = userFetchActionCreators.success;
export const userFetchFailedActionCreator = userFetchActionCreators.fail;


