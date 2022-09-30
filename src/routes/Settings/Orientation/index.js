import {connect} from 'react-redux';
import {flowTypeEnum} from '../../../model';
import {setProfile} from '../../../state/actions/account';
import {selectProfile, selectStatus} from '../../../state/selectors/account';
import {Orientation} from '../../Commons';

export default connect(
  state => ({
    status: selectStatus(state),
    profile: selectProfile(state),
    flowType: flowTypeEnum.SETTINGS,
  }),
  dispatch => ({
    onSubmit: data => {
      dispatch(setProfile(data));
    },
  }),
)(Orientation);
