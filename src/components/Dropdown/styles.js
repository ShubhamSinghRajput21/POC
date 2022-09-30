const createStyles = theme => ({
  container: {
    elevation: theme.shadow.baseUnit,
  },
  dropDown: hideRadius => {
    return {
      marginTop: theme.spacing.baseUnit,
      width: '100%',
      borderRadius: 8,
      elevation: theme.shadow.baseUnit,
      borderBottomLeftRadius: !hideRadius ? 8 : 0,
      borderBottomRightRadius: !hideRadius ? 8 : 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.white,
      paddingHorizontal: theme.spacing.baseUnit2,
      paddingVertical: theme.spacing.paddingVertical + 2,
    };
  },
  dropDownView: {
    width: '100%',
    elevation: theme.shadow.baseUnit,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.baseUnit2,
    paddingVertical: theme.spacing.paddingVertical + 2,
  },
  text: {
    ...theme.typography.regular.small600,
    color: theme.colors.black200,
  },
});

export default createStyles;
