import {BaseActions} from '../helpers';

export const actions = new BaseActions(
  'recommend',
  ['SET_DEFAULT_STATUS', 'SET_PROFILE'],
  ['GET_RECOMMENDATIONS', 'GET_PROFILE_BY_ID'],
);

export const getRecommendations = (offset = 0, limit = 10) => ({
  type: actions.GET_RECOMMENDATIONS,
  limit,
  offset,
});

export const getProfileById = id => ({
  type: actions.GET_PROFILE_BY_ID,
  id,
});

export const setProfile = profile => ({
  type: actions.SET_PROFILE,
  profile,
});

export const setDefaultStatus = () => ({
  type: actions.SET_DEFAULT_STATUS,
});
