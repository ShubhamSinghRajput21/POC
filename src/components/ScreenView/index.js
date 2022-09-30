import React, {Fragment, useContext} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {ThemeContext} from '../../design-system';
import {selectStatusBarColor} from '../../state/selectors/ui';
import {statusBarColorEnum} from '../../model';
import styles from './styles';

const getBarStyle = color =>
  `${color === statusBarColorEnum.WHITE ? 'dark' : 'light'}-content`;

const getBackgroundColor = (color, theme) => {
  switch (color) {
    case statusBarColorEnum.DARK:
      return theme.colors.black;
    case statusBarColorEnum.BRAND:
      return theme.colors.brand;
    case statusBarColorEnum.WHITE:
    default:
      return theme.colors.white;
  }
};

const ScreenView = ({statusBarColor, children}) => {
  const theme = useContext(ThemeContext);
  const backgroundColor = getBackgroundColor(statusBarColor, theme);
  return (
    <Fragment>
      <StatusBar
        barStyle={getBarStyle(statusBarColor)}
        backgroundColor={backgroundColor}
      />
      <SafeAreaView style={[styles.statusBar, {backgroundColor}]} />
      <SafeAreaView style={[styles.safeArea]}>{children}</SafeAreaView>
    </Fragment>
  );
};

export default connect(state => ({
  statusBarColor: selectStatusBarColor(state),
}))(ScreenView);
