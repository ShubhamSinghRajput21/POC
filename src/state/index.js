import AsyncStorage from '@react-native-async-storage/async-storage';
import {routerMiddleware} from 'connected-react-router';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {history, logger} from './helpers';
import createRootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history),
);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers = composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history), logger),
  );

  const store = createStore(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
};

export {history};
export default configureStore;
