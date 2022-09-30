import {useContext, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../design-system';

const useThemedStyles = (createStyle) => {
  const theme = useContext(ThemeContext);
  return {
    theme,
    styles: useMemo(() => StyleSheet.create(createStyle(theme)), [
      theme,
      createStyle,
    ]),
  };
};

export default useThemedStyles;
