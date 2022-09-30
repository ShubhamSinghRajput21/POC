const createStyles = theme => ({
  header: {
    padding: theme.spacing.baseUnit2,
  },
  btnContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.brand500,
    padding: theme.spacing.baseUnit / 2,
  },
  activeBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.brandSecondary,
    borderRadius: 8,
    paddingVertical: theme.spacing.baseUnit / 2,
  },
  inActiveBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: theme.spacing.baseUnit / 2,
  },
  activeText: {
    ...theme.typography.regular.regularLarge600,
    color: theme.colors.white,
  },
  inActiveText: {
    ...theme.typography.regular.regularLarge600,
    color: theme.colors.brand500,
  },
});

export default createStyles;
