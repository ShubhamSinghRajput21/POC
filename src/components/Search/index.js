import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Glass, CrossFill} from '../../assets/svg';
import theme from '../../design-system/theme';
import {useThemedStyles} from '../../hooks';
import Input from '../Input';
import createStyles from './styles';

const Search = ({style}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  return (
    <Input
      inputContainerStyle={[styles.container, style]}
      righttIcon={
        <CrossFill color={theme.colors.grey500} width={18} height={18} />
      }
      leftIcon={<Glass width={20} height={20} color={theme.colors.grey500} />}
      style={styles.inputStyle}
      placeholder={t('settings:search')}
      placeholderTextColor={theme.colors.grey500}
    />
  );
};

export default connect(null, {})(Search);
