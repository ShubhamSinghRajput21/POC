import {Formik} from 'formik';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableOpacity, ScrollView, Switch} from 'react-native';
import {connect} from 'react-redux';
import {Mail, Phone, Tick, AngleRight, KoupleLogo} from '../../../assets/svg';
import {Header, Title, Input} from '../../../components';
import theme from '../../../design-system/theme';
import {EMAIL_FIELD, getErrorText, emailSchema} from '../../../forms';
import {useThemedStyles} from '../../../hooks';
import {setProfile} from '../../../state/actions/account';
import {getAppSettings, setAppSettings} from '../../../state/actions/activity';
import {selectProfile, selectStatus} from '../../../state/selectors/account';
import {selectAppSettings} from '../../../state/selectors/activity';
import createStyles from './styles';

const Setting = ({
  history,
  profile,
  onMount,
  settings,
  onSubmit,
  setProfile,
}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const {isPushNotificationsEnabled, isEmailNotificationsEnabled} = settings;
  const [emailEnabled, setEmailEnabled] = useState(
    isEmailNotificationsEnabled ? isEmailNotificationsEnabled : false,
  );
  const [notifications, setNotifications] = useState(
    isPushNotificationsEnabled ? isPushNotificationsEnabled : false,
  );
  useEffect(() => {
    onMount();
  }, []);
  useEffect(() => {
    emailEnabled !== isEmailNotificationsEnabled &&
      setEmailEnabled(isEmailNotificationsEnabled);
    notifications !== isPushNotificationsEnabled &&
      setNotifications(isPushNotificationsEnabled);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Header
        showBack={true}
        title={t('settings:settings')}
        history={history}
      />
      <View style={styles.screenContainer}>
        <Title title={t('settings:accountSettings')} />
        <View style={styles.commonContainer}>
          <View style={styles.commonSubContainer}>
            <Phone />
            <Text style={styles.valueText}>+91 {profile?.phoneNumber}</Text>
          </View>
          <View style={styles.commonSubContainer}>
            {settings?.isPhoneNumberVerified ? (
              <Tick color={theme.colors.brand} />
            ) : (
              <Text style={styles.notVerified}>
                {t('settings:notVerified')}
              </Text>
            )}
          </View>
        </View>
        <Text style={styles.descriptionText}>
          {t('settings:verifyWithPhoneNumber')}
        </Text>
        <Formik
          initialValues={{
            email: profile?.email ? profile?.email : '',
          }}
          validationSchema={emailSchema}
          onSubmit={values => {
            setProfile(values);
          }}>
          {({handleChange, touched, errors, handleSubmit, values}) => (
            <Input
              value={values?.email}
              onEndEditing={handleSubmit}
              style={styles.emailInput}
              errorTextStyle={styles.emailError}
              inputContainerStyle={styles.emailContainer}
              onChangeText={handleChange(EMAIL_FIELD)}
              leftIcon={<Mail />}
              righttIcon={
                <View style={styles.emailRight}>
                  {settings?.isEmailVerified ? (
                    <>
                      <Tick color={theme.colors.brand} />
                      <Text style={styles.pinkText}>
                        {t('settings:verified')}
                      </Text>
                    </>
                  ) : (
                    <Text style={styles.notVerified}>
                      {t('settings:notVerified')}
                    </Text>
                  )}
                </View>
              }
              errorMessage={getErrorText(errors, touched, EMAIL_FIELD)}
            />
          )}
        </Formik>
        <Text style={styles.descriptionText}>
          {t('settings:verifyWithEmail')}
        </Text>
        {/* <Title
          title={t('settings:discoverySettings')}
          style={styles.mediumTitle}
        />
        <View style={styles.commonContainer}>
          <Text style={styles.valueText2}>{t('settings:selectLocation')}</Text>
          <Text style={styles.pinkText2}>{t('settings:currentLocation')}</Text>
        </View>
        <Text style={styles.descriptionText}>
          {t('settings:changeYourLocation')}
        </Text> */}
        {/* <Title
          title={t('settings:blockedContacts')}
          style={styles.mediumTitle}
        />
        <View style={styles.commonContainer}>
          <Text style={styles.valueText2}>3 contacts selected</Text>
          <View style={styles.angleRight}>
            <AngleRight />
          </View>
        </View>
        <Text style={styles.descriptionText}>
          {t('settings:blockedContactsWontBeRecommended')}
        </Text> */}
        <Title title={t('settings:notifications')} style={styles.mediumTitle} />
        <View style={styles.commonContainer}>
          <Text style={styles.valueText2}>{t('settings:emails')}</Text>
          <Switch
            trackColor={{false: '#C4C2C7', true: '#FF0084'}}
            thumbColor={'#fff'}
            onValueChange={val => {
              setEmailEnabled(val);
              onSubmit({
                email: profile?.email,
                isEmailNotificationsEnabled: val,
              });
            }}
            value={emailEnabled}
          />
        </View>
        <View style={styles.commonContainer}>
          <Text style={styles.valueText2}>
            {t('settings:pushNotifications')}
          </Text>
          <Switch
            trackColor={{false: '#C4C2C7', true: '#FF0084'}}
            thumbColor={'#fff'}
            onValueChange={val => {
              setNotifications(val);
              onSubmit({
                email: profile?.email,
                isPushNotificationsEnabled: val,
              });
            }}
            value={notifications}
          />
        </View>
        <Title title={t('settings:contactUs')} style={styles.mediumTitle} />
        <TouchableOpacity
          style={styles.commonContainer}
          activeOpacity={0.7}
          onPress={() => {
            history.push('/settings/feedBack');
          }}>
          <Text style={styles.valueText2}>{t('settings:shareFeedback')}</Text>
          <View style={styles.angleRight}>
            <AngleRight />
          </View>
        </TouchableOpacity>
        <Title title={t('settings:faq')} style={styles.mediumTitle} />
        <Title title={t('settings:shareThisApp')} style={styles.mediumTitle} />
        <Title title={t('settings:privacyPolicy')} style={styles.mediumTitle} />
        <Title
          title={t('settings:termsAndConditions')}
          style={styles.mediumTitle}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.logOut}>{t('settings:logOut')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.deleteProfile}>
            {t('settings:deleteProfile')}
          </Text>
        </TouchableOpacity>
        <View style={styles.lastLine}>
          <KoupleLogo />
          <Text style={styles.version}>version 1.14</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    profile: selectProfile(state),
    settings: selectAppSettings(state),
  }),
  {
    onMount: getAppSettings,
    onSubmit: setAppSettings,
    setProfile: setProfile,
  },
)(Setting);
