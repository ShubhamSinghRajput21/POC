import React from 'react';
import {Text, View} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const PinkBox = ({text, style}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default PinkBox;
