import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
import theme from '../../design-system/theme';

const Radio = ({width = 19, height = 18, color = theme.colors.brand}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle cx="8" cy="8" r="7.25" stroke={color} stroke-width="1.5" />
    <Circle cx="8" cy="8" r="5" fill={color} />
  </Svg>
);

export default Radio;
