import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import theme from '../../design-system/theme';

const AngleRight = ({width = 7, height = 12, color = theme.colors.black}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M1 1L6 6L1 11"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default AngleRight;
