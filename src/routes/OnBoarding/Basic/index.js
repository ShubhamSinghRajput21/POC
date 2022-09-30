import {Formik} from 'formik';
import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {IdCard, Calendar, Envelope} from '../../../assets/svg';
import {
  FooterButton,
  LoginHeader,
  Input,
  OptionsTab,
  StatusError,
  DatePicker,
} from '../../../components';
import {
  FULL_NAME_FIELD,
  DOB_FIELD,
  EMAIL_FIELD,
  basicDetailsSchema,
  getErrorText,
} from '../../../forms';
import {useThemedStyles} from '../../../hooks';
import {onboardingStatusEnum} from '../../../model';
import {getProfile, setProfile} from '../../../state/actions/account';
import {selectProfile, selectStatus} from '../../../state/selectors/account';
import createStyles from './styles';

const getFormatedDate = date => {
  const result = moment(date).format('YYYY-MM-DD');
  return result;
};

const Basic = ({onSubmit, onMount, status, profile}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const [gender, setGender] = useState('MALE');
  const [show, setShow] = useState(false);
  const [dateValue, setDateValue] = useState(new Date(1598051730000));
  useEffect(() => {
    onMount();
  }, []);

  const options = [
    {
      label: t('onBoarding:male'),
      key: 'MALE',
    },
    {
      label: t('onBoarding:female'),
      key: 'FEMALE',
    },
    {
      label: t('onBoarding:others'),
      key: 'OTHERS',
    },
  ];

  return (
    <Formik
      initialValues={{
        email: profile?.email,
        name: profile?.fullName,
        date: profile?.dateOfBirth,
      }}
      validationSchema={basicDetailsSchema}
      onSubmit={(values, errors) => {
        const data = {
          dateOfBirth: values.date,
          email: values.email,
          fullName: values.name,
          gender,
          onboardingStatus: onboardingStatusEnum.BASIC_DETAILS,
        };
        onSubmit(data, true);
      }}>
      {({
        handleChange,
        setFieldValue,
        touched,
        errors,
        handleBlur,
        handleSubmit,
        values,
      }) => (
        <View style={styles.container}>
          <StatusError status={status} />
          <View>
            <LoginHeader
              showBack={true}
              title={t('onBoarding:enterBasicDetails')}
              description={t('onBoarding:youWontBeAbleToChange')}
            />
            <Input
              style={styles.inputStyle}
              inputContainerStyle={styles.firstInputContainer}
              leftIcon={<IdCard />}
              onChangeText={handleChange(FULL_NAME_FIELD)}
              onBlur={handleBlur(FULL_NAME_FIELD)}
              value={values?.name}
              placeholder={t('onBoarding:enterYourName')}
              errorMessage={getErrorText(errors, touched, FULL_NAME_FIELD)}
            />
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setShow(true);
              }}>
              <Input
                style={styles.inputStyle}
                editable={false}
                leftIcon={<Calendar />}
                value={values?.date ? `${values?.date}` : ''}
                placeholder={t('onBoarding:enterDateOfBirth')}
                errorMessage={getErrorText(errors, touched, DOB_FIELD)}
              />
            </TouchableOpacity>
            {show && (
              <DatePicker
                date={dateValue}
                callback={date => {
                  setShow(false);
                  setFieldValue(DOB_FIELD, getFormatedDate(date));
                  setDateValue(date);
                }}
              />
            )}
            <OptionsTab
              options={options}
              value={gender}
              onPress={item => setGender(item?.key)}
            />

            <Input
              style={styles.inputStyle}
              leftIcon={<Envelope />}
              onChangeText={handleChange(EMAIL_FIELD)}
              onBlur={handleBlur(EMAIL_FIELD)}
              value={values?.email}
              placeholder={t('onBoarding:enterEmail')}
              errorMessage={getErrorText(errors, touched, EMAIL_FIELD)}
            />
          </View>
          <FooterButton text={t('onBoarding:next')} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default connect(
  state => ({status: selectStatus(state), profile: selectProfile(state)}),
  {
    onMount: getProfile,
    onSubmit: setProfile,
  },
)(Basic);
