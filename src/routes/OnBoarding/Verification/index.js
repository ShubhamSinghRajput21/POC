import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Plus} from '../../../assets/svg';
import {LoginHeader, Button, FooterButton} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import createStyles from './styles';

const Verification = () => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <LoginHeader
        showBack
        showSkip
        title={t('onBoarding:pictureVerification')}
        description={t('onBoarding:gettingYourPictureVerified')}
      />
      <ScrollView>
        <View>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/2b19/9c8e/6f58f6a704e99321f49afa8845f3c8ac?Expires=1646006400&Signature=EM7rq2MrMp0hlRkV7v04rW~cTNPJgkf6-EKNjDC79a1BhZioc2ayiwfEOtSy1eaCab9B5hkWRRlTdDtsJ0v22Bq9DMgHTO22ISF0dgTw5hVKLpEwMrWBGhwtvAam~gWSgKA6FN4NxIf4B8x41Qy7QIOkOQlviabYjuIjrizlm6RcIXABXngxv2xUNmtfdjoNtxIYUHR-mq0kJ2-v5lyvcDhPJr1l5A3kZq0WiWFszOKCWxBa2PK-idTosb7QkO~-EaMmkcRqvbIadHPt7OF0hgUoJV~NVsX~t4zf8LMR8D9~BPAWhfc3yivA8H-LqoZojQWRJo7~85c5jrx1MZJlow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            style={styles.image}
          />
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

export default connect(null, {})(Verification);
