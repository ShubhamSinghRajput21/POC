import {SCREEN_WIDTH} from '../../../utils/commonFunctions';

const createStyles = theme => ({
  screenContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.grey300,
  },
  scrollView: {
    paddingBottom: theme.spacing.baseUnit * 3,
  },
  commonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    justifyContent: 'space-between',
    marginTop: theme.spacing.baseUnit,
    paddingLeft: theme.spacing.baseUnit + 3,
    paddingRight: theme.spacing.baseUnit,
    paddingVertical: theme.spacing.baseUnit + 4,
    borderRadius: theme.spacing.baseUnit,
    backgroundColor: theme.colors.white,
  },
  commonSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailError: {
    marginTop: theme.spacing.baseUnit,
    marginLeft: 0,
    marginBottom: 0,
  },
  emailRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.baseUnit,
  },
  emailContainer: {
    width: '100%',
    marginTop: theme.spacing.baseUnit,
    marginBottom: 0,
  },
  emailInput: {
    ...theme.typography.regular.small600,
    color: theme.colors.black200,
    flex: 1,
    paddingLeft: theme.spacing.baseUnit + 3,
  },
  valueText: {
    ...theme.typography.regular.small600,
    color: theme.colors.black200,
    marginLeft: theme.spacing.baseUnit + 3,
  },
  valueText2: {
    ...theme.typography.regular.small600,
    color: theme.colors.black200,
  },
  pinkText: {
    ...theme.typography.regular.smallBold,
    color: theme.colors.brand,
    marginLeft: theme.spacing.baseUnit,
  },
  pinkText2: {
    ...theme.typography.regular.small600,
    color: theme.colors.brand,
  },
  descriptionText: {
    ...theme.typography.regular.small,
    color: theme.colors.grey500,
    marginTop: theme.spacing.baseUnit,
  },
  notVerified: {
    ...theme.typography.regular.smallBold,
    color: theme.colors.grey500,
  },
  mediumTitle: {
    marginTop: theme.spacing.baseUnit * 3,
  },
  angleRight: {
    marginRight: theme.spacing.baseUnit,
  },
  btn: {
    backgroundColor: theme.colors.grey600,
    paddingVertical: theme.spacing.baseUnit,
    marginTop: theme.spacing.baseUnit * 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOut: {
    ...theme.typography.regular.small600,
    color: theme.colors.black300,
  },
  deleteProfile: {
    ...theme.typography.regular.small600,
    color: theme.colors.red,
  },
  lastLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.baseUnit * 5,
  },
  version: {
    marginLeft: theme.spacing.baseUnit,
  },
});

export default createStyles;
