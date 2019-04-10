/**
 * @module Sagas/AccountCreator
 * @desc AccountCreator
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'modules/client';

import { ActionTypes } from 'constants/index';

/**
 * Get Keypair
 *
 * @param {Object} action
 *
 */
export function* getKeypair() {
  try {
    const response = yield call(
      request,
      `${process.env.REACT_APP_API_URL}/keypair`,
    );
    yield put({
      type: ActionTypes.ACCOUNT_GET_KEYPAIR_SUCCESS,
      payload: { data: response.data },
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.ACCOUNT_GET_KEYPAIR_FAILURE,
      payload: err,
    });
  }
}
export function* friendBotTest({ payload }) {
  try {
    const response = yield call(
      request,
      `${process.env.REACT_APP_API_URL}/friendBot/${payload.id}`,
    );
    yield put({
      type: ActionTypes.ACCOUNT_FRIENDBOT_TEST_SUCCESS,
      payload: { data: response.message },
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.ACCOUNT_FRIENDBOT_TEST_FAILURE,
      payload: err,
    });
  }
}
/**
 * AccountCreator Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.ACCOUNT_GET_KEYPAIR, getKeypair),
    takeLatest(ActionTypes.ACCOUNT_FRIENDBOT_TEST, friendBotTest),
  ]);
}
