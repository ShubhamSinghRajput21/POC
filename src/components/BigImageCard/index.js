import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Timer} from '../../assets/svg';
import {Tick} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import Button from '../Button';
import createStyles from './styles';

const BigImageCard = ({fullName, photoUrl, age, bio, isVerified}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(112, 112, 112, 0)', 'rgba(0, 0, 0, 1)']}
        style={styles.gradient}></LinearGradient>
      <View style={styles.timerView}>
        <Timer />
        <Text style={styles.timerText}>24 hrs left</Text>
      </View>
      <Image source={{uri: photoUrl}} style={styles.image} />
      <View style={styles.bottom}>
        <View style={styles.row}>
          <Text style={styles.name}>
            {fullName}, {age}
          </Text>
          {isVerified && (
            <View style={styles.blueTick}>
              <Tick />
            </View>
          )}
        </View>
        <Text style={styles.description}>{bio}</Text>

        <Button text={'Chat Now'} style={styles.btn} />
      </View>
    </View>
  );
};

export default BigImageCard;
