import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router';
import Otp from './Otp';
import Phone from './Phone';

const Login = ({match}) => {
  return (
    <Switch>
      <Route path={`${match.url}/phone`} component={Phone} />
      <Route path={`${match.url}/otp`} component={Otp} />
      <Redirect from={match.url} to={`${match.url}/phone`} />
    </Switch>
  );
};

export default connect(null, {})(Login);
