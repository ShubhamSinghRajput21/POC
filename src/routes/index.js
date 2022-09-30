import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, useHistory} from 'react-router';
import {ScreenView} from '../components';
import {ThemeProvider} from '../design-system';
import Chat from './Chat';
import Home from './Home';
import Login from './Login';
import Matches from './Matches';
import Misc from './Misc';
import OnBoarding from './OnBoarding';
import Settings from './Settings';

const Routes = () => {
  const [connected, setConnected] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      state.isConnected !== connected && setConnected(state.isConnected);
      if (state.isConnected === false) {
        history.push('/misc/noInternet');
      } else {
        history.goBack();
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <ThemeProvider>
      <ScreenView>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/settings" component={Settings} />
          <Route path="/chat" component={Chat} />
          <Route path="/matches" component={Matches} />
          <Route path="/misc" component={Misc} />
          <Route path="/boarding" component={OnBoarding} />
          <Redirect from="/" to="/login" />
        </Switch>
      </ScreenView>
    </ThemeProvider>
  );
};

export default connect(null, {})(Routes);
