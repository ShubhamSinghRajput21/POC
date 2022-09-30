import React from 'react';
import {Text} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const Title = ({title, style}) => {
  const {styles} = useThemedStyles(createStyles);
  return <Text style={[styles.title, style]}>{title}</Text>;
};

export default Title;
