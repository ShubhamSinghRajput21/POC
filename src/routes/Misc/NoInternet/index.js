import NetInfo from '@react-native-community/netinfo';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {NoInternetSvg} from '../../../assets/svg';
import {FooterButton} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import createStyles from './styles';

const NoInternet = ({history}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.noInternetSvg}>
        <NoInternetSvg />
      </View>
      <Text style={styles.noInternetText}>
        {t('misc:noInternetConnection')}
      </Text>
      <Text style={styles.pleaseCheckYourInernet}>
        {t('misc:pleaseCheckYourInernet')}
      </Text>
      <FooterButton
        style={styles.btn}
        text={t('misc:tryAgain')}
        onPress={() => {
          NetInfo.fetch().then(state => {
            if (state.isConnected) {
              history.goBack();
            }
          });
        }}
      />
    </View>
  );
};

export default connect(null, {})(NoInternet);
