import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Header, Button, Search, CheckBox} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import createStyles from './styles';

const Languages = ({history}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const array = [
    {
      name: 'Hindi',
    },
    {
      name: 'English',
    },
    {
      name: 'Tamil',
    },
    {
      name: 'Malayalam',
    },
    {
      name: 'Assamese',
    },
    {
      name: 'Kannada',
    },
    {
      name: 'Gujarati',
    },
    {
      name: 'Marati',
    },
  ];
  return (
    <View style={styles.scrollView}>
      <Header showBack={true} title={t('settings:selectLanguages')} />
      <View style={styles.container}>
        <Search style={styles.search} />
        {array.map((item, index) => {
          return <CheckBox data={item} key={`${item}_${index}`} />;
        })}
        <Button text={t('settings:submit')} style={styles.btn} />
      </View>
    </View>
  );
};

export default connect(null, {})(Languages);
