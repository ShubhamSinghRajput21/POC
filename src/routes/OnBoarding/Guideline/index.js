import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {AngleLeft, Kouple, KoupleHearts, Tick} from '../../../assets/svg';
import {FooterButton, StatusError} from '../../../components';
import theme from '../../../design-system/theme';
import {useThemedStyles} from '../../../hooks';
import {onboardingStatusEnum} from '../../../model';
import {setProfile} from '../../../state/actions/account';
import {selectStatus} from '../../../state/selectors/account';
import createStyles from './styles';

const Guideline = ({onSubmit, status}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();

  const guides = [
    {
      title: t('onBoarding:beYourself'),
      description: t('onBoarding:makeSureYourPhotosAgeBio'),
    },
    {
      title: t('onBoarding:staySafe'),
      description: t('onBoarding:dontBeQuickToGivePersonalInformation'),
    },
    {
      title: t('onBoarding:playItCool'),
      description: t('onBoarding:respectOthersTreatThem'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusError status={status} />
      <TouchableOpacity onPress={() => {}} style={styles.back}>
        <AngleLeft color={theme.colors.brand} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <KoupleHearts color={theme.colors.brand500} width={78} height={45} />
        <View style={styles.koupleText}>
          <Kouple color={theme.colors.brand500} width={87} height={17} />
        </View>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.mainTitle}>{t('onBoarding:welcomeToKouple')}</Text>
        <Text style={styles.mainDescription}>
          {t('onBoarding:plzFollowTheseGuidelines')}
        </Text>
      </View>
      {guides.map((item, index) => {
        return (
          <View style={styles.row} key={`${item.title}_${index}`}>
            <View style={styles.tick}>
              <Tick color={theme.colors.brand} width={20} height={20} />
            </View>
            <View style={styles.column}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        );
      })}
      <FooterButton
        text={t('onBoarding:iAgree')}
        onPress={() => {
          onSubmit(
            {
              onboardingStatus: onboardingStatusEnum.COMPLETED,
            },
            true,
          );
        }}
      />
    </View>
  );
};

export default connect(state => ({status: selectStatus(state)}), {
  onSubmit: setProfile,
})(Guideline);
