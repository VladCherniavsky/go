import {ActionCreator} from '../../libs/actionCreator';

import {AUTH_CHECK} from '../index';

const authCheckActionCreators = new ActionCreator(AUTH_CHECK);

export const authCheckActionCreator = authCheckActionCreators.request;
export const authCheckSuccessActionCreator = authCheckActionCreators.success;
export const authCheckFailedActionCreator = authCheckActionCreators.fail;
