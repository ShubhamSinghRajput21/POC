import {push} from 'connected-react-router';
import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import {getProfile} from '../actions/account';
import {actions} from '../actions/auth';
import {Reporter, task} from '../helpers';
import {selectPhoneNumber} from '../selectors/auth';
import {AuthService} from '../services';

export function* handleGetOtp({data}) {
  try {
    const action = {
      types: actions.sideEffectsFor(actions.GET_OTP),
      Service: AuthService,
      promise: (x: AuthService) => x.getOtp(data),
    };
    yield call(task, action);
    yield put(push('/login/otp'));
  } catch (err) {
    Reporter.putError('handleGetOtp', err);
  }
}

export function* handleVerifyOtp({otp}) {
  const phoneNumber = yield select(selectPhoneNumber);
  let data = {
    phoneNumber,
    otp,
  };
  try {
    const action = {
      types: actions.sideEffectsFor(actions.VERIFY_OTP),
      Service: AuthService,
      promise: (x: AuthService) => x.verifyOtp(data),
    };
    yield call(task, action);
    yield put(getProfile(true));
  } catch (err) {
    Reporter.putError('handleVerifyOtp', err);
  }
}

export default function* authSagas() {
  yield all([
    takeLatest(actions.GET_OTP, handleGetOtp),
    takeLatest(actions.VERIFY_OTP, handleVerifyOtp),
  ]);
}
