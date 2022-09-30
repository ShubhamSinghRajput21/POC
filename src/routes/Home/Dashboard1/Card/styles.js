import {SCREEN_WIDTH} from '../../../../utils/commonFunctions';

const createStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '95%',
    height: '86%',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.black,
    marginTop: theme.spacing.baseUnit,
    overflow: 'hidden',
  },
  imageStyle: {
    width: 'auto',
    height: '100%',
    borderRadius: 8,
  },
  userName: {
    ...theme.typography.title.large,
    color: theme.colors.white,
  },
  userNameContainer: {
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
  description: {
    ...theme.typography.regular.medium,
    color: theme.colors.white,
    marginTop: theme.spacing.baseUnit,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.baseUnit2,
    marginHorizontal: theme.spacing.baseUnit2 * 1.5,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  angleDown: {
    zIndex: 1000,
    alignSelf: 'center',
    paddingVertical: theme.spacing.paddingVertical,
    marginTop: theme.spacing.baseUnit,
  },
  itemsContainer: {
    zIndex: 100,
    height: '32%',
    justifyContent: 'flex-end',
    paddingHorizontal: theme.spacing.baseUnit2,
  },
  gradient: {
    position: 'absolute',
    width: SCREEN_WIDTH - theme.spacing.baseUnit2,
  },
  gradientWidth: SCREEN_WIDTH - theme.spacing.baseUnit2,
});

export default createStyles;
