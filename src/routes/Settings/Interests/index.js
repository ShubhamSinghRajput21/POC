import {connect} from 'react-redux';
import {flowTypeEnum} from '../../../model';
import {
  getAllInterests,
  getInterests,
  setInterests,
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
    flowType: flowTypeEnum.SETTINGS,
  }),
  dispatch => ({
    getAllInterests: () => dispatch(getAllInterests()),
    getInterests: () => dispatch(getInterests()),
    onSubmit: data => {
      dispatch(setInterests({data}));
    },
  }),
)(Interests);
