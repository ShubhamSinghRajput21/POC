import {goBack} from 'connected-react-router';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {AngleLeft} from '../../assets/svg';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const BackButton = ({onPress, goBack}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <TouchableOpacity onPress={onPress || goBack} style={styles.back}>
      <AngleLeft color="#FF0084" />
    </TouchableOpacity>
  );
};

export default connect(null, {goBack})(BackButton);
