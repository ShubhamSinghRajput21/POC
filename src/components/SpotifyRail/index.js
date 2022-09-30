import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useThemedStyles} from '../../hooks';
import {AngleRight} from '../../assets/svg';
import createStyles from './styles';

const SpotifyRail = ({data}) => {
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
                uri: 'https://s3-alpha-sig.figma.com/img/247a/319b/2884dab4e4b01f4cdc93e05bc0129fb7?Expires=1642377600&Signature=EVuxaEI8mOarOz~2rDwLQAOvaVy8aqvQ7UTrWV-JPwJ8ap9ceZQevow817UNzBaMIUVfvWlkPiKNBRhk6giQuSI0v7E1rsEfFhxbscTm7~emU5T3QHSjETw1pHKif6COJB~F~LJ8ihaUHrYD1kf9DpdekNv6bSCAE8IRKuUtDlDCiSyHJXg-7ARGhzIhIbRbUlJVW-Z2Wj~g5uoKIp5zVQwXBesBsn4iw6unmsSYuJ8mqelKcvHF7l94JmNyg-c49cICDEjHpHsSs5D3-yLyj4Gv7jqbFrpkIV5l74EKHVR67mfsVhZJ4nBe97wBG85~cnE4eVd02F8a2JnMYLcR6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
              style={styles.smallImage}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default SpotifyRail;
