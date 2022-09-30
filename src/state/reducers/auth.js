import {actions} from '../actions/auth';
import {
  getDefaultStatus,
  getErrorStatus,
  getStartStatus,
  getSuccessStatus,
  getResponseDataFromAction,
} from '../helpers';

export const initialState = Object.freeze({
  countryCode: '+91',
  phoneNumber: null,
  expirationTime: null,
  accessToken: null,
  refreshToken: null,
  userId: null,
  status: getDefaultStatus(),
});

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_OTP:
      return {...state, phoneNumber: action.data?.phoneNumber};
    case actions.SET_DEFAULT_STATUS:
      return {...state, status: getDefaultStatus()};
    case actions.GET_OTP_REQUEST:
    case actions.VERIFY_OTP_REQUEST:
      return {...state, status: getStartStatus()};
    case actions.GET_OTP_SUCCESS:
      return {...state, status: getSuccessStatus()};
    case actions.VERIFY_OTP_SUCCESS:
      return {
        ...state,
        accessToken: getResponseDataFromAction(action)?.accessToken,
        expirationTime: getResponseDataFromAction(action)?.expirationTime,
        refreshToken: getResponseDataFromAction(action)?.refreshToken,
        userId: getResponseDataFromAction(action)?.user,
        status: getSuccessStatus(),
      };
    case actions.GET_OTP_FAILED:
    case actions.VERIFY_OTP_FAILED:
      return {...state, status: getErrorStatus(action.err)};
    default:
      return state;
  }
};

export default auth;
