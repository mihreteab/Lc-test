// @flow
// @format
/**
 * @module Actions/AccountCreator
 * @desc AccountCreator Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  accountGetKeypair: getKeypair,
  accountFriendbotTest: testFriendBot,
} = createActions({
  [ActionTypes.ACCOUNT_GET_KEYPAIR]: () => ({}),
  [ActionTypes.ACCOUNT_FRIENDBOT_TEST]: (id: string) => ({ id }),
});
