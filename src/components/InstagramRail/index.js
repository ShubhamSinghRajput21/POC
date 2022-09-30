import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const InstagramRail = ({data}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.horizontalScrollview}>
      {data.map((item, index) => {
        return (
          <View style={styles.smallImageContainer} key={`${item}_${index}`}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/91d0/0df2/ceff7b9c09a835f705d79b5cf7d6d382?Expires=1642377600&Signature=N9GgqHqVJhWsKqPQGxUTYtGpwx56lNI6EJGzU2bgJjYMahIo8rVJZkL1WFW3-DUkWrdxnq0GGbMOLY-a~agcpx1HaFD5Y-HLkA3dY5Ty9hq8i6kw~w8-877OX9YUzRel0I5LmN8gpEwDTknMSddkVdSyiCXDPvThF8PEHwiYLr0Rtni1apKgSpPdVHk7R0eJZHXsjyQiJcEkGHl0-aiP8GqpBIKNAm1f~X8vBT-LKfCy~1WZENc564aIWjOYhP1jaNikkWG3pCjPA4W-EbRux4nNEfCp1DNFiaSaWcMM0zpM893FBcq4XP6NY~LrM6aSMVzb41Fmd~vqiRj7E7cEbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
              style={styles.smallImage}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default InstagramRail;
