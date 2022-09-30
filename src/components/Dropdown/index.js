import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DropDown} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const Dropdown = ({style, array, callBack}) => {
  const {styles} = useThemedStyles(createStyles);
  const [showDropdown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(array[0]);
  return (
    <>
      <TouchableOpacity
        onPress={() => setDropDown(!showDropdown)}
        style={[styles.dropDown(showDropdown), style]}
        activeOpacity={0.7}>
        <Text style={styles.text}>{selected}</Text>
        <DropDown />
      </TouchableOpacity>
      {showDropdown && (
        <View style={styles.container}>
          {array.map((item, index) => {
            return (
              <TouchableOpacity
                key={`${item}_${index}`}
                onPress={() => {
                  setSelected(item);
                  setDropDown(false);
                  callBack && callBack(item);
                }}
                style={[
                  styles.dropDownView,
                  index === array.length - 1 && {
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                  },
                ]}
                activeOpacity={0.7}>
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
};

export default Dropdown;
