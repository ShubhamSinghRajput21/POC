import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../utils/commonFunctions';

const createStyles = theme => ({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  search: {
    width: '91%',
  },
  container: {
    height: SCREEN_HEIGHT,
    backgroundColor: theme.colors.grey300,
  },
  clickables: {
    marginTop: theme.spacing.baseUnit2,
  },
  btn: {
    width: '91%',
    bottom: 56,
  },
  text: {
    ...theme.typography.regular.medium800,
    marginLeft: theme.spacing.baseUnit * 2 + 4,
    color: theme.colors.grey500,
    marginTop: theme.spacing.baseUnit * 2,
  },
});

export default createStyles;
