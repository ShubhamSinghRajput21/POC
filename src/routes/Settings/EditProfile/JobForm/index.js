import {Formik} from 'formik';
import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Input} from '../../../../components';
import {
  getErrorText,
  JOB_FIELD,
  COMPANY_FIELD,
  jobDetailsSchema,
} from '../../../../forms';
import {useThemedStyles} from '../../../../hooks';
import {setProfile} from '../../../../state/actions/account';
import {selectProfile} from '../../../../state/selectors/account';
import createStyles from '../styles';

const JobForm = ({profile, onSubmit}) => {
  const formikRef = useRef(null);
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        jobTitle: profile?.jobTitle ? profile?.jobTitle : '',
        companyName: profile?.companyName ? profile?.companyName : '',
      }}
      validationSchema={jobDetailsSchema}
      onSubmit={values => {
        console.log('values from Job : ', values);
        onSubmit(values);
      }}>
      {({handleChange, touched, errors, handleSubmit, values}) => (
        <>
          <Input
            style={styles.input}
            value={values?.jobTitle}
            onEndEditing={handleSubmit}
            errorTextStyle={styles.error}
            onSubmitEditing={handleSubmit}
            placeholder={t('settings:jobTitle')}
            onChangeText={handleChange(JOB_FIELD)}
            errorMessage={getErrorText(errors, touched, JOB_FIELD)}
            inputContainerStyle={[styles.jobView, styles.jobViewFirst]}
          />
          <Input
            style={styles.input}
            onEndEditing={handleSubmit}
            value={values?.companyName}
            errorTextStyle={styles.error}
            inputContainerStyle={[styles.jobView, styles.marginBottom0]}
            placeholder={t('settings:companyName')}
            onChangeText={handleChange(COMPANY_FIELD)}
            errorMessage={getErrorText(errors, touched, COMPANY_FIELD)}
          />
        </>
      )}
    </Formik>
  );
};

export default connect(
  state => ({
    profile: selectProfile(state),
  }),
  {
    onSubmit: setProfile,
  },
)(JobForm);
