import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import {
  Settings,
  Pencil,
  PersonFill,
  Tick,
  CrossFill,
  User,
} from '../../../assets/svg';
import {Footer, Button} from '../../../components';
import theme from '../../../design-system/theme';
import {useThemedStyles} from '../../../hooks';
import {getPhotos, getProfile} from '../../../state/actions/account';
import {getPlans} from '../../../state/actions/activity';
import {
  selectProfile,
  selectStatus,
  selectPhotos,
} from '../../../state/selectors/account';
import {selectPlans} from '../../../state/selectors/activity';
import createStyles from './styles';

const Profile = ({history, profile, onMount, plans, getProfile}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const [score, setScore] = useState(69);
  const [selectedPlan, setSelectedPlan] = useState(1);
  useEffect(() => {
    onMount();
    getProfile();
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.settings}
            onPress={() => history.push('/settings/setting')}>
            <Settings />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <View style={styles.imageContainer}>
              {profile?.photoUrl ? (
                <Image
                  source={{
                    uri: profile?.photoUrl,
                  }}
                  style={styles.image}
                />
              ) : (
                <View style={styles.svg}>
                  <User width={65} height={65} />
                </View>
              )}
              <TouchableOpacity style={styles.pencil}>
                <Pencil />
              </TouchableOpacity>
            </View>
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>
                {profile?.fullName}
                {profile?.age && ', ' + profile?.age}
              </Text>
              {profile?.isVerified && (
                <View style={styles.blueTick}>
                  <Tick width={12} height={12} color={theme.colors.blue100} />
                </View>
              )}
            </View>
          </View>
          <TouchableOpacity
            style={styles.person2}
            onPress={() => history.push('/settings/editProfile')}>
            <PersonFill />
          </TouchableOpacity>
        </View>
        <View style={styles.statusView}>
          <Text style={styles.statusText}>Ready to chat</Text>
          <TouchableOpacity style={styles.cross}>
            <CrossFill />
          </TouchableOpacity>
        </View>
        <View style={styles.scoreView}>
          <View style={styles.scoreFirstRow}>
            <Text style={styles.setupProfile}>Set up your profile</Text>
            <Text style={styles.yourScore}>
              Your trust score : <Text style={styles.score}>{score}</Text>
            </Text>
          </View>
          <View style={styles.progressView}>
            <View style={styles.progress(score)} />
          </View>
          <Text style={styles.completeYourProfile}>
            Complete your profile to get more recommendation.
          </Text>
        </View>
        <View style={styles.premiumView}>
          <Text style={styles.getPremium}>Get a premium plan</Text>
          {plans &&
            plans.length > 0 &&
            plans[selectedPlan]['features'].map((item, index) => {
              return (
                <View key={`${item}_${index}`} style={styles.featureView}>
                  <Tick width={13} height={13} color={theme.colors.brand} />
                  <Text style={styles.featureText}>{item?.name}</Text>
                </View>
              );
            })}
          <View style={styles.plansView}>
            {plans &&
              plans.length > 0 &&
              plans?.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => setSelectedPlan(index)}
                    activeOpacity={0.6}
                    style={[
                      selectedPlan === index
                        ? styles.selectedPlans
                        : styles.plans,
                    ]}
                    key={`${index}`}>
                    <Text
                      style={[
                        selectedPlan === index
                          ? styles.selectedNumber
                          : styles.number,
                      ]}>
                      {item?.plan?.durationNumber}
                    </Text>
                    <Text
                      style={[
                        selectedPlan === index
                          ? styles.selectedType
                          : styles.type,
                      ]}>
                      {item?.plan?.duration}
                    </Text>
                    <Text
                      style={[
                        selectedPlan === index
                          ? styles.selectedPrice
                          : styles.price,
                      ]}>
                      ₹ {item?.plan?.actualPrice}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </View>
          <Text style={styles.termsCond}>Terms & Conditions</Text>
          <Button text="Buy Now" style={styles.btn} />
        </View>
      </ScrollView>
      <Footer activeIndex={3} />
    </>
  );
};

export default connect(
  state => ({
    status: selectStatus(state),
    profile: selectProfile(state),
    plans: selectPlans(state),
  }),
  {
    onMount: getPlans,
    getProfile: getProfile,
  },
)(Profile);
