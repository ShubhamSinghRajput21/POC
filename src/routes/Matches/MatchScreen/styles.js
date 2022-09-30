const createStyles = theme => ({
  screenContainer: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  title: {
    ...theme.typography.title.extraExtraLargeBold,
    color: theme.colors.brand500,
    textAlign: 'center',
    marginTop: theme.spacing.baseUnit2 * 2,
  },
  description: {
    ...theme.typography.regular.large,
    color: theme.colors.black600,
    textAlign: 'center',
  },
  centerView: {
    marginTop: theme.spacing.marginTop * 8,
    alignItems: 'center',
  },
  heartContainer: {
    width: 60,
    height: 100,
  },
  heart1: {
    position: 'absolute',
    right: 10,
    transform: [
      {
        rotate: '11deg',
      },
    ],
  },
  heart2: {
    position: 'absolute',
    top: 10,
    left: 10,
    transform: [
      {
        rotate: '-20deg',
      },
    ],
  },
  heart3: {
    top: 23,
    position: 'absolute',
    alignSelf: 'center',
    transform: [
      {
        rotate: '11deg',
      },
    ],
  },
  imageContainer: {
    top: 20,
    zIndex: 10,
    width: 160,
    left: '10%',
    height: 160,
    borderRadius: 80,
    position: 'absolute',
  },
  imageContainer2: {
    top: 20,
    width: 160,
    height: 160,
    right: '10%',
    borderRadius: 80,
    position: 'absolute',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  sendMessageBtn: {
    position: 'absolute',
    bottom: 132,
    backgroundColor: theme.colors.brand,
    width: '77%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
  },
  keepSwipingBtn: {
    position: 'absolute',
    bottom: 60,
    width: '77%',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  sendMsgText: {
    ...theme.typography.regular.mediumBold,
    color: theme.colors.white,
  },
  keepSwipingText: {
    ...theme.typography.regular.mediumBold,
    color: theme.colors.black600,
  },
});

export default createStyles;
