import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './routes';
import configureStore, {history} from './state';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <SafeAreaProvider>
            <Switch>
              <Route path="/" component={Routes} />
            </Switch>
          </SafeAreaProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
