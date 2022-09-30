import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import theme from '../../design-system/theme';

const Share = ({
  width = 20,
  height = 17,
  startColor = theme.colors.skyBlue,
  stopColor = theme.colors.skyBlue100,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M8.763 16.365c.676 0 1.186-.5 1.186-1.186v-2.927a.22.22 0 0 1 .22-.22c3.208 0 5.168.94 6.548 3.507.351.642.773.791 1.24.791.614 0 1.089-.58 1.089-1.696 0-6.381-2.821-10.275-8.877-10.275a.22.22 0 0 1-.22-.22V1.23C9.95.545 9.44 0 8.745 0c-.466 0-.8.193-1.31.668L.476 7.154C.132 7.48 0 7.85 0 8.183c0 .325.132.703.475 1.028l6.96 6.53c.466.44.844.624 1.328.624Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={9.523}
        y1={0}
        x2={9.523}
        y2={16.365}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={startColor} />
        <Stop offset={1} stopColor={stopColor} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Share;
