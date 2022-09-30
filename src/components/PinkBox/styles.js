const createStyles = theme => ({
  container: {
    borderRadius: 8,
    paddingVertical: theme.spacing.baseUnit / 2,
    paddingHorizontal: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.brandSecondary,
    marginTop: theme.spacing.baseUnit,
    marginRight: theme.spacing.baseUnit,
  },
  text: {
    ...theme.typography.regular.small600,
    color: theme.colors.white,
  },
});

export default createStyles;
