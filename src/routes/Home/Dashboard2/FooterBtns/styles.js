const createStyles = theme => ({
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
});

export default createStyles;
