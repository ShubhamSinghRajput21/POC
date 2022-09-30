import {BaseActions} from '../helpers';

export const actions = new BaseActions(
  'account',
  ['SET_DEFAULT_STATUS'],
  [
    'GET_PROFILE',
    'SET_PROFILE',
    'GET_ALL_INTERESTS',
    'GET_INTERESTS',
    'SET_INTERESTS',
    'GET_PHOTOS',
    'SET_PHOTOS',
    'DELETE_PHOTOS',
    'GET_ALL_QUESTIONS',
    'GET_QUESTIONNAIRE',
    'SET_QUESTIONNAIRE',
  ],
);

export const getProfile = (redirect = false) => ({
  type: actions.GET_PROFILE,
  redirect,
});

export const getAllQuestions = () => ({
  type: actions.GET_ALL_QUESTIONS,
});

export const getQuestionnaire = () => ({
  type: actions.GET_QUESTIONNAIRE,
});

export const setQuestionnaire = (data, redirect = false) => ({
  type: actions.SET_QUESTIONNAIRE,
  data,
  redirect,
});

export const getPhotos = () => ({
  type: actions.GET_PHOTOS,
});

export const setPhotos = data => ({
  type: actions.SET_PHOTOS,
  data,
});

export const deletePhotos = data => ({
  type: actions.DELETE_PHOTOS,
  data,
});

export const setProfile = (data, redirect = false) => ({
  type: actions.SET_PROFILE,
  data,
  redirect,
});

export const getAllInterests = () => ({
  type: actions.GET_ALL_INTERESTS,
});

export const getInterests = () => ({
  type: actions.GET_INTERESTS,
});

export const setInterests = data => ({
  type: actions.SET_INTERESTS,
  data,
});

export const setDefaultStatus = () => ({
  type: actions.SET_DEFAULT_STATUS,
});
