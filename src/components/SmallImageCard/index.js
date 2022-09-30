import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Tick, Cross, Heart} from '../../assets/svg';
import theme from '../../design-system/theme';
import {useThemedStyles} from '../../hooks';
import StopWatch from '../StopWatch';
import createStyles from './styles';

const SmallImageCard = ({
  fullName,
  isVerified,
  photoUrl,
  age,
  user,
  like,
  dislike,
  createdAt,
}) => {
  const {styles} = useThemedStyles(createStyles);
  const [touched, setTouched] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => {
        setTouched(!touched);
      }}>
      <LinearGradient
        colors={['rgba(112, 112, 112, 0)', 'rgba(0, 0, 0, 1)']}
        style={styles.gradient}></LinearGradient>
      <StopWatch time={createdAt} />
      <Image
        source={{uri: photoUrl}}
        style={styles.image}
        blurRadius={touched ? 4 : 0}
      />
      <View style={styles.bottom}>
        <View style={styles.row}>
          <Text style={styles.text}>
            {fullName}, {age}
          </Text>
          {isVerified && (
            <View style={styles.blueTick}>
              <Tick />
            </View>
          )}
        </View>
        {touched && (
          <View style={styles.buttonsRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dislike(user);
              }}>
              <Cross />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                like(user);
              }}>
              <Heart
                startColor={theme.colors.red100}
                stopColor={theme.colors.red200}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SmallImageCard;
