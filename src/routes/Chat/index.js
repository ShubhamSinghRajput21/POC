import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router';
import Dashboard from './Dashboard';
import Room from './Room';

const Matches = ({match}) => {
  return (
    <Switch>
      <Route path={`${match.url}/dashboard`} component={Dashboard} />
      <Route path={`${match.url}/room`} component={Room} />
      <Redirect from={match.url} to={`${match.url}/room`} />
    </Switch>
  );
};

export default connect(null, {})(Matches);
