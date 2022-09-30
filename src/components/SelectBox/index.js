import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Cross, AngleRight} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const SelectBox = ({array, onPress}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <View style={styles.container}>
      <View style={styles.textContainersRow}>
        {array.map((item, index) => {
          return (
            <View style={styles.textContainer} key={`${item}_${index}`}>
              <Text style={styles.text}>{item.keyName}</Text>
              <Cross width={6} height={6} />
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.angleRight} onPress={onPress}>
        <View style={styles.angle}>
          <AngleRight />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SelectBox;
