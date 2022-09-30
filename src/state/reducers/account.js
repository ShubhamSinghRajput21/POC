import {actions} from '../actions/account';
import {
  getDefaultStatus,
  getErrorStatus,
  getResponseDataFromAction,
  getStartStatus,
  getSuccessStatus,
} from '../helpers';

export const initialState = Object.freeze({
  profile: null,
  allInterests: [],
  interests: [],
  userPhotos: [],
  allQuestions: [],
  questionsResponse: [],
  status: getDefaultStatus(),
});

const account = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DEFAULT_STATUS:
    case actions.GET_PROFILE_REQUEST:
    case actions.SET_PROFILE_REQUEST:
    case actions.GET_INTERESTS_REQUEST:
    case actions.SET_INTERESTS_REQUEST:
    case actions.GET_ALL_INTERESTS_REQUEST:
    case actions.GET_PHOTOS_REQUEST:
    case actions.SET_PHOTOS_REQUEST:
    case actions.DELETE_PHOTOS_REQUEST:
    case actions.GET_ALL_QUESTIONS_REQUEST:
    case actions.GET_QUESTIONNAIRE_REQUEST:
    case actions.SET_QUESTIONNAIRE_REQUEST:
      return {...state, status: getStartStatus()};
    case actions.GET_PROFILE_SUCCESS:
    case actions.SET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_INTERESTS_SUCCESS:
    case actions.SET_INTERESTS_SUCCESS:
      return {
        ...state,
        interests: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_ALL_INTERESTS_SUCCESS:
      return {
        ...state,
        allInterests: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_PHOTOS_SUCCESS:
    case actions.SET_PHOTOS_SUCCESS:
    case actions.DELETE_PHOTOS_REQUEST:
      return {
        ...state,
        userPhotos: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_QUESTIONNAIRE_SUCCESS:
    case actions.SET_QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        questionsResponse: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_ALL_QUESTIONS_SUCCESS:
      return {
        ...state,
        allQuestions: getResponseDataFromAction(action),
        status: getSuccessStatus(),
      };
    case actions.GET_PROFILE_FAILED:
    case actions.SET_PROFILE_FAILED:
    case actions.GET_INTERESTS_FAILED:
    case actions.SET_INTERESTS_FAILED:
    case actions.GET_ALL_INTERESTS_FAILED:
    case actions.GET_PHOTOS_FAILED:
    case actions.SET_PHOTOS_FAILED:
    case actions.DELETE_PHOTOS_FAILED:
    case actions.GET_ALL_QUESTIONS_FAILED:
    case actions.GET_QUESTIONNAIRE_FAILED:
    case actions.SET_QUESTIONNAIRE_FAILED:
      return {...state, status: getErrorStatus(action.err)};
    default:
      return state;
  }
};

export default account;
