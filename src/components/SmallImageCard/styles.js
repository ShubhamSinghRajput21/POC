const createStyles = theme => ({
  container: {
    width: '47%',
    height: 208,
    borderRadius: 8,
    marginBottom: theme.spacing.baseUnit2,
  },
  image: {
    width: '100%',
    borderRadius: 8,
    height: 208,
    zIndex: 10,
  },
  bottom: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: theme.spacing.baseUnit,
    paddingVertical: theme.spacing.baseUnit,
    zIndex: 12,
  },
  text: {
    ...theme.typography.regular.mediumBold,
    color: theme.colors.white,
  },
  gradient: {
    zIndex: 11,
    borderRadius: 8,
    width: '100%',
    height: 208,
    position: 'absolute',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.baseUnit,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
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
