import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router';
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dashboard2';

const Home = ({match}) => {
  return (
    <Switch>
      <Route path={`${match.url}/dashboard1`} component={Dashboard1} />
      <Route path={`${match.url}/dashboard2`} component={Dashboard2} />
      <Redirect from={match.url} to={`${match.url}/dashboard1`} />
    </Switch>
  );
};

export default connect(null, {})(Home);
