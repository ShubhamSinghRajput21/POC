const createStyles = theme => ({
  smallImageContainer: {
    width: 120,
    height: 120,
    marginTop: theme.spacing.baseUnit,
    marginRight: theme.spacing.baseUnit,
    borderRadius: theme.spacing.baseUnit,
  },
  smallImage: {
    width: 120,
    height: 120,
    borderRadius: theme.spacing.baseUnit,
  },
  horizontalScrollview: {
    paddingLeft: theme.spacing.baseUnit2,
    paddingRight: theme.spacing.baseUnit,
  },
});

export default createStyles;
