import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router';
import NoInternet from './NoInternet';
import Updates from './Updates';
import Splash from './Splash';

const Misc = ({match}) => {
  return (
    <Switch>
      <Route path={`${match.url}/noInternet`} component={NoInternet} />
      <Route path={`${match.url}/updates`} component={Updates} />
      <Route path={`${match.url}/splash`} component={Splash} />
      <Redirect from={match.url} to={`${match.url}/splash`} />
    </Switch>
  );
};

export default connect(null, {})(Misc);
