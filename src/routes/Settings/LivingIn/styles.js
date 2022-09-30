import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../utils/commonFunctions';

const createStyles = theme => ({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  search: {
    width: '91%',
    marginTop: theme.spacing.baseUnit2,
  },
  container: {
    height: SCREEN_HEIGHT,
    backgroundColor: theme.colors.grey300,
  },
  btn: {
    width: '91%',
    bottom: 56,
  },
});

export default createStyles;
