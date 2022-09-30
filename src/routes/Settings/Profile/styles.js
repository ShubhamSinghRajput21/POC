import {SCREEN_WIDTH} from '../../../utils/commonFunctions';

const createStyles = theme => ({
  screenContainer: {
    backgroundColor: theme.colors.grey300,
    paddingBottom: theme.spacing.baseUnit * 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.baseUnit,
    paddingHorizontal: theme.spacing.baseUnit2,
  },
  person2: {
    marginTop: theme.spacing.baseUnit - 2,
  },
  settings: {
    marginTop: theme.spacing.baseUnit - 2,
  },
  imageContainer: {
    width: 104,
    height: 104,
    elevation: 5,
    borderRadius: 52,
    backgroundColor: theme.colors.grey300,
  },
  image: {
    width: 104,
    height: 104,
    borderRadius: 52,
  },
  svg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 104,
    height: 104,
    borderRadius: 52,
  },
  pencil: {
    position: 'absolute',
    top: 5,
    right: 5,
    borderRadius: 11,
    backgroundColor: theme.colors.white,
  },
  headerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    ...theme.typography.regular.largeBold,
    color: theme.colors.black,
  },
  blueTick: {
    marginLeft: theme.spacing.baseUnit / 2,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.baseUnit,
  },
  statusView: {
    width: '91%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginTop: theme.spacing.baseUnit + 4,
    borderRadius: theme.spacing.baseUnit2,
    paddingVertical: theme.spacing.baseUnit + 2,
    paddingHorizontal: theme.spacing.baseUnit + 2,
    backgroundColor: theme.colors.white,
  },
  statusText: {
    ...theme.typography.regular.medium,
    color: theme.colors.brandSecondary,
  },
  cross: {
    position: 'absolute',
    right: theme.spacing.baseUnit + 2,
  },
  scoreView: {
    width: '91%',
    elevation: 5,
    alignSelf: 'center',
    padding: theme.spacing.baseUnit,
    backgroundColor: theme.colors.white,
    borderRadius: theme.spacing.baseUnit2,
    marginTop: theme.spacing.baseUnit + 4,
  },
  scoreFirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressView: {
    width: '100%',
    height: 8,
    backgroundColor: theme.colors.lightBrand,
    marginVertical: theme.spacing.baseUnit,
    borderRadius: 4,
  },
  progress: width => {
    return {
      borderRadius: 4,
      backgroundColor: theme.colors.brandSecondary,
      height: 8,
      width: `${width}%`,
    };
  },
  setupProfile: {
    ...theme.typography.regular.small600,
    color: theme.colors.black400,
  },
  yourScore: {
    ...theme.typography.regular.small,
    color: theme.colors.black400,
  },
  score: {
    ...theme.typography.regular.smallBold,
    color: theme.colors.brandSecondary,
  },
  completeYourProfile: {
    ...theme.typography.regular.small,
    color: theme.colors.grey500,
  },
  premiumView: {
    width: '91%',
    elevation: 5,
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.spacing.baseUnit2,
    marginTop: theme.spacing.baseUnit + 4,
  },
  getPremium: {
    ...theme.typography.regular.extraLargeBold,
    color: theme.colors.black400,
    alignSelf: 'center',
    marginTop: theme.spacing.baseUnit2,
    marginBottom: theme.spacing.baseUnit,
  },
  featureView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: theme.spacing.baseUnit2,
    marginBottom: theme.spacing.baseUnit + 4,
  },
  featureText: {
    ...theme.typography.regular.small600,
    color: theme.colors.grey500,
    marginLeft: theme.spacing.baseUnit - 2,
  },
  plansView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  selectedPlans: {
    width: '29%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.darkPink,
    borderRadius: theme.spacing.baseUnit,
    paddingVertical: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.brandSecondary,
  },
  plans: {
    width: '29%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.grey500,
    borderRadius: theme.spacing.baseUnit,
    paddingVertical: theme.spacing.baseUnit2,
  },
  selectedNumber: {
    ...theme.typography.regular.extraExtraLargeBold,
    color: theme.colors.white,
  },
  number: {
    ...theme.typography.regular.extraExtraLargeBold,
    color: theme.colors.black500,
  },
  selectedPrice: {
    ...theme.typography.regular.smallBold,
    color: theme.colors.white,
    marginTop: theme.spacing.baseUnit,
  },
  price: {
    ...theme.typography.regular.smallBold,
    color: theme.colors.black500,
    marginTop: theme.spacing.baseUnit,
  },
  selectedType: {
    ...theme.typography.regular.small,
    color: theme.colors.white,
  },
  type: {
    ...theme.typography.regular.small,
    color: theme.colors.black500,
  },
  termsCond: {
    ...theme.typography.regular.extraSmallBold,
    color: theme.colors.blue,
    marginLeft: theme.spacing.baseUnit2,
    marginTop: theme.spacing.baseUnit,
  },
  btn: {
    position: 'relative',
    bottom: 0,
    marginVertical: theme.spacing.baseUnit + 4,
  },
});

export default createStyles;
