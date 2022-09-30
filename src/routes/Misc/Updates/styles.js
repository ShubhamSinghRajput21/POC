const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
    paddingHorizontal: theme.spacing.baseUnit2,
    alignItems: 'center',
  },
  notNowBtn: {alignSelf: 'flex-end', marginTop: theme.spacing.baseUnit * 3},
  notNow: {
    ...theme.typography.title.smallBold,
    color: theme.colors.brandSecondary,
  },
  noInternetSvg: {
    marginTop: theme.spacing.marginTop * 10,
  },
  noInternetText: {
    ...theme.typography.regular.largeBold,
    color: theme.colors.brand500,
    marginTop: theme.spacing.baseUnit2 * 3,
  },
  pleaseCheckYourInernet: {
    ...theme.typography.title.small,
    color: theme.colors.black200,
    textAlign: 'center',
    marginTop: theme.spacing.baseUnit,
  },
  btn: {
    width: '100%',
  },
});

export default createStyles;
