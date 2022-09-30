import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';
import theme from '../../design-system/theme';

function SvgComponent({width = 256, height = 256, color = theme.colors.black}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256">
      <G
        transform="matrix(.72 0 0 .72 128 128) matrix(3.89 0 0 3.89 -175.05 -175.05)"
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="none"
        fillRule="nonzero"
        opacity={1}>
        <Path
          d="M85.347 90c0-22.283-18.064-40.347-40.347-40.347S4.653 67.717 4.653 90h80.694z"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={color}
          fillRule="nonzero"
          opacity={1}
        />
        <Circle
          cx={45.003}
          cy={21.413}
          r={21.413}
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={color}
          fillRule="nonzero"
          opacity={1}
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
