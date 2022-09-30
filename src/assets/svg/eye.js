import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import theme from '../../design-system/theme';

const Eye = ({width = 22, height = 14, color = theme.colors.black800}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 22 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M10.9999 13.175C17.1171 13.175 21.2455 8.24062 21.2455 6.71132C21.2455 5.18956 17.1096 0.255127 10.9999 0.255127C4.97315 0.255127 0.754395 5.18956 0.754395 6.71132C0.754395 8.24062 4.96561 13.175 10.9999 13.175ZM11.0075 10.8246C8.70975 10.8246 6.87912 8.94877 6.87158 6.71885C6.86405 4.41361 8.70975 2.60557 11.0075 2.60557C13.2901 2.60557 15.1358 4.42114 15.1358 6.71885C15.1358 8.94877 13.2901 10.8246 11.0075 10.8246ZM11.0075 8.24815C11.8512 8.24815 12.5518 7.55507 12.5518 6.71885C12.5518 5.8751 11.8512 5.17449 11.0075 5.17449C10.1486 5.17449 9.45557 5.8751 9.45557 6.71885C9.45557 7.55507 10.1486 8.24815 11.0075 8.24815Z"
      fill={color}
    />
  </Svg>
);

export default Eye;
