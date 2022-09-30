const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  header: {
    marginTop: theme.spacing.baseUnit2 * 4,
  },
  addNumberRow: {
    marginTop: theme.spacing.marginTop * 2,
    marginHorizontal: theme.spacing.baseUnit2,
    flexDirection: 'row',
  },
  codeView: {
    width: '15%',
    height: theme.dimensions.inputHeight,
    elevation: theme.shadow.baseUnit,
    borderRadius: theme.dimensions.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    paddingVertical: theme.spacing.paddingVertical,
  },
  codeText: {
    color: theme.colors.black100,
    ...theme.typography.regular.medium600,
    marginRight: theme.spacing.marginRight / 2,
  },
  containerStyle: {
    marginLeft: theme.spacing.baseUnit,
  },
  inputContainerStyle: {
    flex: 1,
    marginLeft: theme.spacing.baseUnit,
  },
  byClickingNext: {
    marginLeft: theme.spacing.baseUnit2,
    color: theme.colors.black200,
    ...theme.typography.small,
  },
  tAndC: {
    color: theme.colors.brand,
  },
  errorStyle: {
    marginTop: -theme.spacing.baseUnit,
    marginBottom: theme.spacing.baseUnit2,
  },
});

export default createStyles;
