import React from 'react';
import AlertWrapper from './alertWrapper';

const AlertError = ({
  title,
  subtitle,
  confirmText,
  onConfirmPressed,
  showConfirmButton = true,
  showCancelButton = false,
}) => {
  return (
    <AlertWrapper
      title={title}
      subtitle={subtitle}
      confirmText={confirmText}
      showConfirmButton={showConfirmButton}
      showCancelButton={showCancelButton}
      onConfirmPressed={onConfirmPressed}
    />
  );
};

export default AlertError;
