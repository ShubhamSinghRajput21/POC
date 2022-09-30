import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import theme from '../../design-system/theme';

const Circles = ({width = 17, height = 12, color = theme.colors.black}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 17 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 11.917A6.002 6.002 0 0 0 10 .083a6 6 0 1 1 0 11.834Z"
      fill={color}
    />
    <Circle cx={6} cy={6} r={5.25} stroke={color} strokeWidth={1.5} />
  </Svg>
);

export default Circles;
