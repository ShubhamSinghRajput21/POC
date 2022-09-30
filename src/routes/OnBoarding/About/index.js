import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import '../../../assets/svg';
import {
  LoginHeader,
  Clickables,
  StatusError,
  FooterButton,
} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import {onboardingStatusEnum} from '../../../model';
import {
  getAllQuestions,
  getQuestionnaire,
  setProfile,
  setQuestionnaire,
} from '../../../state/actions/account';
import {
  selectQuestionsResponse,
  selectAllQuestions,
  selectStatus,
} from '../../../state/selectors/account';
import createStyles from './styles';

const Splash = ({
  allQuestions,
  onMount,
  status,
  userResponse,
  getResponses,
  setResponses,
  onSubmit,
}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();

  const [current, setCurrent] = useState(0);
  const [response, setResponse] = useState({});

  useEffect(() => {
    onMount();
    getResponses();
  }, []);
  return (
    <View style={styles.container}>
      <StatusError status={status} />
      <LoginHeader
        showBack
        backCallback={() => {
          current > 0 && setCurrent(current - 1);
        }}
        showSkip
        skipCallback={() => {
          current < allQuestions.length - 1 && setCurrent(current + 1);
        }}
        title={t('onBoarding:letUsKnowAboutYourself')}
      />
      <View style={styles.progressContainer}>
        <View style={styles.progress((current + 1) / allQuestions.length)} />
      </View>
      <Text style={styles.headerText}>
        {allQuestions[current]?.question?.description}
      </Text>
      <Clickables
        responses={userResponse}
        style={styles.clickables}
        questionId={allQuestions[current]?.question.id}
        array={allQuestions[current]?.options}
        callBack={index => {
          let obj = response;
          obj[allQuestions[current]?.question?.id] =
            allQuestions[current]?.options[index]?.id;
          setResponse(obj);
          setTimeout(() => {
            current < allQuestions.length - 1 && setCurrent(current + 1);
          }, 50);
        }}
      />
      {current === allQuestions.length - 1 && (
        <FooterButton
          text={t('onBoarding:next')}
          onPress={() => {
            let data = [];
            for (let item in response) {
              data.push({
                question: item,
                option: response[item],
              });
            }
            setResponses({
              data: data,
            });
            onSubmit(
              {
                onboardingStatus: onboardingStatusEnum.QUESTIONNAIRE,
              },
              true,
            );
          }}
        />
      )}
    </View>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    allQuestions: selectAllQuestions(state),
    userResponse: selectQuestionsResponse(state),
  }),
  {
    onMount: getAllQuestions,
    getResponses: getQuestionnaire,
    setResponses: setQuestionnaire,
    onSubmit: setProfile,
  },
)(Splash);
