import React from 'react';
import {Text} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const LoginDescription = ({description, style}) => {
  const {styles} = useThemedStyles(createStyles);
  return <Text style={[styles.description, style]}>{description}</Text>;
};

export default LoginDescription;
