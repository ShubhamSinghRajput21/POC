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
});

export default createStyles;
