import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {
  Header,
  Title,
  Dropdown,
  SelectBox,
  StatusBox,
  FooterButton,
} from '../../../components';
import Slider from '../../../components/Slider';
import {useThemedStyles} from '../../../hooks';
import createStyles from './styles';

const Date = ({history}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const [gender, setGender] = useState('Male');
  const [verification, setVerification] = useState('Verified');
  const [distance, setDistance] = useState([15]);
  const [ageRange, setAgeRange] = useState([20, 32]);
  const [heightRange, setHeightRange] = useState([5, 6]);

  const aboutMeArray = [
    {
      title: t('settings:relationshipStatus'),
      status: t('settings:single'),
    },
    {
      title: t('settings:diet'),
      status: t('settings:single'),
    },
    {
      title: t('settings:drinking'),
      status: t('settings:single'),
    },
    {
      title: t('settings:smoking'),
      status: t('settings:single'),
    },
    {
      title: t('settings:exercise'),
      status: t('settings:single'),
    },
    {
      title: t('settings:religion'),
      status: t('settings:single'),
    },
    {
      title: t('settings:zodiacSign'),
      status: t('settings:single'),
    },
    {
      title: t('settings:pets'),
      status: t('settings:single'),
    },
    {
      title: t('settings:personality'),
      status: t('settings:single'),
    },
  ];
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Header showBack={true} title={t('settings:datePreference')} />
        <View style={styles.container}>
          <Title title={t('settings:showMe')} />
          <Dropdown
            array={['Male', 'Female', 'Others']}
            callBack={item => setGender(item)}
          />
          <View style={styles.headerRow}>
            <Title title={t('settings:maximizeYourDistance')} />
            <Text style={styles.pinkBorderView}>{distance}Km</Text>
          </View>
          <Slider values={distance} setValueChange={val => setDistance(val)} />
          <View style={styles.headerRow}>
            <Title title={t('settings:ageRange')} />
            <Text style={styles.pinkBorderView}>
              {ageRange[0]} - {ageRange[1]}
            </Text>
          </View>
          <Slider
            values={ageRange}
            setValueChange={val => setAgeRange(val)}
            min={18}
            max={60}
          />

          <Title title={t('settings:prefferedLanguage')} />
          <SelectBox array={['English', 'hindi']} />
          <Title title={t('settings:verificationStatus')} />
          <Dropdown
            array={['Verified', 'Not Verified']}
            callBack={item => setVerification(item)}
          />
          <Text style={styles.bigTitle}>{t('settings:advanceFilters')}</Text>
          <Title title={t('settings:myInterests')} style={styles.mediumTitle} />
          <SelectBox
            array={['English', 'hindi', 'English', 'hindi', 'English', 'hindi']}
          />
          <View style={styles.headerRow}>
            <Title title={t('settings:height')} />
            <Text style={styles.pinkBorderView}>
              {heightRange[0]} ft-{heightRange[1]} ft
            </Text>
          </View>
          <Slider
            values={heightRange}
            min={3}
            max={8}
            setValueChange={val => setHeightRange(val)}
          />
          <Title title={t('settings:aboutMe')} />
          {aboutMeArray.map((item, index) => {
            return (
              <StatusBox
                key={`${item}_${index}`}
                title={item.title}
                status={item.status}
              />
            );
          })}
        </View>
      </ScrollView>
      <FooterButton
        text={t('settings:submit')}
        onPress={() => {
          // const data = [
          //   {distance},
          //   {ageRange},
          //   {gender},
          //   {verification},
          //   {heightRange},
          // ];
          const data = [
            {distance, ageRange, gender, verification, heightRange},
          ];
          console.log('data', data);
        }}
      />
    </>
  );
};

export default connect(null, {})(Date);
