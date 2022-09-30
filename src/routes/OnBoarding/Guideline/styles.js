const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  kouple: {
    marginTop: theme.spacing.baseUnit,
  },
  back: {
    width: 30,
    marginTop: theme.spacing.baseUnit2 * 2,
    marginLeft: theme.spacing.marginLeft * 2,
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: theme.spacing.marginTop * 2,
  },
  koupleText: {
    marginTop: theme.spacing.baseUnit + 4,
  },
  row: {
    flexDirection: 'row',
    marginTop: theme.spacing.baseUnit2,
    paddingHorizontal: theme.spacing.baseUnit * 3,
    alignItems: 'flex-start',
  },
  column: {
    marginLeft: theme.spacing.baseUnit2 + 2,
    paddingRight: theme.spacing.baseUnit * 3,
  },
  mainTitle: {
    ...theme.typography.regular.extraLargeBold,
    color: theme.colors.black600,
    textAlign: 'center',
  },
  mainDescription: {
    ...theme.typography.title.small,
    color: theme.colors.black400,
    textAlign: 'center',
  },
  title: {
    ...theme.typography.regular.regularLarge600,
    color: theme.colors.black600,
  },
  description: {
    ...theme.typography.title.small,
    color: theme.colors.black400,
  },
  titleView: {
    marginTop: theme.spacing.baseUnit2 * 2,
    marginBottom: theme.spacing.baseUnit * 5,
  },
  tick: {
    marginTop: theme.spacing.baseUnit / 2,
  },
});

export default createStyles;
