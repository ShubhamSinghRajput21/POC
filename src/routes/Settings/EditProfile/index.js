import {Formik} from 'formik';
import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
import {
  Plus,
  Spotify,
  Calendar,
  Instagram,
  AngleRight,
} from '../../../assets/svg';
import {
  Input,
  Title,
  Header,
  Button,
  StatusBox,
  SelectBox,
  DatePicker,
  OptionsTab,
} from '../../../components';
import {BIO_FIELD, getErrorText, editProfileSchema} from '../../../forms';
import {useThemedStyles} from '../../../hooks';
import {
  getPhotos,
  setProfile,
  getProfile,
  getInterests,
  getAllQuestions,
  getQuestionnaire,
} from '../../../state/actions/account';
import {
  selectStatus,
  selectPhotos,
  selectProfile,
  selectInterests,
  selectAllQuestions,
  selectQuestionsResponse,
} from '../../../state/selectors/account';
import {DateUtilService} from '../../../state/services';
import EducationForm from './EducationForm';
import JobForm from './JobForm';
import createStyles from './styles';

const getFormatedDate = date => {
  const result = moment(date).format('YYYY-MM-DD');
  return result;
};

const EditProfile = ({
  photos,
  profile,
  history,
  onMount,
  onSubmit,
  interests,
  getPhotos,
  getInterests,
  allQuestions,
  userResponse,
  getResponses,
}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const [gender, setGender] = useState(profile?.gender);
  const [dob, setDob] = useState(profile?.dateOfBirth);
  const [show, setShow] = useState(false);
  const [dateValue, setDateValue] = useState(new Date(1598051730000));
  const imagesArray = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    onMount();
    getPhotos();
    getResponses();
    getInterests();
  }, []);

  const options = [
    {
      label: t('onBoarding:male'),
      key: 'MALE',
    },
    {
      label: t('onBoarding:female'),
      key: 'FEMALE',
    },
    {
      label: t('onBoarding:others'),
      key: 'OTHERS',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Header
        showBack={true}
        showEye={true}
        history={history}
        title={t('settings:editProfile')}
      />
      <View style={styles.screenContainer}>
        <View style={styles.titleRow}>
          <Title title={t('settings:addMedia')} />
          <Text style={styles.seeAll}>{t('settings:seeAll')}</Text>
        </View>
        <View style={styles.addMedia}>
          {photos.map((item, index) => {
            return (
              <View style={styles.imageContainer} key={`${item}_${index}`}>
                <Image
                  source={{
                    uri: item.photoUrl,
                  }}
                  style={styles.image}
                />
              </View>
            );
          })}
          <TouchableOpacity
            onPress={() => {
              launchImageLibrary(null, res => {
                if (!res?.didCancel) {
                  const data = new FormData();
                  data.append('photo_url', res.assets[0].uri);
                  onSubmit(data);
                }
              });
            }}
            style={styles.imageContainer}>
            <Plus />
          </TouchableOpacity>
        </View>
        {/* <Button text={t('settings:addMore')} style={styles.btn} /> */}
        <View style={styles.simpleRow}>
          <Title title={t('settings:pictureVerification')} />
          <Text style={styles.pending}>({t('settings:pending')})</Text>
        </View>
        <Button text={t('settings:proceed')} style={styles.btn2} />
        {/* <Title
          title={t('settings:verifyYourAccount')}
          style={styles.marginTop24}
        />
        <Input
          inputContainerStyle={styles.verifyAdhaar}
          style={styles.adhaarInput}
          placeholder={t('settings:enterYourAdhaar')}
          righttIcon={
            <TouchableOpacity style={styles.verifyBtn}>
              <Text style={styles.verifyText}>{t('settings:verify')}</Text>
            </TouchableOpacity>
          }
        /> */}
        {/* <Text style={[styles.commonDescription, styles.marginTop8]}>
          {t('settings:completeAboveTask')}
        </Text> */}
        <Title title={t('settings:dateOfBirth')} style={styles.marginTop24} />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setShow(true);
          }}>
          <Input
            style={styles.input}
            editable={false}
            leftIcon={<Calendar />}
            value={dob}
            inputContainerStyle={[styles.jobView, styles.marginBottom0]}
            placeholder={t('onBoarding:enterDateOfBirth')}
          />
        </TouchableOpacity>
        {show && (
          <DatePicker
            date={dateValue}
            callback={date => {
              setShow(false);
              console.log('date', getFormatedDate(date));
              console.log(
                'date',
                date,
                DateUtilService.findDifferenceInYears(date),
              );
              // setDob(getFormatedDate(date));
              // setDateValue(date);
              // onSubmit({
              //   dateOfBirth: getFormatedDate(date),
              // });
            }}
          />
        )}
        <Title title={t('settings:myInterests')} style={styles.marginTop24} />
        <SelectBox
          array={interests}
          onPress={() => history.push('/settings/myInterests')}
        />
        <Title title={t('settings:bio')} style={styles.marginTop24} />
        <Formik
          initialValues={{
            bio: profile?.bio ? profile?.bio : '',
          }}
          validationSchema={editProfileSchema}
          onSubmit={values => {
            console.log('values of bio :', values);
            onSubmit(values);
          }}>
          {({handleChange, touched, errors, handleSubmit, values}) => (
            <Input
              maxLength={300}
              multiline={true}
              value={values?.bio}
              onEndEditing={handleSubmit}
              style={styles.bioInput}
              errorTextStyle={styles.bioError}
              inputContainerStyle={styles.bioView}
              onChangeText={handleChange(BIO_FIELD)}
              placeholder={t('settings:enterYourBio')}
              righttIcon={<Text style={styles.text300}>300</Text>}
              errorMessage={getErrorText(errors, touched, BIO_FIELD)}
            />
          )}
        </Formik>
        {/* <Title title={t('settings:languagesIKnow')} style={styles.marginTop8} />
        <SelectBox array={['English', 'Hindi']} /> */}
        <Title title={t('settings:livingIn')} />
        <TouchableOpacity
          onPress={() => {
            history.push('/settings/livingIn');
          }}
          style={styles.selectLocation}>
          <Text style={styles.commonDescription}>
            {t('settings:selectALocation')}
          </Text>
          <AngleRight />
        </TouchableOpacity>
        <Title title={t('settings:job')} style={styles.marginTop24} />
        <JobForm />

        <EducationForm />

        <Title title={t('settings:gender')} style={styles.marginTop24} />
        <OptionsTab
          options={options}
          value={gender}
          containerStyle={styles.genderView}
          activeTextStyle={styles.genderText}
          textStyle={styles.inactiveGenderText}
          onPress={item => {
            console.log('onPress of gender options : ', item);
            setGender(item?.key);
            onSubmit({
              gender: item?.key,
            });
          }}
          buttonStyle={styles.inactiveGenderBtn}
        />
        <TouchableOpacity
          style={styles.educationView}
          onPress={() => {
            history.push('/settings/orientation');
          }}>
          <Text style={styles.commonDescription}>
            {profile?.sexualOrientation
              ? profile?.sexualOrientation
              : t('settings:chooseSexuality')}
          </Text>
          <AngleRight />
        </TouchableOpacity>
        {allQuestions?.length > 0 ? (
          <Title title={t('settings:aboutMe')} style={styles.marginTop24} />
        ) : null}
        {allQuestions.map((item, index) => {
          let innerRes = userResponse?.filter(itemA => {
            if (itemA?.question === item?.question?.id) {
              return itemA;
            }
          });
          let status = item?.options?.filter(itemA => {
            if (itemA?.id === innerRes[0]?.option) {
              return itemA;
            }
          });
          return (
            <StatusBox
              key={`${item}_${index}`}
              onPress={() => {
                history.push('/settings/questionnaire', {
                  item,
                  prevSelected: status[0]?.id,
                });
              }}
              title={item.question.description}
              status={status.length ? status[0]?.description : 'Select'}
            />
          );
        })}
        {/* <Title title={t('settings:instagram')} style={styles.marginTop24} />
        <FlatList
          data={imagesArray}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.socialFlatlist}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={({item, index}) => {
            return (
              <View style={styles.socialImageCard}>
                <Plus />
              </View>
            );
          }}
        />
        <Text style={styles.commonDescription}>
          {t('settings:connctYourInstagram')}
        </Text>
        <Button
          text={t('settings:connectInstagram')}
          leftIcon={<Instagram />}
          style={styles.btn}
        />
        <Title title={t('settings:spotify')} style={styles.marginTop24} />
        <FlatList
          data={imagesArray}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.socialFlatlist}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={({item, index}) => {
            return (
              <View style={styles.socialImageCard}>
                <Plus />
              </View>
            );
          }}
        />
        <Text style={styles.commonDescription}>
          {t('settings:connectYourSpotify')}
        </Text>
        <Button
          text={t('settings:spotify')}
          leftIcon={<Spotify />}
          style={styles.btn}
        /> */}
      </View>
    </ScrollView>
  );
};

export default connect(
  state => ({
    photos: selectPhotos(state),
    status: selectStatus(state),
    profile: selectProfile(state),
    interests: selectInterests(state),
    allQuestions: selectAllQuestions(state),
    userResponse: selectQuestionsResponse(state),
  }),
  {
    getPhotos: getPhotos,
    onMount: getAllQuestions,
    getResponses: getQuestionnaire,
    getInterests: getInterests,
    onSubmit: setProfile,
  },
)(EditProfile);
