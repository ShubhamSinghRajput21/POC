import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useThemedStyles} from '../../../hooks';
import {Heart} from '../../../assets/svg';
import theme from '../../../design-system/theme';
import {Button} from '../../../components';
import createStyles from './styles';

const MatchScreen = ({history}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>{t('matches:itsAMatch')}</Text>
      <Text style={styles.description}>
        {t('matches:youAndAlexaLikedEachOther')}
      </Text>
      <View style={styles.centerView}>
        <View style={styles.heartContainer}>
          <View style={styles.heart1}>
            <Heart
              width={16}
              height={14}
              startColor={theme.colors.brand300}
              stopColor={theme.colors.brand300}
            />
          </View>
          <View style={styles.heart2}>
            <Heart
              width={11}
              height={10}
              startColor={theme.colors.brand300}
              stopColor={theme.colors.brand300}
            />
          </View>
          <View style={styles.heart3}>
            <Heart
              startColor={theme.colors.brand300}
              stopColor={theme.colors.brand300}
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/fd96/8827/e534cfc17977ed0ca53ec384b4a312fc?Expires=1643587200&Signature=eJIswImmAGjmu65HLDEM8xPl4Q8Nwi5TjKiegBrnP3Gbg2Jl~rE0Z5UifxNnN1woxurDCCOMgb9SfJLqUnFFTKJfTt7aHaVXjpMHEKKbmJCINvn17QeVNy4YFc5W3xl8IWDzkW1FOWIiiVoLIbOhsNL1F76cg-TQV~cHHsiSdNfcS0cDhfIc0iUyLrGR3igab8qfic2CAYJNWHQz9DbKKowy6up0ezbRU3mQq5zggBm8gGvEtKQyhiod1qGWNgXllwV2Bw35wVQspqMCsguOCLaUvdeTtbrCg1WEFpMIboFREmR624Pb1q1uS8EfPktykxdY~PyoV1Z3EHVk1LrDVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </View>
        <View style={styles.imageContainer2}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/0d4a/5290/4c931ba69ed84e1d90aa21f8c5e5dc42?Expires=1643587200&Signature=YLScvm5b-5DAx6DmyksPhW6-3zflxWKdE3nDdxuYNwFsyQcYYZQR7x8KziY4ldUlpXLTLDi~FwHDiggpG102MamPrBnlCG1bOqClAr0r4M0VTQbI7jh88SoZba0KPHz2vRrIThh-vbYA7u4nJqPKOWLF1p0QIfXUa6056UMVZ3D02AM2q1iybYne-qWmGZF6TIMrCnwDzC5Q-H-qwWQGKtiOyStw265Xe8HIBA7e8FB1FaHO6Xs3Y1wW~3H2BZ~q08QcSRLJG1GerI80tEa-WAt6QqQy62IH7Yw9g3yjyUnhV6dc~HlSfjyxow7gDt1GZWgA2Ogf6cRu9b1QqNszDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.sendMessageBtn}>
        <Text style={styles.sendMsgText}>{t('matches:sendAMessage')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.keepSwipingBtn}>
        <Text style={styles.keepSwipingText}>{t('matches:keepSwiping')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, {})(MatchScreen);
