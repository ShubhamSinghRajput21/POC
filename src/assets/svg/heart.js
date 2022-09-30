import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import theme from '../../design-system/theme';

const Heart = ({
  width = 22,
  height = 20,
  startColor = theme.colors.yellow100,
  stopColor = theme.colors.yellow200,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M11 20S0 13.636 0 5.91c0-1.367.458-2.69 1.296-3.746A5.691 5.691 0 0 1 4.597.115a5.56 5.56 0 0 1 3.81.577A5.844 5.844 0 0 1 11 3.632a5.844 5.844 0 0 1 2.593-2.94 5.56 5.56 0 0 1 3.81-.577 5.691 5.691 0 0 1 3.3 2.049A6.031 6.031 0 0 1 22 5.909C22 13.636 11 20 11 20Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={11}
        y1={0}
        x2={11}
        y2={20}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={startColor} />
        <Stop offset={1} stopColor={stopColor} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Heart;
