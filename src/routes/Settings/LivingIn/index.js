import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Header, Search, Clickables, FooterButton} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import createStyles from './styles';

const LivingIn = () => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const orientation = [
    {
      description: 'Bengaluru',
      id: 'Bengaluru',
    },
    {
      description: 'Gujarat',
      id: 'Gujarat',
    },
    {
      description: 'Manali',
      id: 'Manali',
    },
    {
      description: 'Shillong',
      id: 'Shillong',
    },
    {
      description: 'Guwahati',
      id: 'Guwahati',
    },
    {
      description: 'Ahmedabad',
      id: 'Ahmedabad',
    },
    {
      description: 'Goa',
      id: 'Goa',
    },
    {
      description: 'New Delhi',
      id: 'New Delhi',
    },
  ];
  return (
    <ScrollView style={styles.scrollView}>
      <Header showBack={true} title={t('settings:livingIn')} />
      <View style={styles.container}>
        <Search style={styles.search} />
        <Clickables
          style={styles.clickables}
          array={orientation}
          questionId={'state'}
          callBack={index => {
            console.log(orientation[index]);
          }}
        />
        <FooterButton text={t('settings:submit')} style={styles.btn} />
      </View>
    </ScrollView>
  );
};

export default connect(null, {})(LivingIn);
