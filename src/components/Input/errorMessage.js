import React from 'react';
import {Text} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const ErrorMessage = ({errorMessage, errorTextStyle}) => {
  const {styles} = useThemedStyles(createStyles);
  return errorMessage && errorMessage.length > 0 ? (
    <Text style={[styles.errorText, errorTextStyle]}>{errorMessage}</Text>
  ) : null;
};

export default ErrorMessage;
