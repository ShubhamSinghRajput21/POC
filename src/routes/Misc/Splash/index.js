import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useThemedStyles} from '../../../hooks';
import {UpdatesSvg, Kouple, KoupleHearts} from '../../../assets/svg';
import createStyles from './styles';

const Splash = ({history}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.koupleHearts}>
        <KoupleHearts />
      </View>
      <View style={styles.kouple}>
        <Kouple />
      </View>
    </View>
  );
};

export default connect(null, {})(Splash);
