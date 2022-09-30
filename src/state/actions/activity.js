import {BaseActions} from '../helpers';

export const actions = new BaseActions(
  'activity',
  ['SET_DEFAULT_STATUS'],
  [
    'LIKE',
    'DISLIKE',
    'GET_LIKES',
    'SET_LIKES',
    'GET_PLANS',
    'GET_MATCHES',
    'GET_FEEDBACK',
    'SET_FEEDBACK',
    'GET_APP_SETTINGS',
    'SET_APP_SETTINGS',
  ],
);

export const like = data => ({
  type: actions.LIKE,
  data,
});

export const dislike = data => ({
  type: actions.DISLIKE,
  data,
});

export const getLikes = () => ({
  type: actions.GET_LIKES,
});

export const getMatches = () => ({
  type: actions.GET_MATCHES,
});

export const setLikes = data => ({
  type: actions.SET_LIKES,
  data,
});

export const getFeedback = () => ({
  type: actions.GET_FEEDBACK,
});

export const getPlans = () => ({
  type: actions.GET_PLANS,
});

export const setFeedback = data => ({
  type: actions.SET_FEEDBACK,
  data,
});

export const getAppSettings = () => ({
  type: actions.GET_APP_SETTINGS,
});

export const setAppSettings = data => ({
  type: actions.SET_APP_SETTINGS,
  data,
});

export const setDefaultStatus = () => ({
  type: actions.SET_DEFAULT_STATUS,
});
