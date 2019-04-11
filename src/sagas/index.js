import { all, fork } from 'redux-saga/effects';

import app from './app';
import github from './github';
import user from './user';
import account from './accountCreator';
import endpointExplorer from './endpointExplorer';
/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(app),
    fork(github),
    fork(user),
    fork(endpointExplorer),
    fork(account),
  ]);
}
