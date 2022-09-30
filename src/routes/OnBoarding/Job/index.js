import {Formik} from 'formik';
import React from 'react';
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
import theme from '../../../design-system/theme';
import {
  JOB_FIELD,
  COMPANY_FIELD,
  jobDetailsSchema,
  getErrorText,
} from '../../../forms';
import {useThemedStyles} from '../../../hooks';
import {onboardingStatusEnum} from '../../../model';
import {setProfile} from '../../../state/actions/account';
import {selectProfile, selectStatus} from '../../../state/selectors/account';
import createStyles from './styles';

const Job = ({onSubmit, status, profile}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  return (
    <Formik
      initialValues={{
        jobTitle: profile?.jobTitle,
        companyName: profile?.companyName,
      }}
      validationSchema={jobDetailsSchema}
      onSubmit={values => {
        onSubmit(
          {
            ...values,
            onboardingStatus: onboardingStatusEnum.JOB,
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
            title={t('onBoarding:whatDoYouDo')}
            skipCallback={() => {
              onSubmit(
                {
                  onboardingStatus: onboardingStatusEnum.JOB,
                },
                true,
              );
            }}
          />
          <Title title={t('onBoarding:job')} style={styles.header} />
          <Input
            onChangeText={handleChange(JOB_FIELD)}
            onBlur={handleBlur(JOB_FIELD)}
            value={values?.jobTitle}
            errorMessage={getErrorText(errors, touched, JOB_FIELD)}
            placeholder={t('onBoarding:jobTitle')}
            errorTextStyle={styles.errorStyle}
            style={styles.smallText}
            placeholderTextColor={theme.colors.black700}
          />
          <Input
            onChangeText={handleChange(COMPANY_FIELD)}
            onBlur={handleBlur(COMPANY_FIELD)}
            value={values?.companyName}
            errorMessage={getErrorText(errors, touched, COMPANY_FIELD)}
            placeholder={t('onBoarding:companyName')}
            errorTextStyle={styles.errorStyle}
            style={styles.smallText}
            placeholderTextColor={theme.colors.black700}
          />
          <FooterButton text={t('onBoarding:next')} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    profile: selectProfile(state),
  }),
  {
    onSubmit: setProfile,
  },
)(Job);
