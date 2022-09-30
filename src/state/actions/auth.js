import {BaseActions} from '../helpers';

export const actions = new BaseActions(
  'auth',
  ['SET_DEFAULT_STATUS'],
  ['GET_OTP', 'VERIFY_OTP'],
);

export const getOtp = data => ({
  type: actions.GET_OTP,
  data,
});

export const verifyOtp = otp => ({
  type: actions.VERIFY_OTP,
  otp,
});

export const setDefaultStatus = () => ({
  type: actions.SET_DEFAULT_STATUS,
});
