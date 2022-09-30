import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {useThemedStyles} from '../../hooks';
import BackButton from '../BackButton';
import LoginDescription from '../LoginDescription';
import LoginTitle from '../LoginTitle';
import createStyles from './styles';

const LoginHeader = ({
  showBack,
  backCallback,
  showSkip,
  skipCallback,
  title,
  description,
  style,
}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        {showBack && <BackButton onPress={backCallback} />}
        {showSkip && (
          <TouchableOpacity
            onPress={() => {
              skipCallback && skipCallback();
            }}
            style={styles.skip}>
            <Text>{t('login:skip')}</Text>
          </TouchableOpacity>
        )}
      </View>
      <LoginTitle title={title} style={[showBack && styles.title]} />
      {description && <LoginDescription description={description} />}
    </View>
  );
};

export default LoginHeader;
