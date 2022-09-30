import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import theme from '../../design-system/theme';

const Tick = ({width = 16, height = 16, color = theme.colors.blue}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M8 0a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8Zm3.81 6.6-4.513 4.307a.617.617 0 0 1-.851 0L4.19 8.753a.616.616 0 0 1 .85-.89L6.872 9.61l4.088-3.902a.616.616 0 0 1 .851.89Z"
      fill={color}
    />
  </Svg>
);

export default Tick;
