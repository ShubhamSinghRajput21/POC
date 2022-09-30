import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {CheckBoxFill, CheckBox} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const CheckBoxView = ({data}) => {
  const {styles} = useThemedStyles(createStyles);
  const [selected, setselected] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setselected(!selected);
      }}>
      <View>
        {Object.values(data).map((item, index) => {
          return (
            <Text
              key={`${item}_${index}`}
              style={[index === 0 ? styles.firstText : styles.secondText]}>
              {item}
            </Text>
          );
        })}
      </View>
      {selected ? <CheckBoxFill /> : <CheckBox />}
    </TouchableOpacity>
  );
};

export default CheckBoxView;
