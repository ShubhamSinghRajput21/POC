import {connect} from 'react-redux';
import {flowTypeEnum, onboardingStatusEnum} from '../../../model';
import {
  getAllInterests,
  getInterests,
  setInterests,
  setProfile,
} from '../../../state/actions/account';
import {
  selectAllInterests,
  selectStatus,
  selectInterests,
} from '../../../state/selectors/account';
import {Interests} from '../../Commons';

export default connect(
  state => ({
    status: selectStatus(state),
    allInterests: selectAllInterests(state),
    interests: selectInterests(state),
    flowType: flowTypeEnum.ONBOARDING,
  }),
  dispatch => ({
    getAllInterests: () => dispatch(getAllInterests()),
    getInterests: () => dispatch(getInterests()),
    onSubmit: data => {
      dispatch(setInterests({data}));
      dispatch(
        setProfile({onboardingStatus: onboardingStatusEnum.INTERESTS}, true),
      );
    },
  }),
)(Interests);
