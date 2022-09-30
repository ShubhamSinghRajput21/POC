const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  addMedia: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: theme.spacing.baseUnit2,
    paddingBottom: theme.spacing.baseUnit2 * 4,
  },
  imageContainer: {
    width: '30%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.grey600,
    borderRadius: 8,
    marginRight: theme.spacing.baseUnit,
    marginTop: theme.spacing.baseUnit2 + 4,
  },
  crossContainer: {
    position: 'absolute',
    bottom: -4,
    right: -4,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 8,
  },
});

export default createStyles;
