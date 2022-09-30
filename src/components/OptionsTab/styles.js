const createStyles = theme => ({
  container: {
    height: theme.dimensions.inputHeight,
    width: theme.dimensions.inputWidth,
    borderRadius: theme.dimensions.borderRadius,
    alignSelf: 'center',
    flexDirection: 'row',
    padding: theme.spacing.baseUnit / 2,
    elevation: theme.shadow.baseUnit,
    backgroundColor: theme.colors.white,
    marginBottom: theme.spacing.baseUnit2,
  },
  button: {
    flex: 1,
    borderRadius: theme.dimensions.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    backgroundColor: theme.colors.brand,
  },
  text: {
    ...theme.typography.regular.mediumBold,
    color: theme.colors.black300,
  },
  textSelected: {
    color: theme.colors.white,
  },
});

export default createStyles;
