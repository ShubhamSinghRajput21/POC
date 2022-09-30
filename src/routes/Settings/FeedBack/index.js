import {Formik} from 'formik';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Header, Input, Button, FooterButton} from '../../../components';
import {
  EMAIL_FIELD,
  FEEDBACK_FIELD,
  feedbackDetailsSchema,
  getErrorText,
} from '../../../forms';
import {useThemedStyles} from '../../../hooks';
import {setFeedback} from '../../../state/actions/activity';
import {selectStatus, selectFeedback} from '../../../state/selectors/activity';
import createStyles from './styles';

const FeedBack = ({history, onSubmit}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  return (
    <Formik
      initialValues={{email: '', feedback: ''}}
      validationSchema={feedbackDetailsSchema}
      onSubmit={(values, errors) => {
        const obj = {
          subject: values?.email,
          body: values?.feedback,
        };
        onSubmit(obj);
        console.log(values, errors);
      }}>
      {({handleChange, touched, errors, handleBlur, handleSubmit, values}) => (
        <View style={styles.scrollView}>
          <Header showBack={true} title={t('settings:shareFeedBack')} />
          <View style={styles.container}>
            <ScrollView>
              <View>
                <View style={styles.numberContainer}>
                  <Text>+91 9876543210</Text>
                </View>
                <Input
                  onChangeText={handleChange(EMAIL_FIELD)}
                  onBlur={handleBlur(EMAIL_FIELD)}
                  value={values?.email}
                  errorMessage={getErrorText(errors, touched, EMAIL_FIELD)}
                  inputContainerStyle={styles.inputContainerStyle}
                  placeholder={t('settings:enterYourEmailAddress')}
                  errorTextStyle={styles.errorStyle}
                  style={styles.emailInput}
                />
                <Input
                  onChangeText={handleChange(FEEDBACK_FIELD)}
                  onBlur={handleBlur(FEEDBACK_FIELD)}
                  value={values?.feedback}
                  errorMessage={getErrorText(errors, touched, FEEDBACK_FIELD)}
                  placeholder={t('settings:typeHere')}
                  inputContainerStyle={styles.feedBackContainer}
                  style={styles.feedBackInput}
                  errorTextStyle={styles.errorStyle}
                  multiline={true}
                />
              </View>
            </ScrollView>
            <FooterButton
              text={t('settings:submit')}
              style={styles.btn}
              onPress={handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default connect(
  state => ({status: selectStatus(state), feedback: selectFeedback(state)}),
  {
    onSubmit: setFeedback,
  },
)(FeedBack);
