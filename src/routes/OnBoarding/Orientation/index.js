import {connect} from 'react-redux';
import {flowTypeEnum, onboardingStatusEnum} from '../../../model';
import {setProfile} from '../../../state/actions/account';
import {selectProfile, selectStatus} from '../../../state/selectors/account';
import {Orientation} from '../../Commons';

export default connect(
  state => ({
    status: selectStatus(state),
    profile: selectProfile(state),
    flowType: flowTypeEnum.ONBOARDING,
  }),
  dispatch => ({
    onSubmit: data => {
      dispatch(
        setProfile(
          {
            ...data,
            onboardingStatus: onboardingStatusEnum.SEXUAL_ORIENTATION,
          },
          true,
        ),
      );
    },
  }),
)(Orientation);
