const createStyles = theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing.baseUnit2,
  },
  firstText: {
    ...theme.typography.regular.mediumBold,
    color: theme.colors.black300,
  },
  secondText: {
    ...theme.typography.regular.small,
    color: theme.colors.black300,
  },
});

export default createStyles;
