import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {BigImageCard, Footer, StatusError} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import {getMatches} from '../../../state/actions/activity';
import {selectMatches, selectStatus} from '../../../state/selectors/activity';
import Header from '../Header';
import createStyles from './styles';

const Match = ({history, onMount, status, matches}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  useEffect(() => {
    onMount();
  }, []);

  console.log('matchess', matches);

  return (
    <>
      <Header history={history} activeBtnValue={1} />
      <StatusError status={status} />
      <FlatList
        data={matches}
        contentContainerStyle={styles.flatlist}
        keyExtractor={(item, index) => `${item.age}_${index}`}
        renderItem={({item}) => {
          return <BigImageCard {...item} />;
        }}
      />
      <Footer activeIndex={1} />
    </>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    matches: selectMatches(state),
  }),
  {
    onMount: getMatches,
  },
)(Match);
