import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
import {Plus, Cross, CrossFill} from '../../../assets/svg';
import {LoginHeader, FooterButton, StatusError} from '../../../components';
import theme from '../../../design-system/theme';
import {useThemedStyles} from '../../../hooks';
import {
  getPhotos,
  setPhotos,
  deletePhotos,
} from '../../../state/actions/account';
import {selectPhotos} from '../../../state/selectors/account';
import {selectProfile, selectStatus} from '../../../state/selectors/account';
import createStyles from './styles';

const Upload = ({status, onSubmit, onMount, photos, deletePhotos}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const [photo, setPhoto] = useState(null);
  useEffect(() => {
    onMount();
  }, []);

  return (
    <View style={styles.container}>
      <StatusError status={status} />
      <LoginHeader
        showBack
        showSkip
        title={t('onBoarding:uploadYourPictures')}
        description={t('onBoarding:uploadingMorePictures')}
      />
      <ScrollView>
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
                <TouchableOpacity
                  style={styles.crossContainer}
                  onPress={() => {
                    deletePhotos({
                      id: item.id,
                    });
                  }}>
                  <CrossFill color={theme.colors.brand} />
                </TouchableOpacity>
              </View>
            );
          })}
          <TouchableOpacity
            onPress={() => {
              // launchCamera2();
              launchImageLibrary(null, res => {
                // res && setPhoto(res.assets[0]);
                if (!res?.didCancel) {
                  const data = new FormData();
                  data.append('photo_url', res.assets[0].uri);
                  console.log('data', data);
                  onSubmit(data);
                }
              });
            }}
            style={styles.imageContainer}>
            {photo ? (
              <Image
                source={{
                  uri: photo.uri,
                }}
                style={styles.image}
              />
            ) : (
              <Plus />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FooterButton
        text={t('onBoarding:next')}
        onPress={() => {
          // history.push('/boarding/education');
        }}
      />
    </View>
  );
};

export default connect(
  state => ({status: selectStatus(state), photos: selectPhotos(state)}),
  {
    onMount: getPhotos,
    onSubmit: setPhotos,
    deletePhotos: deletePhotos,
  },
)(Upload);
