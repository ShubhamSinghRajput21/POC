import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import theme from '../../design-system/theme';

const Cross = ({width = 18, height = 18}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16 2 2 16m14 0L2 2"
      stroke="url(#a)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={9}
        y1={2}
        x2={9}
        y2={16}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#737373" />
        <Stop offset={1} stopColor="#353535" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Cross;
