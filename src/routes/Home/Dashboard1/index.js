import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, BackHandler} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {connect} from 'react-redux';
import {Footer, StatusError} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import {like, dislike, setLikes} from '../../../state/actions/activity';
import {getRecommendations} from '../../../state/actions/recommend';
import {
  selectStatus,
  selectRecommendations,
} from '../../../state/selectors/recommend';
import Card from './Card';
import createStyles from './styles';

let currentCardIndex = 0;
const Dashboard1 = ({
  history,
  onMount,
  status,
  cards,
  onLike,
  like,
  dislike,
}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  let swiper = null;
  useEffect(() => {
    onMount();
  }, []);

  useEffect(() => {
    const backAction = () => {
      history.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const swipeBack = () => {
    if (currentCardIndex > 0) {
      currentCardIndex -= 1;
      swiper.jumpToCardIndex(currentCardIndex);
    }
  };

  const swipeForward = () => {
    if (currentCardIndex < cards.length - 1) {
      currentCardIndex += 1;
      swiper.jumpToCardIndex(currentCardIndex);
    }
  };

  return (
    <View style={styles.container}>
      <StatusError status={status} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{t('home:youHaveScrolledToTheEnd')}</Text>
      </View>
      {cards?.length > 0 && (
        <Swiper
          ref={ref => {
            if (ref) {
              swiper = ref;
            }
          }}
          cards={cards}
          verticalSwipe={false}
          showSecondCard={true}
          infinite={false}
          onSwipedLeft={index => {
            currentCardIndex = index + 1;
            dislike(cards[index]?.user);
          }}
          onSwipedRight={index => {
            currentCardIndex = index + 1;
            like(cards[index]?.user);
          }}
          stackSize={cards?.length}
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          backgroundColor="transparent"
          renderCard={card => {
            return (
              <Card
                history={history}
                item={card}
                swipeBack={swipeBack}
                swipeForward={swipeForward}
              />
            );
          }}></Swiper>
      )}
      <Footer activeIndex={0} />
    </View>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    cards: selectRecommendations(state),
  }),
  {
    onMount: getRecommendations,
    onLike: setLikes,
    like,
    dislike,
  },
)(Dashboard1);
