const createStyles = theme => ({
  footer: {
    bottom: 0,
    height: 64,
    elevation: theme.shadow.baseUnit2,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    marginTop: theme.spacing.baseUnit2,
  },
  iconContainer: {
    flex: 1,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedIconContainer: focused => {
    return {
      width: 54,
      height: 54,
      borderRadius: 27,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: focused ? theme.colors.brand : theme.colors.white,
    };
  },
});

export default createStyles;
