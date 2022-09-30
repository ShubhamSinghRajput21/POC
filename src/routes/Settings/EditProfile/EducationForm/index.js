import {Formik} from 'formik';
import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Input, Title} from '../../../../components';
import {
  getErrorText,
  educationalDetailsSchema,
  DEGREE_FIELD,
  UNIVERSITY_FIELD,
} from '../../../../forms';
import {useThemedStyles} from '../../../../hooks';
import {setProfile} from '../../../../state/actions/account';
import {selectProfile} from '../../../../state/selectors/account';
import createStyles from '../styles';

// TODO: create validationSchema for only education info and connect with setProfile
const EducationForm = ({profile, onSubmit}) => {
  const formikRef = useRef(null);
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        degree: profile?.degree ? profile?.degree : '',
        university: profile?.university ? profile?.university : '',
      }}
      validationSchema={educationalDetailsSchema}
      onSubmit={values => {
        console.log('values from education : ', values);
        onSubmit(values);
      }}>
      {({handleChange, handleBlur, handleSubmit, touched, errors, values}) => (
        <>
          <Title title={t('settings:education')} style={styles.marginTop24} />
          <Input
            style={styles.input}
            onBlur={handleBlur(DEGREE_FIELD)}
            value={values?.degree}
            errorTextStyle={styles.error}
            onChangeText={handleChange(DEGREE_FIELD)}
            placeholder={t('settings:chooseEducationalDegree')}
            errorMessage={getErrorText(errors, touched, DEGREE_FIELD)}
            inputContainerStyle={[styles.jobView, styles.jobViewFirst]}
            onEndEditing={handleSubmit}
          />
          <Input
            style={styles.input}
            onBlur={handleBlur(UNIVERSITY_FIELD)}
            value={values?.university}
            errorTextStyle={styles.error}
            inputContainerStyle={[styles.jobView, styles.marginBottom0]}
            placeholder={t('settings:chooseUniversity')}
            onChangeText={handleChange(UNIVERSITY_FIELD)}
            errorMessage={getErrorText(errors, touched, UNIVERSITY_FIELD)}
            onEndEditing={handleSubmit}
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
)(EducationForm);
