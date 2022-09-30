import React from 'react';
import {View, Text} from 'react-native';
import {Timer} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import {DateUtilService} from '../../state/services';
import createStyles from './styles';

const StopWatch = ({time}) => {
  const {styles} = useThemedStyles(createStyles);
  const hoursLeft = 24 - DateUtilService.findDifferenceInHours(time);
  return (
    <View style={styles.timerView}>
      <Timer />
      <Text style={styles.timerText}>{hoursLeft} hrs left</Text>
    </View>
  );
};

export default StopWatch;
