const createStyles = theme => ({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.baseUnit,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 300,
    paddingHorizontal: theme.spacing.paddingHorizontal,
    backgroundColor: theme.colors.grey600,
    marginRight: theme.spacing.baseUnit / 2,
  },
  attachments: {
    marginRight: theme.spacing.marginRight,
  },
  input: {
    flex: 1,
    marginRight: theme.spacing.baseUnit,
  },
});

export default createStyles;
