import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Radio, Circle} from '../../../assets/svg';
import {LoginHeader, FooterButton, StatusError} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import {interestedInEnum, onboardingStatusEnum} from '../../../model';
import {getProfile, setProfile} from '../../../state/actions/account';
import {selectProfile, selectStatus} from '../../../state/selectors/account';
import createStyles from './styles';

const InterestedIn = ({status, onMount, onSubmit, profile}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const [selected, setSelected] = useState(profile?.interestedIn);

  const types = [
    {
      name: t('onBoarding:men'),
      key: interestedInEnum.MEN,
    },
    {
      name: t('onBoarding:women'),
      key: interestedInEnum.WOMEN,
    },
    {
      name: t('onBoarding:both'),
      key: interestedInEnum.BOTH,
    },
  ];
  useEffect(() => {
    onMount();
  }, []);

  return (
    <View style={styles.container}>
      <StatusError status={status} />
      <LoginHeader
        showBack
        title={t('onBoarding:whoAreYouInterestedIn')}
        description={t('onBoarding:canBeEditedLater')}
      />
      <View style={styles.screenContainer}>
        {types?.map((item, index) => {
          return (
            <TouchableOpacity
              key={`${item.name}`}
              style={styles.genderContainer}
              onPress={() => setSelected(item.key)}>
              <Text
                style={[
                  selected === item.key ? styles.selectedGender : styles.gender,
                ]}>
                {item.name}
              </Text>
              {selected === item.key ? <Radio /> : <Circle />}
            </TouchableOpacity>
          );
        })}
      </View>
      <FooterButton
        text={t('onBoarding:next')}
        onPress={() => {
          onSubmit(
            {
              interestedIn: selected,
              onboardingStatus: onboardingStatusEnum.INTERESTED_IN,
            },
            true,
          );
        }}
      />
    </View>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    profile: selectProfile(state),
  }),
  {
    onMount: getProfile,
    onSubmit: setProfile,
  },
)(InterestedIn);
