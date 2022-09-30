import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {View, Text} from 'react-native';

const DatePicker = ({callback, date}) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    callback && callback(currentDate);
  };
  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode="date"
      is24Hour={true}
      display="default"
      onChange={onChange}
    />
  );
};

export default DatePicker;
