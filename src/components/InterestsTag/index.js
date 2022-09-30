import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const InterestsTag = ({data, add, remove, prevSelected}) => {
  const {styles} = useThemedStyles(createStyles);
  const [selected, setSelected] = useState(prevSelected);
  return (
    <TouchableOpacity
      style={[selected ? styles.selectedContainer : styles.container]}
      onPress={() => {
        if (!selected) {
          add({key: data.id});
        } else {
          remove({key: data.id});
        }
        setSelected(!selected);
      }}>
      <Text style={[selected ? styles.selectedText : styles.text]}>
        {data.keyName}
      </Text>
    </TouchableOpacity>
  );
};

export default InterestsTag;
