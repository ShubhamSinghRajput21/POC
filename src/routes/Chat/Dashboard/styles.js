const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: theme.spacing.baseUnit2,
    paddingHorizontal: theme.spacing.baseUnit2,
  },
  searchView: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: theme.shadow.baseUnit,
    paddingLeft: theme.spacing.paddingLeft,
    marginRight: theme.spacing.baseUnit,
    backgroundColor: theme.colors.white,
  },
  input: {
    backgroundColor: 'white',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    ...theme.typography.regular.medium,
    color: theme.colors.black100,
    marginTop: theme.spacing.baseUnit,
    paddingHorizontal: theme.spacing.baseUnit2,
  },
});

export default createStyles;
