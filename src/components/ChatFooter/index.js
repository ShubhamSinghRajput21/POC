import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Smile, Attachments, Camera, Send} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import Input from '../Input';
import createStyles from './styles';

const ChatFooter = ({style, array, callBack}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <View style={styles.inputRow}>
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Smile />
        </TouchableOpacity>
        <Input style={styles.input} />
        <TouchableOpacity style={styles.attachments}>
          <Attachments />
        </TouchableOpacity>
        <TouchableOpacity>
          <Camera />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Send />
      </TouchableOpacity>
    </View>
  );
};

export default ChatFooter;
