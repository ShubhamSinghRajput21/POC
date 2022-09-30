import React from 'react';
import {Text, View, Image} from 'react-native';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const MessagesCard = ({
  name,
  message,
  image,
  time,
  showNotification,
  style,
}) => {
  const {styles} = useThemedStyles(createStyles);
  return (
    <View style={styles.messageContainer}>
      <View style={styles.left}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.middle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
      <View style={styles.right}>
        {showNotification && (
          <View style={styles.numberOfMessages}>
            <Text style={styles.number}>1</Text>
          </View>
        )}
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default MessagesCard;
