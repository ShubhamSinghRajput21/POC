import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import {Header, Clickables, FooterButton} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import {setQuestionnaire} from '../../../state/actions/account';
import createStyles from './styles';

let response = 0;
const Questionnaire = ({location, setResponses}) => {
  const {options, question} = location.state.item;
  const {prevSelected} = location.state;
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  return (
    <ScrollView style={styles.scrollView}>
      <Header showBack={true} title={t('settings:aboutMe')} />
      <View style={styles.container}>
        <Text style={styles.text}>{question.description}</Text>
        <Clickables
          style={styles.clickables}
          array={options}
          questionId={question.id}
          prevSelected={prevSelected}
          callBack={index => {
            console.log(index);
            response = index;
          }}
        />
        <FooterButton
          text={t('settings:submit')}
          style={styles.btn}
          onPress={() => {
            setResponses(
              {
                data: [
                  {
                    question: question.id,
                    option: options[response]?.id,
                  },
                ],
              },
              true,
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default connect(null, {
  setResponses: setQuestionnaire,
})(Questionnaire);
