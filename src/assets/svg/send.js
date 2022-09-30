
import * as React from 'react';
import Svg, {Path,Rect} from 'react-native-svg';
import theme from '../../design-system/theme';

const Send = ({width = 40, height = 40, color = theme.colors.brand500}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect width="40" height="40" rx="20" fill={color} />
    <Path
      d="M28.9478 18.6913L13.1121 9.8233C12.8456 9.6741 12.54 9.60978 12.236 9.63893C11.932 9.66809 11.6442 9.78932 11.4109 9.98644C11.1777 10.1836 11.0102 10.4472 10.9308 10.742C10.8513 11.0369 10.8638 11.349 10.9665 11.6366L13.6856 19.2501H20.7499C20.9489 19.2501 21.1396 19.3291 21.2803 19.4698C21.4209 19.6104 21.4999 19.8012 21.4999 20.0001C21.4999 20.199 21.4209 20.3898 21.2803 20.5304C21.1396 20.6711 20.9489 20.7501 20.7499 20.7501H13.6856L10.9665 28.3636C10.8861 28.59 10.8611 28.8322 10.8936 29.0702C10.9261 29.3082 11.015 29.5349 11.1531 29.7314C11.2912 29.9279 11.4743 30.0885 11.6872 30.1997C11.9 30.3109 12.1365 30.3696 12.3766 30.3707C12.6343 30.3702 12.8876 30.3035 13.1122 30.1769L28.9478 21.309C29.1804 21.1787 29.3741 20.9887 29.5089 20.7587C29.6438 20.5286 29.7149 20.2668 29.7149 20.0001C29.7149 19.7335 29.6438 19.4717 29.509 19.2416C29.3742 19.0116 29.1805 18.8216 28.9478 18.6913Z"
      fill="#F4F3F5"
    />
  </Svg>
);

export default Send;