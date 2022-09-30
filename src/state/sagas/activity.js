import {push} from 'connected-react-router';
import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import {actions} from '../actions/activity';
import {Reporter, task} from '../helpers';
import {ActivityService} from '../services';

export function* handleGetLikes() {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_LIKES),
      Service: ActivityService,
      promise: (x: ActivityService) => x.getLikes(),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetLikes', err);
  }
}

export function* handleGetFeedback() {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_FEEDBACK),
      Service: ActivityService,
      promise: (x: ActivityService) => x.getFeedback(),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetFeedback', err);
  }
}

export function* handleSetFeedback({data}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.SET_FEEDBACK),
      Service: ActivityService,
      promise: (x: ActivityService) => x.setFeedback(data),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleSetFeedback', err);
  }
}

export function* handleGetMatches() {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_MATCHES),
      Service: ActivityService,
      promise: (x: ActivityService) => x.getMatches(),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetMatches', err);
  }
}

export function* handleSetLikes({data}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.SET_LIKES),
      Service: ActivityService,
      promise: (x: ActivityService) => x.setLikes(data),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleSetLikes', err);
  }
}

export function* handleGetPlans() {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_PLANS),
      Service: ActivityService,
      promise: (x: ActivityService) => x.getPlans(),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetPlans', err);
  }
}

export function* handleGetAppSettings() {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_APP_SETTINGS),
      Service: ActivityService,
      promise: (x: ActivityService) => x.getAppSettings(),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetAppSettings', err);
  }
}

export function* handleSetAppSettings({data}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.SET_APP_SETTINGS),
      Service: ActivityService,
      promise: (x: ActivityService) => x.setAppSettings(data),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleSetAppSettings', err);
  }
}
export function* handleLike({data}) {
  try {
    const newData = {
      to: data,
      type: 'LIKED',
    };
    const action = {
      types: actions.sideEffectsFor(actions.LIKE),
      Service: ActivityService,
      promise: (x: ActivityService) => x.like(newData),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleLike', err);
  }
}

export function* handleDislike({data}) {
  try {
    const newData = {
      to: data,
      type: 'DISLIKE',
    };
    const action = {
      types: actions.sideEffectsFor(actions.DISLIKE),
      Service: ActivityService,
      promise: (x: ActivityService) => x.dislike(newData),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleDislike', err);
  }
}

export default function* activitySagas() {
  yield all([
    takeLatest(actions.LIKE, handleLike),
    takeLatest(actions.DISLIKE, handleDislike),
    takeLatest(actions.GET_LIKES, handleGetLikes),
    takeLatest(actions.GET_PLANS, handleGetPlans),
    takeLatest(actions.SET_LIKES, handleSetLikes),
    takeLatest(actions.GET_MATCHES, handleGetMatches),
    takeLatest(actions.GET_FEEDBACK, handleGetFeedback),
    takeLatest(actions.SET_FEEDBACK, handleSetFeedback),
    takeLatest(actions.SET_APP_SETTINGS, handleSetAppSettings),
    takeLatest(actions.GET_APP_SETTINGS, handleGetAppSettings),
  ]);
}
