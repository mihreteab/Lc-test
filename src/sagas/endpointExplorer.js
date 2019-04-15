/**
 * @module Sagas/EndpointExplorer
 * @desc EndpointExplorer
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'modules/client';

import { ActionTypes } from 'constants/index';

/**
 * Endpoint Explorer
 *
 * @param {Object} action
 *
 */
export function* exploreEndpoint({ payload }) {
  try {
    const response = yield call(request, payload.url, {
      ...(payload.method ? { method: payload.method } : { method: 'GET' }),
      ...(payload.tx ? { payload: { tx: payload.tx } } : null),
    });
    yield put({
      type: ActionTypes.EXPLORE_ENDPOINT_SUCCESS,
      payload: { [payload.endpointName]: response.data },
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.EXPLORE_ENDPOINT_FAILURE,
      payload: err.response,
    });
  }
}
/**
 * EndpointExplorer Sagas
 */
export default function* root() {
  yield all([takeLatest(ActionTypes.EXPLORE_ENDPOINT, exploreEndpoint)]);
}
