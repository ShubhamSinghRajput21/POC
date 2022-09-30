import {actions} from '../actions/activity';
import {
  getDefaultStatus,
  getErrorStatus,
  getResponseDataFromAction,
  getStartStatus,
  getSuccessStatus,
} from '../helpers';

export const initialState = Object.freeze({
  likesArray: null,
  plans: null,
  likes: [],
  matches: [],
  feedback: null,
  settings: null,
  status: getDefaultStatus(),
});

const activity = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DEFAULT_STATUS:
    case actions.LIKE_REQUEST:
    case actions.DISLIKE_REQUEST:
    case actions.GET_LIKES_REQUEST:
    case actions.SET_LIKES_REQUEST:
    case actions.GET_PLANS_REQUEST:
    case actions.GET_MATCHES_REQUEST:
    case actions.GET_FEEDBACK_REQUEST:
    case actions.SET_FEEDBACK_REQUEST:
    case actions.GET_APP_SETTINGS_REQUEST:
    case actions.SET_APP_SETTINGS_REQUEST:
      return {...state, status: getStartStatus()};
    case actions.GET_LIKES_SUCCESS:
    case actions.SET_LIKES_SUCCESS:
      return {
        ...state,
        likesArray: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };

    case actions.GET_PLANS_SUCCESS:
      return {
        ...state,
        plans: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_FEEDBACK_SUCCESS:
    case actions.SET_FEEDBACK_SUCCESS:
      return {
        ...state,
        feedback: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.LIKE_SUCCESS:
    case actions.DISLIKE_SUCCESS:
      return {
        ...state,
        likes: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_MATCHES_SUCCESS:
      return {
        ...state,
        matches: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_APP_SETTINGS_SUCCESS:
    case actions.SET_APP_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.LIKE_FAILED:
    case actions.DISLIKE_FAILED:
    case actions.GET_LIKES_FAILED:
    case actions.GET_PLANS_FAILED:
    case actions.SET_LIKES_FAILED:
    case actions.GET_MATCHES_FAILED:
    case actions.GET_FEEDBACK_FAILED:
    case actions.SET_FEEDBACK_FAILED:
    case actions.GET_APP_SETTINGS_FAILED:
    case actions.SET_APP_SETTINGS_FAILED:
      return {...state, status: getErrorStatus(action.err)};
    default:
      return state;
  }
};

export default activity;
