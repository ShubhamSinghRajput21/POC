import {Formik} from 'formik';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {DropDown} from '../../../assets/svg';
import {
  FooterButton,
  Input,
  LoginHeader,
  StatusError,
  ErrorMessage,
} from '../../../components';
import {getErrorText} from '../../../forms';
import {PHONE_NUMBER_FIELD, phoneNumberSchema} from '../../../forms';
import {useThemedStyles} from '../../../hooks';
import {getOtp, setDefaultStatus} from '../../../state/actions/auth';
import {selectCountryCode, selectStatus} from '../../../state/selectors/auth';
import createStyles from './styles';

const Phone = ({onSubmit, onConfirm, status, countryCode}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  return (
    <Formik
      initialValues={{number: '', countryCode}}
      validationSchema={phoneNumberSchema}
      onSubmit={values => onSubmit({phoneNumber: values?.number})}>
      {({handleChange, touched, errors, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <StatusError status={status} onConfirmPressed={onConfirm} />
          <LoginHeader
            title={t('login:whatsYourNumber')}
            description={t('login:withYourValidNumber')}
            style={styles.header}
          />
          <View style={styles.addNumberRow}>
            <TouchableOpacity style={styles.codeView}>
              <Text style={styles.codeText}>{values?.countryCode}</Text>
              <DropDown />
            </TouchableOpacity>
            <Input
              // containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              style={styles.numberInput}
              onChangeText={handleChange(PHONE_NUMBER_FIELD)}
              onBlur={handleBlur(PHONE_NUMBER_FIELD)}
              value={values[PHONE_NUMBER_FIELD]}
              placeholder={t('login:enterYourNumber')}
              keyboardType="numeric"
            />
          </View>
          <ErrorMessage
            errorMessage={getErrorText(errors, touched, PHONE_NUMBER_FIELD)}
            errorTextStyle={styles.errorStyle}
          />
          <Text style={styles.byClickingNext}>
            {t('login:byClickingNext')}
            <Text style={styles.tAndC}>{t('login:termsAndConditions')}</Text>
            {t('login:.')}
          </Text>
          <FooterButton onPress={handleSubmit} text={t('login:next')} />
        </View>
      )}
    </Formik>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    countryCode: selectCountryCode(state),
  }),
  {
    onSubmit: getOtp,
    onConfirm: setDefaultStatus,
  },
)(Phone);
