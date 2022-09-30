import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import theme from '../../design-system/theme';

const Pencil = ({width = 22, height = 22, color = theme.colors.grey500}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M10.995 22C17.024 22 22 17.024 22 10.995 22 4.976 17.013 0 10.984 0 4.966 0 0 4.976 0 10.995 0 17.024 4.976 22 10.995 22Zm4.317-13.95-1.425-1.426.797-.797c.394-.383.84-.415 1.202-.053l.266.266c.361.361.35.818-.043 1.212l-.797.797Zm-7.72 7.698-1.52.574c-.309.106-.65-.191-.5-.532l.606-1.467 7.039-7.04 1.425 1.426-7.05 7.039Z"
      fill={color}
    />
  </Svg>
);

export default Pencil;
