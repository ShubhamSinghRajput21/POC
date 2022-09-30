import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  BackHandler,
} from 'react-native';
import {connect} from 'react-redux';
import {Footer, PinkBox, UserName} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import {like, dislike} from '../../../state/actions/activity';
import {getProfileById} from '../../../state/actions/recommend';
import {selectStatus, selectProfile} from '../../../state/selectors/recommend';
import FooterBtns from './FooterBtns';
import createStyles from './styles';

const Dashboard2 = ({history, onMount, profile, location, like, dislike}) => {
  const {id} = location.state;
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  useEffect(() => {
    onMount(id);
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
  const renderItem = ({item}) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageContainer}
          source={{
            uri: item,
          }}
        />
      </View>
    );
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        justifyContent: 'space-between',
      }}
      showsVerticalScrollIndicator={false}>
      <FlatList
        data={profile?.photoUrls}
        horizontal={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
        keyExtractor={(item, index) => `${item}_${index}`}
      />
      <UserName
        name={profile?.fullName}
        age={profile?.age}
        showBlueTick
        style={styles.userName}
        color="black"
        isVerified={profile?.isVerified}
      />
      <Text style={styles.smallTitle}>My Bio</Text>
      <Text style={styles.description}>{profile?.bio}</Text>
      {profile?.interests?.length > 0 && (
        <>
          <Text style={styles.smallTitle}>My interests</Text>
          <View style={styles.pinkBoxContainer}>
            {profile?.interests?.map((item, index) => {
              return <PinkBox text={item} key={`${item}_${index}`} />;
            })}
          </View>
        </>
      )}

      {profile?.questionnaire?.length > 0 && (
        <>
          <Text style={styles.smallTitle}>About me</Text>
          <View style={styles.pinkBoxContainer}>
            {profile?.questionnaire?.map((item, index) => {
              return (
                <PinkBox
                  text={`${item?.question}: ${item?.option}`}
                  key={`${item}_${index}`}
                />
              );
            })}
          </View>
        </>
      )}

      {/* <Text style={styles.smallTitle}>{data.myInstagram.title}</Text>
      <InstagramRail data={data.myInstagram.array} />
      <Text style={styles.smallTitle}>{data.mySpotify.title}</Text>
      <SpotifyRail data={data.mySpotify.array} /> */}
      <FooterBtns
        like={() => like(profile?.user)}
        dislike={() => dislike(profile?.user)}
      />
      <View style={styles.reportView}>
        <Text style={styles.reportText}>{`${t('home:report')} Ashley ${t(
          'home:phone',
        )}`}</Text>
      </View>
      <Footer activeIndex={0} />
    </ScrollView>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    profile: selectProfile(state),
  }),
  {
    onMount: getProfileById,
    like,
    dislike,
  },
)(Dashboard2);
