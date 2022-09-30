const createStyles = theme => ({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    marginTop: theme.spacing.baseUnit2,
    marginLeft: theme.spacing.baseUnit2,
    paddingVertical: theme.spacing.baseUnit,
    paddingHorizontal: theme.spacing.baseUnit2,
    borderColor: theme.colors.brand500,
  },
  selectedContainer: {
    borderWidth: 1,
    borderRadius: 12,
    marginTop: theme.spacing.baseUnit2,
    marginLeft: theme.spacing.baseUnit2,
    paddingVertical: theme.spacing.baseUnit,
    paddingHorizontal: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.grey600,
    borderColor: theme.colors.grey600,
  },
  text: {
    ...theme.typography.regular.smallBold,
    color: theme.colors.grey500,
  },
  selectedText: {
    ...theme.typography.regular.smallBold,
    color: theme.colors.brandSecondary,
  },
});

export default createStyles;
