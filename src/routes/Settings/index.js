import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router';
import Blocked from './Blocked';
import Date from './Date';
import EditProfile from './EditProfile';
import FeedBack from './FeedBack';
import Interests from './Interests';
import Languages from './Languages';
import LivingIn from './LivingIn';
import Orientaion from './Orientation';
import Profile from './Profile';
import Questionnaire from './Questionnaire';
import Setting from './Setting';

const Settings = ({match}) => {
  return (
    <Switch>
      <Route path={`${match.url}/date`} component={Date} />
      <Route path={`${match.url}/profile`} component={Profile} />
      <Route path={`${match.url}/setting`} component={Setting} />
      <Route path={`${match.url}/feedBack`} component={FeedBack} />
      <Route path={`${match.url}/livingIn`} component={LivingIn} />
      <Route path={`${match.url}/orientation`} component={Orientaion} />
      <Route path={`${match.url}/myInterests`} component={Interests} />
      <Route path={`${match.url}/editProfile`} component={EditProfile} />
      <Route path={`${match.url}/blockedContacts`} component={Blocked} />
      <Route path={`${match.url}/selectLanguage`} component={Languages} />
      <Route path={`${match.url}/questionnaire`} component={Questionnaire} />
      <Redirect from={match.url} to={`${match.url}/profile`} />
    </Switch>
  );
};

export default connect(null, {})(Settings);
