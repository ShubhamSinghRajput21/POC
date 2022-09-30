import React from 'react';
import {Text, View} from 'react-native';
import {Tick} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const UserName = ({name, age, showBlueTick, style, isVerified, color}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <View style={[styles.userNameContainer, style]}>
      <Text style={[styles.userName, color && {color: color}]}>
        {name}, {age}
      </Text>
      {showBlueTick && isVerified && (
        <View style={styles.blueTick}>
          <Tick />
        </View>
      )}
    </View>
  );
};

export default UserName;
