const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  headerText: {
    ...theme.typography.regular.medium800,
    color: theme.colors.grey500,
    marginTop: theme.spacing.baseUnit2,
    marginLeft: theme.spacing.baseUnit2,
  },
  clickables: {
    marginTop: theme.spacing.baseUnit2,
  },
  progressContainer: {
    width: '91%',
    height: 4,
    alignSelf: 'center',
    borderRadius: 9,
    overflow: 'hidden',
    marginTop: theme.spacing.baseUnit2 + 4,
    backgroundColor: theme.colors.lightBrand,
  },
  progress: progress => {
    return {
      width: `${progress * 100}%`,
      height: 4,
      backgroundColor: theme.colors.brand500,
    };
  },
});

export default createStyles;
