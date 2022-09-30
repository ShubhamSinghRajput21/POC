import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Header, Button, Search, CheckBox} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import createStyles from './styles';

const Blocked = ({history}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const array = [
    {
      name: 'Adison Rhiel Madsen',
      number: 9427265456,
    },
    {
      name: 'Desirae Mango',
      number: 9427265456,
    },
    {
      name: 'Jakob Siphron',
      number: 9427265456,
    },
    {
      name: 'Kaiya Carder',
      number: 9427265456,
    },
    {
      name: 'Jakob Siphron',
      number: 9427265456,
    },
    {
      name: 'Livia Stanton',
      number: 9427265456,
    },
    {
      name: 'Madelyn Levin',
      number: 9427265456,
    },
    {
      name: 'Maren Dokidis',
      number: 9427265456,
    },
  ];
  return (
    <ScrollView style={styles.scrollView}>
      <Header showBack={true} title={t('settings:blockedContacts')} />
      <View style={styles.container}>
        <Search style={styles.search} />
        {array.map((item, index) => {
          return <CheckBox key={`${item.name}_${index}`} data={item} />;
        })}
        <Button text={t('settings:submit')} style={styles.btn} />
      </View>
    </ScrollView>
  );
};

export default connect(null, {})(Blocked);
