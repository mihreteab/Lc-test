import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import { parseError } from 'modules/client';

import { ActionTypes, STATUS } from 'constants/index';

export const accountState = {
  keypair: {
    data: {},
    status: STATUS.IDLE,
    message: '',
  },
  friendBot: {
    data: '',
    status: STATUS.IDLE,
    message: '',
  },
};

export default {
  account: handleActions(
    {
      [ActionTypes.ACCOUNT_GET_KEYPAIR]: state =>
        immutable(state, {
          keypair: {
            status: { $set: STATUS.RUNNING },
          },
        }),
      [ActionTypes.ACCOUNT_GET_KEYPAIR_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          keypair: {
            data: { $set: payload.data || {} },
            status: { $set: STATUS.READY },
          },
        }),
      [ActionTypes.ACCOUNT_GET_KEYPAIR_FAILURE]: (state, { payload }) =>
        immutable(state, {
          keypair: {
            message: { $set: parseError(payload.message) },
            status: { $set: STATUS.ERROR },
          },
        }),
      [ActionTypes.ACCOUNT_FRIENDBOT_TEST]: state =>
        immutable(state, {
          friendBot: {
            status: { $set: STATUS.RUNNING },
          },
        }),
      [ActionTypes.ACCOUNT_FRIENDBOT_TEST_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          friendBot: {
            data: { $set: payload.data || {} },
            status: { $set: STATUS.READY },
          },
        }),
      [ActionTypes.ACCOUNT_FRIENDBOT_TEST_FAILURE]: (state, { payload }) =>
        immutable(state, {
          friendBot: {
            message: { $set: parseError(payload.message) },
            status: { $set: STATUS.ERROR },
          },
        }),
    },
    accountState,
  ),
};
