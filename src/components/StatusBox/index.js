import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AngleRight} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const StatusBox = ({title, status, onPress}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textView}>
        <Text style={styles.upperText}>{title}</Text>
        <Text style={styles.lowerText}>{status}</Text>
      </View>
      <AngleRight />
    </TouchableOpacity>
  );
};

export default StatusBox;
