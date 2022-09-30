import React from 'react';
import {Image} from 'react-native';
import {useThemedStyles} from '../../hooks';
import {AngleRight} from '../../assets/svg';
import createStyles from './styles';

const SmallAvatar = ({source}) => {
  const {styles} = useThemedStyles(createStyles);
  return <Image source={{uri: source}} style={styles.image} />;
};

export default SmallAvatar;
