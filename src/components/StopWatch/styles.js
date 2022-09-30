const createStyles = theme => ({
  timerView: {
    position: 'absolute',
    zIndex: 15,
    top: theme.spacing.baseUnit,
    right: theme.spacing.baseUnit,
    alignItems: 'center',
  },
  timerText: {
    ...theme.typography.regular.extraSmallBold,
    color: theme.colors.brandSecondary,
  },
});

export default createStyles;
