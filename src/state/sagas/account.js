import {push, goBack} from 'connected-react-router';
import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import {onboardingStepRoute} from '../../model';
import {actions} from '../actions/account';
import {getResponseData, Reporter, task} from '../helpers';
import {AccountService} from '../services';

const handleOnboardingStatusRedirection = response => {
  return (
    onboardingStepRoute[getResponseData(response)?.nextOnboardingStep] ||
    onboardingStepRoute.COMPLETED
  );
};

export function* handleGetProfile({redirect}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_PROFILE),
      Service: AccountService,
      promise: (x: AccountService) => x.getProfile(),
    };
    const response = yield call(task, action);
    if (redirect) {
      yield put(push(handleOnboardingStatusRedirection(response)));
    }
  } catch (err) {
    Reporter.putError('handleGetProfile', err);
  }
}

export function* handleSetProfile({data, redirect}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.SET_PROFILE),
      Service: AccountService,
      promise: (x: AccountService) => x.setProfile(data),
    };
    const response = yield call(task, action);
    if (redirect) {
      yield put(push(handleOnboardingStatusRedirection(response)));
    }
  } catch (err) {
    Reporter.putError('handleSetProfile', err);
  }
}

export function* handleGetAllInterests() {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_ALL_INTERESTS),
      Service: AccountService,
      promise: (x: AccountService) => x.getAllInterests(),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetAllInterests', err);
  }
}

export function* handleGetInterests() {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_INTERESTS),
      Service: AccountService,
      promise: (x: AccountService) => x.getInterests(),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetInterests', err);
  }
}

export function* handleSetInterests({data}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.SET_INTERESTS),
      Service: AccountService,
      promise: (x: AccountService) => x.setInterests(data),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleSetInterests', err);
  }
}

export function* handleGetPhotos() {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_PHOTOS),
      Service: AccountService,
      promise: (x: AccountService) => x.getPhotos(),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetPhotos', err);
  }
}

export function* handleSetPhotos({data}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.SET_PHOTOS),
      Service: AccountService,
      promise: (x: AccountService) => x.setPhotos(data),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleSetPhotos', err);
  }
}

export function* handleDeletePhotos({data}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.DELETE_PHOTOS),
      Service: AccountService,
      promise: (x: AccountService) => x.deletePhotos(data),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleDeletePhotos', err);
  }
}

export function* handleGetAllQuestions() {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_ALL_QUESTIONS),
      Service: AccountService,
      promise: (x: AccountService) => x.getAllQuestions(),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetAllQuestions', err);
  }
}

export function* handleGetQuestionnaire() {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_QUESTIONNAIRE),
      Service: AccountService,
      promise: (x: AccountService) => x.getQuestionnaire(),
    };
    yield call(task, action);
  } catch (err) {
    Reporter.putError('handleGetQuestionnaire', err);
  }
}

export function* handleSetQuestionnaire({data, redirect}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.SET_QUESTIONNAIRE),
      Service: AccountService,
      promise: (x: AccountService) => x.setQuestionnaire(data),
    };
    yield call(task, action);
    if (redirect) {
      yield put(goBack());
    }
  } catch (err) {
    Reporter.putError('handleSetQuestionnaire', err);
  }
}

export default function* accountSagas() {
  yield all([
    takeLatest(actions.GET_PROFILE, handleGetProfile),
    takeLatest(actions.SET_PROFILE, handleSetProfile),
    takeLatest(actions.GET_INTERESTS, handleGetInterests),
    takeLatest(actions.SET_INTERESTS, handleSetInterests),
    takeLatest(actions.GET_ALL_INTERESTS, handleGetAllInterests),
    takeLatest(actions.GET_PHOTOS, handleGetPhotos),
    takeLatest(actions.SET_PHOTOS, handleSetPhotos),
    takeLatest(actions.DELETE_PHOTOS, handleDeletePhotos),
    takeLatest(actions.GET_ALL_QUESTIONS, handleGetAllQuestions),
    takeLatest(actions.GET_QUESTIONNAIRE, handleGetQuestionnaire),
    takeLatest(actions.SET_QUESTIONNAIRE, handleSetQuestionnaire),
  ]);
}
