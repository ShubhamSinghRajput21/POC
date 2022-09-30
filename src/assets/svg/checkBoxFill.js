import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import theme from '../../design-system/theme';

const CheckBoxFill = ({
  width = 18,
  height = 18,
  stroke = theme.colors.white,
  fill = theme.colors.brand,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect
      x="1"
      y="1"
      width="16"
      height="16"
      rx="2"
      fill={fill}
      stroke={fill}
      stroke-width="2"
    />
    <Path
      d="M5 9.00012L8 12.0001L13.0002 7"
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
    />
  </Svg>
);

export default CheckBoxFill;
