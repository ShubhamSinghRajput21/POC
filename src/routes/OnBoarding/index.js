import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router';
import About from './About';
import Basic from './Basic';
import Education from './Education';
import Guideline from './Guideline';
import InterestedIn from './InterestedIn';
import Interests from './Interests';
import Job from './Job';
import Orientation from './Orientation';
import Upload from './Upload';
import Verification from './Verification';

const OnBoarding = ({match}) => {
  return (
    <Switch>
      <Route path={`${match.url}/basic`} component={Basic} />
      <Route path={`${match.url}/sexualOrientation`} component={Orientation} />
      <Route path={`${match.url}/about`} component={About} />
      <Route path={`${match.url}/education`} component={Education} />
      <Route path={`${match.url}/job`} component={Job} />
      <Route path={`${match.url}/interests`} component={Interests} />
      <Route path={`${match.url}/uploadPictures`} component={Upload} />
      <Route path={`${match.url}/interestedIn`} component={InterestedIn} />
      <Route path={`${match.url}/guideLine`} component={Guideline} />
      <Route
        path={`${match.url}/pictureVerification`}
        component={Verification}
      />
      <Redirect from={match.url} to={`${match.url}/sexualOrientation`} />
    </Switch>
  );
};

export default connect(null, {})(OnBoarding);
