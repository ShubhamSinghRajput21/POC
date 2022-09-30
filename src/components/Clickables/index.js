import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const Clickables = ({style, array, callBack, questionId, prevSelected}) => {
  const {styles} = useThemedStyles(createStyles);
  let obj = {};
  obj[`${questionId}`] = prevSelected;
  const [selected, setSelected] = useState(obj);
  return (
    <View style={[style]}>
      {array?.map((item, index) => {
        return (
          <TouchableOpacity
            key={`${item.title}_${index}`}
            onPress={() => {
              let obj = {...selected};
              obj[`${questionId}`] = item.id;
              setSelected(obj);
              callBack && callBack(index);
            }}
            style={[
              selected[`${questionId}`] === item.id
                ? styles.selectedContainer
                : styles.container,
            ]}>
            <Text
              style={[
                selected[`${questionId}`] === item.id
                  ? styles.selectedText
                  : styles.text,
              ]}>
              {item.description}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Clickables;
