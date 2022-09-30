const createStyles = theme => ({
  container: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    elevation: theme.shadow.baseUnit,
    marginTop: theme.spacing.baseUnit,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.baseUnit2,
  },
  inputStyle: {
    flex: 1,
    ...theme.typography.regular.medium,
    color: theme.colors.grey500,
  },
});

export default createStyles;
