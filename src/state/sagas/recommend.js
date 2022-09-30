import {push} from 'connected-react-router';
import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import {actions} from '../actions/recommend';
import {Reporter, task} from '../helpers';
import {RecommendService} from '../services';

export function* handleGetRecommendations({limit, offset}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_RECOMMENDATIONS),
      Service: RecommendService,
      promise: (x: RecommendService) => x.getRecommendations(limit, offset),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetRecommendations', err);
  }
}
export function* handleGetProfileById({id}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_PROFILE_BY_ID),
      Service: RecommendService,
      promise: (x: RecommendService) => x.getProfileById(id),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetProfileById', err);
  }
}

export default function* recommendSagas() {
  yield all([
    takeLatest(actions.GET_RECOMMENDATIONS, handleGetRecommendations),
    takeLatest(actions.GET_PROFILE_BY_ID, handleGetProfileById),
  ]);
}
