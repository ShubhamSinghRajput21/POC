import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Eye} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import BackButton from '../BackButton';
import createStyles from './styles';

const Header = ({showBack, title, style, history, showEye}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <View style={[styles.container, style]}>
      <BackButton />
      <Text style={styles.title}>{title}</Text>
      {showEye && (
        <TouchableOpacity style={styles.eye}>
          <Eye />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
