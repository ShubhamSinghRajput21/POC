// TODO: fix font family in typography
const createStyles = theme => ({
  headerInnerStyle: {
    backgroundColor: theme.colors.brand,
  },
  confirmContainerStyle: {
    backgroundColor: theme.colors.brand,
  },
  cancelContainerStyle: {
    backgroundColor: '#e0e0e0',
  },
  confirmTextStyle: {
    color: theme.colors.white,
  },
  cancelTextStyle: {
    color: theme.colors.black100,
  },
  titleStyle: {
    ...theme.typography.title.regularLarge,
    color: theme.colors.black300,
  },
  subtitleStyle: {
    ...theme.typography.title.medium,
  },
});

export default createStyles;
