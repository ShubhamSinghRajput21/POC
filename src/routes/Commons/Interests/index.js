import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, ScrollView} from 'react-native';
import {
  InterestsTag,
  LoginHeader,
  FooterButton,
  StatusError,
  Header,
} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import {flowTypeEnum} from '../../../model';
import createStyles from './styles';

const Interests = ({
  getAllInterests,
  getInterests,
  status,
  allInterests,
  interests,
  onSubmit,
  flowType,
}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  let selectedItems = [];

  const addItem = data => {
    selectedItems = [...selectedItems, data];
  };

  const removeItem = data => {
    const result = selectedItems.filter((item, index) => {
      return item.key !== data.key;
    });
    selectedItems = result;
  };

  console.log('flowType :', flowType);

  useEffect(() => {
    getAllInterests();
    getInterests();
  }, []);

  return (
    <View style={styles.container}>
      <StatusError status={status} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {flowType === flowTypeEnum.SETTINGS ? (
          <Header showBack={true} title={t('settings:myInterests')} />
        ) : (
          <LoginHeader showBack title={t('onBoarding:whatYouInterests')} />
        )}
        <View style={styles.listContainer}>
          {allInterests.map((item, index) => {
            let sel = interests?.find((item2, index) => {
              return item2.key === item.id;
            });
            !!sel && addItem({key: item.id});
            return (
              <InterestsTag
                prevSelected={!!sel}
                key={`${item}_${index}`}
                data={item}
                add={addItem}
                remove={removeItem}
              />
            );
          })}
        </View>
      </ScrollView>
      <FooterButton
        text={
          flowType === flowTypeEnum.SETTINGS
            ? t('settings:submit')
            : t('onBoarding:next')
        }
        onPress={() => onSubmit(selectedItems)}
      />
    </View>
  );
};

export default Interests;
