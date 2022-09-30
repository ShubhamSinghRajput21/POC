import {actions} from '../actions/recommend';
import {
  getDefaultStatus,
  getErrorStatus,
  getResponseDataFromAction,
  getStartStatus,
  getSuccessStatus,
} from '../helpers';

export const initialState = Object.freeze({
  recommendations: [],
  profile: null,
  status: getDefaultStatus(),
});

const recommend = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PROFILE:
      return {...state, profile: action.profile};
    case actions.SET_DEFAULT_STATUS:
    case actions.GET_RECOMMENDATIONS_REQUEST:
    case actions.GET_PROFILE_BY_ID_REQUEST:
      return {...state, status: getStartStatus()};
    case actions.GET_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        recommendations: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_PROFILE_BY_ID_SUCCESS:
      return {
        ...state,
        profile: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_RECOMMENDATIONS_FAILED:
    case actions.GET_PROFILE_BY_ID_FAILED:
      return {...state, status: getErrorStatus(action.err)};
    default:
      return state;
  }
};

export default recommend;
