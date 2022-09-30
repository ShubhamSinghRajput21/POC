import React, {useEffect, useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import {IdCard} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import ErrorMessage from './errorMessage';
import createStyles from './styles';

const Input = ({
  leftIcon,
  righttIcon,
  style,
  value,
  placeholder,
  onChangeText,
  onBlur,
  errorMessage,
  containerStyle,
  inputContainerStyle,
  leftIconContainerStyle,
  errorTextStyle,
  ...props
}) => {
  const {styles, theme} = useThemedStyles(createStyles);
  const [first, setfirst] = useState(value);
  useEffect(() => {
    setfirst(value);
  }, [value]);
  return (
    <>
      <View style={[styles.inputView, inputContainerStyle]}>
        {leftIcon && <View style={leftIconContainerStyle}>{leftIcon}</View>}
        <TextInput
          style={style}
          value={first}
          placeholder={placeholder}
          onChangeText={e => {
            setfirst(e);
            onChangeText && onChangeText(e);
          }}
          onBlur={onBlur}
          placeholderTextColor={theme.colors.black700}
          {...props}
        />
        {righttIcon && <View style={leftIconContainerStyle}>{righttIcon}</View>}
      </View>
      <ErrorMessage
        errorTextStyle={errorTextStyle}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default Input;
