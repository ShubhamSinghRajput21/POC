import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../utils/commonFunctions';

const createStyles = theme => ({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  container: {
    height: SCREEN_HEIGHT,
    paddingHorizontal: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.grey300,
  },
  numberContainer: {
    height: 40,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    elevation: theme.shadow.baseUnit,
    marginTop: theme.spacing.baseUnit2,
    paddingLeft: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.grey600,
  },
  emailInput: {
    height: 40,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    elevation: theme.shadow.baseUnit,
    marginTop: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.white,
    paddingLeft: theme.spacing.baseUnit2,
  },
  feedBackInput: {
    height: 284,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    textAlignVertical: 'top',
    elevation: theme.shadow.baseUnit,
    marginTop: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.baseUnit2,
  },
  btn: {
    width: '100%',
    bottom: 56,
  },
});

export default createStyles;
