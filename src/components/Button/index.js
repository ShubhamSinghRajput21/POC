import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const Button = ({text, onPress, style, leftIcon}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <TouchableOpacity
      style={[styles.btn, style]}
      onPress={() => onPress && onPress()}>
      {leftIcon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
