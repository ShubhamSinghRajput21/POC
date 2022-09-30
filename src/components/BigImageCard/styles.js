const createStyles = theme => ({
  container: {
    width: '100%',
    height: 456,
    borderRadius: 8,
    marginBottom: theme.spacing.baseUnit2,
  },
  image: {
    width: '100%',
    height: 456,
    borderRadius: 8,
    zIndex: 10,
  },
  gradient: {
    width: '100%',
    height: 456,
    position: 'absolute',
    borderRadius: 8,
    zIndex: 11,
  },
  name: {
    ...theme.typography.title.large,
    color: theme.colors.white,
  },
  description: {
    ...theme.typography.regular.medium,
    color: theme.colors.white,
    marginTop: theme.spacing.baseUnit,
  },
  btn: {
    width: '100%',
    position: 'relative',
    marginBottom: theme.spacing.baseUnit,
    marginTop: theme.spacing.baseUnit2,
    bottom: 0,
  },
  bottom: {
    bottom: 0,
    paddingHorizontal: theme.spacing.baseUnit,
    position: 'absolute',
    width: '100%',
    zIndex: 12,
  },
  timerView: {
    position: 'absolute',
    zIndex: 12,
    top: theme.spacing.baseUnit,
    right: theme.spacing.baseUnit,
    alignItems: 'center',
  },
  timerText: {
    ...theme.typography.regular.extraSmallBold,
    color: theme.colors.brandSecondary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blueTick: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing.baseUnit,
    backgroundColor: theme.colors.white,
  },
});

export default createStyles;
