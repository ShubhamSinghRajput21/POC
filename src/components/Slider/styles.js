import {SCREEN_WIDTH} from '../../utils/commonFunctions';

const createStyles = theme => ({
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
  sliderLength: SCREEN_WIDTH - theme.spacing.baseUnit2 * 2,
});

export default createStyles;
