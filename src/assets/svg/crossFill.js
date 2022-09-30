import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import theme from '../../design-system/theme';

const CrossFill = ({
  width = 18,
  height = 18,
  color = theme.colors.black700,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M9 18c4.924 0 9-4.085 9-9 0-4.924-4.085-9-9.009-9C4.076 0 0 4.076 0 9c0 4.915 4.085 9 9 9Zm-3.115-5.153a.736.736 0 0 1-.511-1.253L7.959 9.01 5.374 6.424a.744.744 0 0 1-.212-.512c0-.406.326-.724.723-.724.212 0 .38.07.512.212l2.594 2.585 2.62-2.594c.15-.15.31-.22.504-.22.397 0 .723.326.723.723a.706.706 0 0 1-.211.52L10.031 9.01l2.586 2.576c.14.15.211.318.211.52a.738.738 0 0 1-.732.742.757.757 0 0 1-.52-.22L8.99 10.04l-2.567 2.585a.746.746 0 0 1-.539.221Z"
      fill={color}
    />
  </Svg>
);

export default CrossFill;
