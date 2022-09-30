import React from 'react';
import Svg, {Path} from 'react-native-svg';
import theme from '../../design-system/theme';

const PersonFill = ({
  width = 26,
  height = 27,
  color = theme.colors.black300,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.9875 26.5138C20.1066 26.5138 25.9827 20.6377 25.9827 13.5186C25.9827 6.412 20.094 0.535889 12.9749 0.535889C5.86832 0.535889 0.00476074 6.412 0.00476074 13.5186C0.00476074 20.6377 5.88088 26.5138 12.9875 26.5138ZM16.2394 12.9034C14.8834 12.9034 13.7534 11.6854 13.7534 10.1536C13.7408 8.64694 14.8834 7.46669 16.2394 7.46669C17.5703 7.46669 18.7129 8.62183 18.7129 10.1411C18.7129 11.6854 17.5829 12.9034 16.2394 12.9034ZM9.09516 13.0289C7.92747 13.0289 6.92301 11.9742 6.92301 10.6308C6.91045 9.33751 7.92747 8.29537 9.09516 8.29537C10.2629 8.29537 11.2673 9.3124 11.2673 10.6308C11.2673 11.9742 10.2629 13.0289 9.09516 13.0289ZM5.67998 18.6288C4.8513 18.6288 4.53741 18.2772 4.53741 17.662C4.53741 16.0046 6.33289 13.9706 9.09516 13.9706C10.2001 13.9706 11.079 14.297 11.7695 14.7365C10.3884 15.8163 9.67273 17.6871 10.3131 18.6288H5.67998ZM12.3848 18.6288C11.3678 18.6288 11.0036 18.3149 11.0036 17.7499C11.0036 16.1679 13.0251 13.9832 16.2394 13.9832C19.4286 13.9832 21.4501 16.1679 21.4501 17.7499C21.4501 18.3149 21.0985 18.6288 20.0689 18.6288H12.3848Z"
        fill={color}
      />
    </Svg>
  );
};

export default PersonFill;
