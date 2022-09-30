const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  imageContainer: {
    width: 250,
    height: 335,
    borderRadius: 8,
    marginRight: theme.spacing.baseUnit2,
  },
  flatlist: {
    height: 367,
    paddingTop: theme.spacing.baseUnit2,
    paddingLeft: theme.spacing.baseUnit2,
  },
  userName: {
    marginLeft: theme.spacing.baseUnit2,
  },
  smallTitle: {
    ...theme.typography.regular.mediumBold,
    color: theme.colors.grey500,
    marginLeft: theme.spacing.baseUnit2,
    marginTop: theme.spacing.baseUnit2 * 2,
  },
  description: {
    ...theme.typography.regular.medium600,
    color: theme.colors.black400,
    marginTop: theme.spacing.baseUnit,
    marginLeft: theme.spacing.baseUnit2,
  },
  pinkBoxContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginLeft: theme.spacing.baseUnit2,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing.baseUnit2 * 2,
  },
  iconCircle: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 27.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.brand300,
    backgroundColor: theme.colors.white,
  },
  reportView: {
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: theme.colors.grey600,
    paddingVertical: theme.spacing.baseUnit,
  },
  reportText: {
    ...theme.typography.regular.small300,
    textDecorationLine: 'underline',
    color: theme.colors.black,
  },
});

export default createStyles;
