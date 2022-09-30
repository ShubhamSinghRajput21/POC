const createStyles = theme => ({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.baseUnit2,
  },
  numberContainer: {
    height: theme.dimensions.inputHeight,
    borderRadius: theme.dimensions.borderRadius,
    width: '100%',
    justifyContent: 'center',
    elevation: theme.shadow.baseUnit,
    marginTop: theme.spacing.baseUnit2,
    marginBottom: theme.spacing.baseUnit,
    paddingLeft: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.grey600,
  },
  emailInput: {
    flex: 1,
  },
  inputContainerStyle: {
    marginBottom: theme.spacing.baseUnit,
    width: '100%',
  },
  feedBackContainer: {
    height: 234,
    width: '100%',
    marginBottom: theme.spacing.baseUnit,
  },
  feedBackInput: {
    height: 234,
    width: '100%',
    textAlignVertical: 'top',
  },
  btn: {
    width: '100%',
  },
  errorStyle: {
    marginLeft: 0,
    marginTop: 0,
  },
});

export default createStyles;
