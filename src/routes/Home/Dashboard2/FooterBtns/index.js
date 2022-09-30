import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Cross, Heart} from '../../../../assets/svg';
import theme from '../../../../design-system/theme';
import {useThemedStyles} from '../../../../hooks';
import createStyles from './styles';

const FooterBtns = ({like, dislike}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <View style={styles.iconsRow}>
      <TouchableOpacity style={styles.iconCircle} onPress={dislike}>
        <Cross width={20} height={20} />
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

export default FooterBtns;
