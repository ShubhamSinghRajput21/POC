import i18next from 'i18next';
import React, {Fragment, useEffect, useState} from 'react';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

// TODO: change SCLAlertButton to Button Component
const AlertWrapper = ({
  title,
  subtitle,
  showConfirmButton = true,
  showCancelButton = false,
  confirmText = i18next.t('translation:ok'),
  cancelText = i18next.t('translation:cancel'),
  onCancelPressed,
  onConfirmPressed,
}) => {
  const [showAlert, setShowAlert] = useState(true);
  const {styles} = useThemedStyles(createStyles);

  useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleConfirmPressed = () => {
    onConfirmPressed && onConfirmPressed();
    setShowAlert(false);
  };

  const handleCancelPressed = () => {
    onCancelPressed && onCancelPressed();
    setShowAlert(false);
  };

  return (
    <Fragment>
      <SCLAlert
        theme="info"
        show={showAlert}
        showHeader={false}
        title={title}
        titleStyle={styles.titleStyle}
        subtitle={subtitle}
        subtitleStyle={styles.subtitleStyle}
        headerInnerStyles={styles.headerInnerStyle}
        cancellable={true}
        onRequestClose={handleCancelPressed}>
        {showConfirmButton && (
          <SCLAlertButton
            containerStyle={styles.confirmContainerStyle}
            textStyle={styles.confirmTextStyle}
            onPress={handleConfirmPressed}>
            {confirmText}
          </SCLAlertButton>
        )}
        {showCancelButton && (
          <SCLAlertButton
            containerStyle={styles.cancelContainerStyle}
            textStyle={styles.cancelTextStyle}
            onPress={handleCancelPressed}>
            {cancelText}
          </SCLAlertButton>
        )}
      </SCLAlert>
    </Fragment>
  );
};

export default AlertWrapper;
