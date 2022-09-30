const createStyles = theme => ({
  container: {
    marginTop: theme.spacing.baseUnit,
    width: '100%',
    elevation: theme.shadow.baseUnit - 2,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.grey600,
    paddingRight: theme.spacing.paddingRight * 2,
    paddingVertical: theme.spacing.paddingVertical + 2,
  },
  upperText: {
    ...theme.typography.regular.small,
    color: theme.colors.black200,
  },
  lowerText: {
    ...theme.typography.regular.mediumBold,
    color: theme.colors.brand500,
    marginTop: theme.spacing.baseUnit,
  },
});

export default createStyles;
