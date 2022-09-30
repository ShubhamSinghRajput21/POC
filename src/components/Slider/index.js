import React from 'react';
import {Image} from 'react-native';
import {useThemedStyles} from '../../hooks';
import {AngleRight} from '../../assets/svg';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import createStyles from './styles';

const Slider = ({
  values,
  setValueChange,
  min = 0,
  max = 100,
  step = 1,
  enabledOne,
  enabledTwo,
  allowOverlap,
  minMarkerOverlapDistance,
}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <MultiSlider
      values={values}
      onValuesChange={val => setValueChange(val)}
      sliderLength={styles.sliderLength}
      min={min}
      max={max}
      step={step}
      // minMarkerOverlapDistance={minMarkerOverlapDistance}
      markerOffsetY={4}
      // allowOverlap={allowOverlap}
      pressedMarkerStyle={styles.markerStyle}
      trackStyle={styles.trackStyle}
      markerStyle={styles.markerStyle}
      containerStyle={styles.containerStyle}
      selectedStyle={styles.selectedStyle}
      unselectedStyle={styles.unselectedStyle}
    />
  );
};

export default Slider;
