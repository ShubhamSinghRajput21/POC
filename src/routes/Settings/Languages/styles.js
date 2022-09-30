import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../utils/commonFunctions';

const createStyles = theme => ({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.grey300,
  },
  btn: {
    width: '100%',
  },
});

export default createStyles;
