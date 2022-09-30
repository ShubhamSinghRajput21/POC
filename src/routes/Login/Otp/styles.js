const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  otpView: {
    flexDirection: 'row',
    marginLeft: theme.spacing.baseUnit2,
    marginTop: 24,
  },
  input: {
    ...theme.typography.title.medium,
    width: '11%',
    marginRight: theme.spacing.baseUnit2 * 2,
    paddingVertical: theme.spacing.paddingVertical + 4,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.colors.black200,
    elevation: theme.shadow.baseUnit2,
  },
  otpText: {
    ...theme.typography.regular.small,
    color: theme.colors.black200,
    marginTop: theme.spacing.baseUnit2,
    marginLeft: theme.spacing.baseUnit2,
  },
  timer: {
    ...theme.typography.regular.small,
    color: theme.colors.black200,
    marginTop: theme.spacing.baseUnit2,
  },
  resendOtpView: {
    flexDirection: 'row',
  },
  resendOtp: {
    ...theme.typography.regular.small,
    marginTop: theme.spacing.baseUnit2,
    color: theme.colors.brand,
  },
});

export default createStyles;
