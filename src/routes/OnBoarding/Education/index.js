import {Formik} from 'formik';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {
  LoginHeader,
  FooterButton,
  Input,
  StatusError,
  Title,
} from '../../../components';
import {
  DEGREE_FIELD,
  UNIVERSITY_FIELD,
  getErrorText,
  educationalDetailsSchema,
} from '../../../forms';
import {useThemedStyles} from '../../../hooks';
import {onboardingStatusEnum} from '../../../model';
import {setProfile} from '../../../state/actions/account';
import {selectProfile, selectStatus} from '../../../state/selectors/account';
import createStyles from './styles';

const Education = ({onSubmit, status, profile}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  return (
    <Formik
      initialValues={{
        degree: profile?.degree,
        university: profile?.university,
      }}
      validationSchema={educationalDetailsSchema}
      onSubmit={(values, errors) => {
        console.log(values, errors);
        onSubmit(
          {
            ...values,
            onboardingStatus: onboardingStatusEnum.EDUCATION,
          },
          true,
        );
      }}>
      {({handleChange, touched, errors, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <StatusError status={status} />
          <LoginHeader
            showBack
            showSkip
            skipCallback={() => {
              onSubmit(
                {
                  onboardingStatus: onboardingStatusEnum.EDUCATION,
                },
                true,
              );
            }}
            title={t('onBoarding:whatDoYouDo')}
          />
          <Title title={t('onBoarding:education')} style={styles.header} />
          <Input
            onChangeText={handleChange(DEGREE_FIELD)}
            onBlur={handleBlur(DEGREE_FIELD)}
            value={values?.degree}
            errorMessage={getErrorText(errors, touched, DEGREE_FIELD)}
            placeholder={t('onBoarding:educationalDegree')}
            style={styles.smallText}
          />
          <Input
            onChangeText={handleChange(UNIVERSITY_FIELD)}
            onBlur={handleBlur(UNIVERSITY_FIELD)}
            value={values?.university}
            errorMessage={getErrorText(errors, touched, UNIVERSITY_FIELD)}
            placeholder={t('onBoarding:university')}
            style={styles.smallText}
            errorTextStyle={styles.errorStyle}
          />
          <FooterButton text={t('onBoarding:next')} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default connect(
  state => ({status: selectStatus(state), profile: selectProfile(state)}),
  {
    onSubmit: setProfile,
  },
)(Education);
