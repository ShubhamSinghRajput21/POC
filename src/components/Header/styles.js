const createStyles = theme => ({
  container: {
    position: 'relative',
    height: 40,
    justifyContent: 'center',
    backgroundColor: theme.colors.grey600,
  },
  back: {
    marginLeft: theme.spacing.marginLeft * 2,
  },
  title: {
    position: 'absolute',
    alignSelf: 'center',
    ...theme.typography.title.mediumBold,
    color: theme.colors.black,
  },
  eye: {
    position: 'absolute',
    right: theme.spacing.marginLeft * 2,
  },
});

export default createStyles;
