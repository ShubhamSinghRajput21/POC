import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import account from './account';
import activity from './activity';
import auth from './auth';
import recommend from './recommend';
import ui from './ui';

// TODO: Add reset-store functionality
const createRootReducer = history =>
  combineReducers({
    activity,
    account,
    recommend,
    auth,
    router: connectRouter(history),
    ui,
  });

export default createRootReducer;
