import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useThemedStyles} from '../../../hooks';
import {UpdatesSvg} from '../../../assets/svg';
import {Button} from '../../../components';
import createStyles from './styles';

const Updates = ({history}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.notNowBtn}>
        <Text style={styles.notNow}>{t('misc:notNow')}</Text>
      </TouchableOpacity>
      <View style={styles.noInternetSvg}>
        <UpdatesSvg />
      </View>
      <Text style={styles.noInternetText}>{t('misc:timeToUpdate')}</Text>
      <Text style={styles.pleaseCheckYourInernet}>
        {t('misc:weAddedLotsOfNewFeature')}
      </Text>
      <Button style={styles.btn} text={t('misc:updateNow')} />
    </View>
  );
};

export default connect(null, {})(Updates);
