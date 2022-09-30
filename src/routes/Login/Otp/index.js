import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {
  FooterButton,
  LoginHeader,
  StatusError,
  ErrorMessage,
} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import {verifyOtp} from '../../../state/actions/auth';
import {
  selectCountryCode,
  selectPhoneNumber,
  selectStatus,
} from '../../../state/selectors/auth';
import createStyles from './styles';

const Otp = ({onSubmit, status, countryCode, phoneNumber}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  let inputFirst = useRef(null);
  let inputSecond = useRef(null);
  let inputThird = useRef(null);
  let inputFourth = useRef(null);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [timeOver, setTimeOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          setTimeOver(true);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  const setFocus = element => {
    element && element.focus();
  };

  const clearFocus = () => {
    inputFirst && inputFirst.blur();
    inputSecond && inputSecond.blur();
    inputThird && inputThird.blur();
    inputFourth && inputFourth.blur();
  };

  useEffect(() => {
    inputFirst && inputFirst.focus();
  }, []);

  const handleSubmit = () => {
    if (first && second && third && fourth) {
      let otp = `${first}${second}${third}${fourth}`;
      onSubmit(otp);
      seterrorMessage('');
    } else {
      seterrorMessage(t('validations:invalidOtp'));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={clearFocus}>
      <View style={styles.container}>
        <StatusError status={status} />
        <LoginHeader
          showBack={true}
          title={t('login:verifyYourNumber')}
          description={t('login:enterTheOtp', {countryCode, phoneNumber})}
        />
        <View style={styles.otpView}>
          <TextInput
            ref={ref => (inputFirst = ref)}
            value={first}
            onChangeText={text => {
              if (text !== '') {
                setFocus(inputSecond);
              }
              setFirst(text);
            }}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            ref={ref => (inputSecond = ref)}
            value={second}
            onChangeText={text => {
              if (text !== '') {
                setFocus(inputThird);
              }
              setSecond(text);
            }}
            onKeyPress={({nativeEvent: {key: keyValue}}) => {
              if (keyValue === 'Backspace' && second === '') {
                setFocus(inputFirst);
              }
            }}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            ref={ref => (inputThird = ref)}
            value={third}
            onChangeText={text => {
              if (text !== '') {
                setFocus(inputFourth);
              }
              setThird(text);
            }}
            onKeyPress={({nativeEvent: {key: keyValue}}) => {
              if (keyValue === 'Backspace' && third === '') {
                setFocus(inputSecond);
              }
            }}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            ref={ref => (inputFourth = ref)}
            value={fourth}
            onChangeText={text => {
              setFourth(text);
            }}
            onKeyPress={({nativeEvent: {key: keyValue}}) => {
              if (keyValue === 'Backspace' && fourth === '') {
                setFocus(inputThird);
              }
            }}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
        </View>
        <ErrorMessage errorMessage={errorMessage} />
        {timeOver ? (
          <View style={styles.resendOtpView}>
            <Text style={styles.otpText}>{t('login:didNotRecieveOtp')}</Text>
            <TouchableOpacity>
              <Text style={styles.resendOtp}>{t('login:resendOtp')}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.resendOtpView}>
            <Text style={styles.otpText}>{t('login:requestNewOtp')}</Text>
            <Text style={styles.timer}>
              0{minutes}:{seconds < 10 ? `0${seconds}` : `${seconds}`}
            </Text>
          </View>
        )}
        <FooterButton onPress={handleSubmit} text={t('login:next')} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    countryCode: selectCountryCode(state),
    phoneNumber: selectPhoneNumber(state),
  }),
  {
    onSubmit: verifyOtp,
  },
)(Otp);
