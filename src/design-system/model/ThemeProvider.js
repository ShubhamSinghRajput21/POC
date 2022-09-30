import React, {useContext} from 'react';
import theme from '../theme';

export const ThemeContext = React.createContext(theme);

/**
 * Provide a theme to an entire react component tree via context
 */
const ThemeProvider = (props) => {
  const currentTheme = useContext(ThemeContext);
  if (!props.children) {
    return null;
  }

  return (
    <ThemeContext.Provider value={currentTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
