const createStyles = theme => ({
  container: {
    paddingTop: theme.spacing.baseUnit2 * 2,
  },
  back: {
    marginLeft: theme.spacing.marginLeft * 2,
  },
  title: {
    marginTop: theme.spacing.baseUnit2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skip: {
    marginRight: theme.spacing.baseUnit2,
  },
});

export default createStyles;
