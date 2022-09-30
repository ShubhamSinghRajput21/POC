import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
import theme from '../../design-system/theme';

const CheckBox = ({width = 18, height = 18, color = theme.colors.black400}) => (
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
      stroke="#454447"
      stroke-width="2"
    />
  </Svg>
);

export default CheckBox;
