const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  scrollView: {
    paddingRight: theme.spacing.baseUnit2,
    paddingBottom: theme.spacing.baseUnit * 9,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default createStyles;
