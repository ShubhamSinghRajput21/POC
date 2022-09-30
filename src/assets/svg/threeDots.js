import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import theme from '../../design-system/theme';

const ThreeDots = ({width = 16, height = 16, color = theme.colors.white}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M8 4C9.10449 4 10 3.10456 10 2C10 0.895437 9.10449 0 8 0C6.89551 0 6 0.895437 6 2C6 3.10456 6.89551 4 8 4Z"
      fill={color}
    />
    <Path
      d="M10 7.98438C10 9.08894 9.10449 9.98438 8 9.98438C6.89551 9.98438 6 9.08894 6 7.98438C6 6.87981 6.89551 5.98438 8 5.98438C9.10449 5.98438 10 6.87981 10 7.98438Z"
      fill={color}
    />
    <Path
      d="M10 14C10 15.1046 9.10449 16 8 16C6.89551 16 6 15.1046 6 14C6 12.8954 6.89551 12 8 12C9.10449 12 10 12.8954 10 14Z"
      fill={color}
    />
  </Svg>
);

export default ThreeDots;
