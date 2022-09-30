const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
    justifyContent: 'space-between',
  },
  text: {
    alignSelf: 'center',
    ...theme.typography.regular.medium600,
    color: theme.colors.black400,
  },
  textContainer: {
    flex: 1,
    alginItems: 'center',
    justifyContent: 'center',
  },
});

export default createStyles;
