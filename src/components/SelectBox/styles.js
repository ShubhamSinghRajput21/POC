const createStyles = theme => ({
  container: {
    marginTop: 8,
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: theme.spacing.baseUnit * 5,
    elevation: theme.shadow.baseUnit,
    backgroundColor: theme.colors.white,
    paddingLeft: theme.spacing.baseUnit,
    paddingRight: theme.spacing.baseUnit2,
    paddingBottom: theme.spacing.baseUnit,
  },
  textContainersRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textContainer: {
    marginTop: theme.spacing.baseUnit,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: theme.colors.grey600,
    paddingHorizontal: theme.spacing.baseUnit,
    paddingVertical: theme.spacing.baseUnit / 2,
    marginRight: theme.spacing.baseUnit,
  },
  angleRight: {
    marginLeft: theme.spacing.baseUnit2,
    height: '100%',
    alignItems: 'flex-end',
    width: 40,
  },
  angle: {
    position: 'absolute',
    top: '50%',
  },
  text: {
    ...theme.typography.regular.small600,
    marginRight: 10,
    color: theme.colors.black200,
  },
});

export default createStyles;
