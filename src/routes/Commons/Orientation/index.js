import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import {
  LoginHeader,
  FooterButton,
  StatusError,
  Clickables,
  Header,
} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import {flowTypeEnum, sexualOrientationEnum} from '../../../model';
import createStyles from './styles';

let index = null;
const Orientation = ({status, onSubmit, flowType, profile}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  useEffect(() => {
    return () => {
      index = null;
    };
  }, []);

  console.log('flowType', flowType);
  const orientation = [
    {
      description: t('onBoarding:straight'),
      id: sexualOrientationEnum.STRAIGHT,
    },
    {
      description: t('onBoarding:gay'),
      id: sexualOrientationEnum.GAY,
    },
    {
      description: t('onBoarding:lesbian'),
      id: sexualOrientationEnum.LESBIAN,
    },
    {
      description: t('onBoarding:bisexual'),
      id: sexualOrientationEnum.BISEXUAL,
    },
    {
      description: t('onBoarding:asexual'),
      id: sexualOrientationEnum.ASEXUAL,
    },
    {
      description: t('onBoarding:demisexual'),
      id: sexualOrientationEnum.DEMISEXUAL,
    },
    {
      description: t('onBoarding:pansexual'),
      id: sexualOrientationEnum.PANSEXUAL,
    },
    {
      description: t('onBoarding:queer'),
      id: sexualOrientationEnum.QUEER,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusError status={status} />
      {flowType === flowTypeEnum.SETTINGS ? (
        <Header showBack={true} title={t('settings:sexualOrientation')} />
      ) : (
        <LoginHeader showBack={true} title={t('onBoarding:chooseYourSex')} />
      )}
      <Clickables
        style={styles.clickables}
        array={orientation}
        prevSelected={profile?.sexualOrientation}
        questionId={'sexualOrientation'}
        callBack={e => {
          index = e;
        }}
      />
      <FooterButton
        text={
          flowType === flowTypeEnum.SETTINGS
            ? t('settings:submit')
            : t('onBoarding:next')
        }
        onPress={() =>
          onSubmit({
            sexualOrientation: orientation[index]?.id,
          })
        }
      />
    </ScrollView>
  );
};

export default Orientation;
