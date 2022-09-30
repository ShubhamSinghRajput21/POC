import React from 'react';
import {Text} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const LoginTitle = ({title, style}) => {
  const {styles} = useThemedStyles(createStyles);
  return <Text style={[styles.title, style]}>{title}</Text>;
};

export default LoginTitle;
