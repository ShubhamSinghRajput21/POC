import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {Tick, AngleDown} from '../../../../assets/svg';
import {useThemedStyles} from '../../../../hooks';
import {setLikes, like, dislike} from '../../../../state/actions/activity';
import {setProfile} from '../../../../state/actions/recommend';
import Footer from './footer';
import createStyles from './styles';

const Card = ({
  history,
  item,
  onSubmit,
  swipeBack,
  swipeForward,
  like,
  dislike,
}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  return (
    <ImageBackground
      style={styles.imageContainer}
      imageStyle={styles.imageStyle}
      source={{
        uri: item?.photoUrls?.[0],
      }}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.67)', 'rgba(0,0,0,1)']}
        locations={[0.1, 0.75, 1]}
        style={styles.itemsContainer}>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>
            {item?.fullName}, {item?.age}
          </Text>
          {item?.isVerified && (
            <View style={styles.blueTick}>
              <Tick />
            </View>
          )}
        </View>
        <Text style={styles.description}>{item?.bio}</Text>
        <Footer
          back={swipeBack}
          forward={swipeForward}
          like={() => {
            like(item?.user);
            swipeForward();
          }}
        />
        <TouchableOpacity
          style={styles.angleDown}
          onPress={() => {
            onSubmit(item);
            history.push('/home/dashboard2', {id: item?.user});
          }}>
          <AngleDown />
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

export default connect(null, {
  onSubmit: setProfile,
  like,
  dislike,
})(Card);
