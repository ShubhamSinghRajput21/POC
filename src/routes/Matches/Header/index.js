import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useThemedStyles} from '../../../hooks';
import createStyles from './styles';

const Header = ({history, activeBtnValue}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const [activeBtn, setActiveBtn] = useState(activeBtnValue);
  return (
    <View style={styles.header}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => {
            setActiveBtn(1);
            history.push('/matches/match');
          }}
          style={[activeBtn === 1 ? styles.activeBtn : styles.inActiveBtn]}>
          <Text
            style={[activeBtn === 1 ? styles.activeText : styles.inActiveText]}>
            {t('matches:matches')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveBtn(2);
            history.push('/matches/likes');
          }}
          style={[activeBtn === 2 ? styles.activeBtn : styles.inActiveBtn]}>
          <Text
            style={[activeBtn === 2 ? styles.activeText : styles.inActiveText]}>
            {t('matches:likes')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
