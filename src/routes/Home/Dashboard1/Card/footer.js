import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Share, Cross, Heart} from '../../../../assets/svg';
import theme from '../../../../design-system/theme';
import {useThemedStyles} from '../../../../hooks';
import createStyles from './styles';

const Footer = ({back, forward, like}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <View style={styles.iconsRow}>
      <TouchableOpacity style={styles.iconCircle} onPress={back}>
        <Share />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconCircle} onPress={forward}>
        <Cross />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconCircle} onPress={like}>
        <Heart
          startColor={theme.colors.red100}
          stopColor={theme.colors.red200}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.iconCircle}>
        <Heart />
      </TouchableOpacity> */}
    </View>
  );
};

export default Footer;
