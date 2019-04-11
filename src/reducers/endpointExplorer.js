import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import { parseError } from 'modules/client';

import { ActionTypes, STATUS } from 'constants/index';

export const endpointExplorerState = {
  data: {},
  status: STATUS.IDLE,
  endpointName: '',
  message: '',
};

export default {
  endpointExplorer: handleActions(
    {
      [ActionTypes.EXPLORE_ENDPOINT]: (state, { payload }) =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
          endpointName: { $set: payload.endpointName },
        }),
      [ActionTypes.EXPLORE_ENDPOINT_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          data: { $set: payload || {} },
          status: { $set: STATUS.READY },
        }),
      [ActionTypes.EXPLORE_ENDPOINT_FAILURE]: (state, { payload }) =>
        immutable(state, {
          message: { $set: parseError(payload.message) },
          status: { $set: STATUS.ERROR },
        }),
    },
    endpointExplorerState,
  ),
};
