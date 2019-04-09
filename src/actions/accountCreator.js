// @flow
/**
 * @module Actions/AccountCreator
 * @desc AccountCreator Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const { accountGetKeypair: getKeypair } = createActions({
  [ActionTypes.ACCOUNT_GET_KEYPAIR]: () => ({}),
});
