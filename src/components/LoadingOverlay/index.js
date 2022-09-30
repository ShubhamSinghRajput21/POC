import React, {useContext} from 'react';

import {Overlay} from 'react-native-elements';
import Spinner from 'react-native-spinkit';
import { ThemeContext } from '../../design-system';

const LoadingOverlay = () => {
  const theme = useContext(ThemeContext);
  return (
    <Overlay isVisible>
      <Spinner type={"Wave"} isVisible={true} size={30} color={theme.colors.brand}/>
    </Overlay>
  );
};

export default LoadingOverlay;
