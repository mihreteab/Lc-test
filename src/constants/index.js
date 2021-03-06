import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
  SWITCH_MENU: undefined,
  EXCEPTION: undefined,
  USER_LOGIN: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  GITHUB_GET_REPOS: undefined,
  GITHUB_GET_REPOS_SUCCESS: undefined,
  GITHUB_GET_REPOS_FAILURE: undefined,
  ACCOUNT_GET_KEYPAIR: undefined,
  ACCOUNT_GET_KEYPAIR_SUCCESS: undefined,
  ACCOUNT_GET_KEYPAIR_FAILURE: undefined,
  ACCOUNT_FRIENDBOT_TEST: undefined,
  ACCOUNT_FRIENDBOT_TEST_SUCCESS: undefined,
  EXPLORE_ENDPOINT: undefined,
  EXPLORE_ENDPOINT_SUCCESS: undefined,
  EXPLORE_ENDPOINT_FAILURE: undefined,
  ACCOUNT_FRIENDBOT_TEST_FAILURE: undefined,
  SHOW_ALERT: undefined,
  HIDE_ALERT: undefined,
});

/**
 * @constant {Object} STATUS
 * @memberof Constants
 */
export const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
