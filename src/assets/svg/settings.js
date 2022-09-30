import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import theme from '../../design-system/theme';

const Settings = ({width = 28, height = 27, color = theme.colors.black300}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 28 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M12.857 26.866h2.298c.754 0 1.319-.453 1.482-1.193l.628-2.65c.426-.15.828-.314 1.205-.49l2.323 1.432c.615.39 1.356.326 1.87-.188l1.62-1.62c.515-.515.59-1.28.176-1.908L23.04 17.95c.176-.377.34-.779.465-1.168l2.674-.628c.74-.163 1.18-.728 1.18-1.481v-2.26c0-.741-.44-1.319-1.18-1.482l-2.65-.64c-.137-.44-.313-.829-.464-1.168l1.42-2.348c.4-.64.35-1.356-.19-1.883l-1.632-1.62c-.527-.477-1.192-.565-1.833-.213l-2.36 1.456a11.78 11.78 0 0 0-1.193-.49l-.64-2.686C16.474.599 15.908.147 15.155.147h-2.298c-.765 0-1.33.452-1.494 1.193l-.627 2.674a8.801 8.801 0 0 0-1.218.49L7.17 3.06c-.64-.352-1.294-.277-1.833.213l-1.633 1.62c-.54.527-.59 1.243-.188 1.883l1.419 2.348c-.151.34-.314.728-.465 1.168l-2.65.64c-.74.163-1.18.741-1.18 1.482v2.26c0 .753.44 1.318 1.18 1.481l2.675.628c.126.39.289.791.465 1.168L3.54 20.249c-.414.627-.339 1.393.188 1.908l1.607 1.62c.515.514 1.256.577 1.884.188l2.31-1.431c.377.175.779.339 1.206.49l.627 2.649c.164.74.729 1.193 1.494 1.193ZM14 17.9c-2.41 0-4.382-1.984-4.382-4.408 0-2.398 1.971-4.369 4.382-4.369 2.423 0 4.395 1.971 4.395 4.37 0 2.423-1.972 4.407-4.395 4.407Z"
      fill={color}
    />
  </Svg>
);

export default Settings;
