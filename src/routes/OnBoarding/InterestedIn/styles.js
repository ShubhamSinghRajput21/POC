const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  image: {
    width: '91%',
    height: 441,
    alignSelf: 'center',
    marginTop: theme.spacing.baseUnit2 + 4,
    borderRadius: 8,
  },
  screenContainer: {
    paddingTop: theme.spacing.baseUnit2 + 4,
  },
  genderContainer: {
    width: '91%',
    height: 40,
    elevation: theme.shadow.baseUnit,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.baseUnit2,
    alignSelf: 'center',
    marginBottom: theme.spacing.baseUnit,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    flexDirection: 'row',
  },
  selectedGender: {
    ...theme.typography.regular.regular600,
    color: theme.colors.brand,
  },
  gender: {
    ...theme.typography.regular.regular600,
    color: theme.colors.black200,
  },
});

export default createStyles;
