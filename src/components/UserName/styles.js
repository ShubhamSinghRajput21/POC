const createStyles = theme => ({
  userName: {
    ...theme.typography.title.large,
    color: theme.colors.white,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blueTick: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing.baseUnit,
    backgroundColor: theme.colors.white,
  },
});

export default createStyles;
