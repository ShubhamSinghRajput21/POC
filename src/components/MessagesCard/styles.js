const createStyles = theme => ({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    paddingVertical: theme.spacing.paddingVertical + 2,
    paddingHorizontal: theme.spacing.baseUnit2,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middle: {
    marginLeft: theme.spacing.baseUnit,
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberOfMessages: {
    paddingHorizontal: 5,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.brand,
  },
  number: {
    color: theme.colors.white,
    ...theme.typography.regular.smallBold,
  },
  time: {
    ...theme.typography.regular.extraSmall,
    color: theme.colors.grey500,
    marginTop: theme.spacing.baseUnit,
  },
  name: {
    ...theme.typography.regular.mediumBold,
    color: theme.colors.black300,
  },
  message: {
    ...theme.typography.regular.extraSmall,
    color: theme.colors.black200,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default createStyles;
