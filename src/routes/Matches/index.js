import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router';
import Likes from './Likes';
import Match from './Match';
import MatchScreen from './MatchScreen';

const Chat = ({match}) => {
  return (
    <Switch>
      <Route path={`${match.url}/match`} component={Match} />
      <Route path={`${match.url}/likes`} component={Likes} />
      <Route path={`${match.url}/matchScreen`} component={MatchScreen} />
      <Redirect from={match.url} to={`${match.url}/match`} />
    </Switch>
  );
};

export default connect(null, {})(Chat);
