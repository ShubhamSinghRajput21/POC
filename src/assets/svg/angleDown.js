import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import theme from '../../design-system/theme';

const AngleDown = ({width = 42, height = 8, color = theme.colors.grey500}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 42 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m22.558 7.769 18.744-6.383C43.434.639 40.2-.508 38.048.247L21.001 6.033 3.963.251C1.785-.51-1.432.646.7 1.39L19.435 7.77c.936.322 2.261.294 3.123 0Z"
      fill={color}
    />
  </Svg>
);

export default AngleDown;
