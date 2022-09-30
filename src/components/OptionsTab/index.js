import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, TouchableOpacity} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const isSelected = (value, item) => value === item?.key;

const OptionsTab = ({
  options,
  value,
  onPress,
  containerStyle,
  textStyle,
  buttonStyle,
  activeTextStyle,
}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={`${item}_${index}`}
          onPress={() => onPress(item)}
          style={[
            styles.button,
            buttonStyle,
            isSelected(value, item) && styles.buttonSelected,
          ]}>
          <Text
            style={[
              styles.text,
              textStyle,
              isSelected(value, item) && styles.textSelected,
              isSelected(value, item) && activeTextStyle,
            ]}>
            {item?.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default OptionsTab;
