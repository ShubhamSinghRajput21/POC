const createStyles = theme => ({
  btn: {
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: theme.dimensions.inputWidth,
    backgroundColor: theme.colors.brand,
  },
  text: {
    color: theme.colors.white,
    ...theme.typography.regular.medium600,
    marginLeft: theme.spacing.marginLeft,
  },
});

export default createStyles;
