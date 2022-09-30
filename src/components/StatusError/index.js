import React, {Fragment} from 'react';
import {useTranslation} from 'react-i18next';
import AlertError from '../Alerts/alertError';
import LoadingOverlay from '../LoadingOverlay';

const StatusError = ({status, translationNamespace, onConfirmPressed}) => {
  const {t} = useTranslation(translationNamespace);
  return (
    <Fragment>
      {status.isFetching && <LoadingOverlay />}
      {!status.isFetching && status.isError && (
        <AlertError
          title={t('translation:error')}
          subtitle={t(status.errorMessage)}
          onConfirmPressed={onConfirmPressed}
          confirmText={t('translation:ok')}
        />
      )}
    </Fragment>
  );
};

export default StatusError;
