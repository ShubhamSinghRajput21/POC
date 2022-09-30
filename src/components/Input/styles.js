const createStyles = theme => ({
  inputView: {
    height: theme.dimensions.inputHeight,
    marginBottom: theme.spacing.baseUnit2,
    borderRadius: theme.dimensions.borderRadius,
    width: theme.dimensions.inputWidth,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: theme.shadow.baseUnit,
    paddingLeft: theme.spacing.baseUnit,
    backgroundColor: theme.colors.white,
  },
  errorText: {
    color: theme.colors.red,
    marginTop: -theme.spacing.baseUnit,
    marginLeft: theme.spacing.baseUnit2,
    marginBottom: theme.spacing.baseUnit2,
  },
});

export default createStyles;
