import {SCREEN_WIDTH} from '../../../utils/commonFunctions';

const createStyles = theme => ({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.grey300,
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.baseUnit2,
    paddingBottom: theme.spacing.baseUnit2 * 4,
  },
  markerStyle: {
    backgroundColor: theme.colors.brand,
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  containerStyle: {
    height: 30,
    marginTop: theme.spacing.baseUnit / 2,
  },
  selectedStyle: {
    backgroundColor: theme.colors.brand,
    height: 8,
    borderRadius: 10,
  },
  unselectedStyle: {
    backgroundColor: theme.colors.lightBrand,
    height: 8,
    borderRadius: 10,
  },
  pinkBorderView: {
    borderWidth: 1,
    borderRadius: 4,
    textAlignVertical: 'bottom',
    paddingVertical: theme.spacing.baseUnit / 2,
    paddingHorizontal: theme.spacing.baseUnit,
    color: theme.colors.black,
    ...theme.typography.regular.small600,
    borderColor: theme.colors.brand400,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: theme.spacing.baseUnit,
  },
  bigTitle: {
    ...theme.typography.regular.largeBold,
    color: theme.colors.black,
    marginTop: theme.spacing.baseUnit2 * 2,
  },
  mediumTitle: {marginTop: theme.spacing.baseUnit},
  minimumTrackTintColor: theme.colors.brand,
  maximumTrackTintColor: theme.colors.lightBrand,
  sliderLength: SCREEN_WIDTH - theme.spacing.baseUnit2 * 2,
});

export default createStyles;
