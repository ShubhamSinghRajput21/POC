import React from 'react';
import {useThemedStyles} from '../../hooks';
import Button from '../Button';
import createStyles from './styles';

const FooterButton = ({text, onPress, style}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <Button
      onPress={() => onPress && onPress()}
      style={[styles.footerButton, style]}
      text={text}
    />
  );
};

export default FooterButton;
