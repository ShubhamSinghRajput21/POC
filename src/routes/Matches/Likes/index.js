import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Footer, SmallImageCard} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import {getLikes, like, dislike} from '../../../state/actions/activity';
import {
  selectLikesArray,
  selectStatus,
} from '../../../state/selectors/activity';
import Header from '../Header';
import {data} from '../data';
import createStyles from './styles';

const Likes = ({history, likes, like, dislike, onMount}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();

  useEffect(() => {
    onMount();
  }, []);
  return (
    <>
      <Header history={history} activeBtnValue={2} />
      <ScrollView>
        <View style={styles.smallImageRow}>
          {likes?.map((item, index) => {
            return (
              <SmallImageCard
                like={like}
                dislike={dislike}
                {...item}
                key={`${item.age}_${index}`}
              />
            );
          })}
        </View>
      </ScrollView>
      <Footer activeIndex={1} />
    </>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    likes: selectLikesArray(state),
  }),
  {
    onMount: getLikes,
    like,
    dislike,
  },
)(Likes);
