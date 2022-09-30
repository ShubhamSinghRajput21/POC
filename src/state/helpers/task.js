import {call, put, select} from 'redux-saga/effects';
import {selectAccessToken, selectExpirationTime} from '../selectors/auth';

import {TokenService} from '../services';

function* task({promise, types, Service, ...rest}) {
  const [REQUEST, SUCCESS, FAILURE] = types;

  yield put({...rest, type: REQUEST});

  try {
    let result;
    if (Service) {
      const expirationTime = yield select(selectExpirationTime);
      if (expirationTime && expirationTime < new Date()) {
        // TODO: Add refresh token functionality
        console.log('expired token error: ', err);
        throw err;
      }
      const accessToken = yield select(selectAccessToken);
      const service = new Service(new TokenService(accessToken));
      result = yield call(promise, service);
    } else {
      result = yield call(promise);
    }

    yield put({
      ...rest,
      result,
      type: SUCCESS,
      receivedAt: new Date(),
    });

    return result;
  } catch (err) {
    yield put({...rest, receivedAt: new Date(), err, type: FAILURE});
    console.log('fetch helper error: ', err);
    throw err;
  }
}

export default task;
