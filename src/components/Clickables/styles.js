const createStyles = theme => ({
  selectedContainer: {
    width: '91%',
    alignSelf: 'center',
    borderRadius: 8,
    height: 36,
    justifyContent: 'center',
    paddingLeft: theme.spacing.baseUnit,
    marginBottom: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.brand500,
  },
  container: {
    width: '91%',
    alignSelf: 'center',
    borderRadius: 8,
    height: 36,
    justifyContent: 'center',
    paddingLeft: theme.spacing.baseUnit,
    marginBottom: theme.spacing.baseUnit2,
    borderColor: theme.colors.brand500,
    borderWidth: 1,
  },
  selectedText: {
    ...theme.typography.regular.medium800,
    color: theme.colors.white,
  },
  text: {
    ...theme.typography.regular.medium600,
    color: theme.colors.black400,
  },
});

export default createStyles;
