import {all, fork} from 'redux-saga/effects';
import accountSagas from './account';
import activitySagas from './activity';
import authSagas from './auth';
import recommendSagas from './recommend';

function* watchRoot() {
  yield all([
    fork(authSagas),
    fork(accountSagas),
    fork(recommendSagas),
    fork(activitySagas),
  ]);
}

export default watchRoot;
