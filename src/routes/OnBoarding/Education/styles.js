const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  text: {
    color: theme.colors.grey500,
  },
  btnContainer: {
    height: 40,
    width: '91%',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing.baseUnit2,
    elevation: theme.shadow.baseUnit,
    marginTop: theme.spacing.baseUnit2,
    backgroundColor: theme.colors.white,
  },
  smallText: {
    ...theme.typography.regular.small600,
    color: theme.colors.black,
    flex: 1,
  },
  errorStyle: {},
  tabContainerStyle: {
    marginTop: theme.spacing.baseUnit2,
  },
  header: {
    marginVertical: theme.spacing.baseUnit2,
    marginLeft: theme.spacing.baseUnit2,
  },
});

export default createStyles;
