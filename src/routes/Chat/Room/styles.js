const createStyles = theme => ({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.brand500,
    paddingHorizontal: theme.spacing.baseUnit * 2,
    paddingVertical: theme.spacing.baseUnit,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSubView: {
    marginLeft: theme.spacing.baseUnit,
  },
  angleLeft: {
    marginRight: theme.spacing.marginRight,
  },
  phone: {
    marginRight: theme.spacing.baseUnit * 3,
  },
  name: {
    ...theme.typography.regular.medium600,
    color: theme.colors.white,
  },
  status: {
    ...theme.typography.regular.small,
    color: theme.colors.white,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: theme.spacing.baseUnit,
  },
  suggestionContainer: {
    paddingBottom: theme.spacing.paddingBottom,
    paddingHorizontal: theme.spacing.baseUnit,
  },
  suggestionTextView: {
    borderRadius: 8,
    backgroundColor: theme.colors.grey600,
    paddingHorizontal: theme.spacing.paddingHorizontal,
    paddingVertical: theme.spacing.baseUnit,
    marginRight: theme.spacing.baseUnit - 2,
  },
  scrollView: {
    paddingHorizontal: theme.spacing.baseUnit2,
    paddingBottom: 110,
  },
  messageContainer: {
    maxWidth: '90%',
    alignSelf: 'flex-end',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginTop: theme.spacing.baseUnit,
    padding: theme.spacing.baseUnit2 - 4,
    backgroundColor: theme.colors.grey300,
  },
  messageContainerLeft: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 16,
    backgroundColor: theme.colors.brand600,
  },
  message: {
    ...theme.typography.regular.regular,
    color: theme.colors.black,
  },
  timeStamp: {
    ...theme.typography.regular.extraExtraSmall,
    alignSelf: 'flex-end',
    color: theme.colors.black200,
  },
  imageContainerRight: {
    width: '54%',
    overflow: 'hidden',
    alignSelf: 'flex-end',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginTop: theme.spacing.baseUnit,
    backgroundColor: theme.colors.grey300,
  },
  imageContainerLeft: {
    width: '54%',
    overflow: 'hidden',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 16,
    marginTop: theme.spacing.baseUnit,
    backgroundColor: theme.colors.grey300,
  },
  image: {
    width: '100%',
    height: 150,
  },
  imageMsg: {
    padding: theme.spacing.baseUnit2 - 4,
  },
});

export default createStyles;
