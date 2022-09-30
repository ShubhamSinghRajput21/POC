import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {Glass} from '../../../assets/svg';
import {Footer, MessagesCard, Input} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import createStyles from './styles';

const Dashboard = ({history}) => {
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  const messages = [
    {
      name: 'Akansha',
      message: 'Let’s meet @ 5?',
      time: '1 min ago',
      image:
        'https://s3-alpha-sig.figma.com/img/65a1/6228/abaa05658e4253ed3896a2bdd87408ba?Expires=1642982400&Signature=LedPpOtQ~wXUkf6CfuZagKi-mVjfmpuU~gmQwzgA7wHiiIGgCNrWFxCHGNYynCINiU9yAI~Qu3uv22O4FPlNbFooAzBsh9F4pXeNcR31DW2Ia4k3soP5HmaHvA9SEmS5340KBW91kL8DON0LShPJoGjbJeyOVKPyrV-bQs9Z9~XNXEAB3X~oZ9JSX-JhlFLaimtCCZHsjBhYiWpepue~xI~0CgD2jQhmZrVmZbu88BRjXgyKuqY9Io4Ecw4W6rjmLM4S3ecAO6cg284Ba1ozlYQcKwSDfWPFGUUX7GarF7ggZM4nFzjA9ASNItQjqLrpNBoBIPw4nDUs-n-cZH2h~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      name: 'Vijay',
      message: 'Let’s meet @ 5?',
      time: '1 min ago',
      image:
        'https://s3-alpha-sig.figma.com/img/65a1/6228/abaa05658e4253ed3896a2bdd87408ba?Expires=1642982400&Signature=LedPpOtQ~wXUkf6CfuZagKi-mVjfmpuU~gmQwzgA7wHiiIGgCNrWFxCHGNYynCINiU9yAI~Qu3uv22O4FPlNbFooAzBsh9F4pXeNcR31DW2Ia4k3soP5HmaHvA9SEmS5340KBW91kL8DON0LShPJoGjbJeyOVKPyrV-bQs9Z9~XNXEAB3X~oZ9JSX-JhlFLaimtCCZHsjBhYiWpepue~xI~0CgD2jQhmZrVmZbu88BRjXgyKuqY9Io4Ecw4W6rjmLM4S3ecAO6cg284Ba1ozlYQcKwSDfWPFGUUX7GarF7ggZM4nFzjA9ASNItQjqLrpNBoBIPw4nDUs-n-cZH2h~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      name: 'Raj',
      message: 'Let’s meet @ 5?',
      time: '1 min ago',
      image:
        'https://s3-alpha-sig.figma.com/img/65a1/6228/abaa05658e4253ed3896a2bdd87408ba?Expires=1642982400&Signature=LedPpOtQ~wXUkf6CfuZagKi-mVjfmpuU~gmQwzgA7wHiiIGgCNrWFxCHGNYynCINiU9yAI~Qu3uv22O4FPlNbFooAzBsh9F4pXeNcR31DW2Ia4k3soP5HmaHvA9SEmS5340KBW91kL8DON0LShPJoGjbJeyOVKPyrV-bQs9Z9~XNXEAB3X~oZ9JSX-JhlFLaimtCCZHsjBhYiWpepue~xI~0CgD2jQhmZrVmZbu88BRjXgyKuqY9Io4Ecw4W6rjmLM4S3ecAO6cg284Ba1ozlYQcKwSDfWPFGUUX7GarF7ggZM4nFzjA9ASNItQjqLrpNBoBIPw4nDUs-n-cZH2h~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchView}>
            <Glass />
            <Input style={styles.input} placeholder="Search" />
          </View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/3ab9/5094/c8354eb55f3bf6c12e829becfe98443c?Expires=1640563200&Signature=EfXODo7nNScUj4LmAdgg6jIOMlGkb7s7B8U2ui5XXEx2MMvZ~QgepWLhtPYL1yh~uF7SkHAQSBJ-OwYwn47QrbqXsJAXVOGdM9Pc-Sdy2z4AmQhUJHg1SCQ0fJTNmSHpJbnI2BcQPK3Q3UIcvQOYfgkvvJ3EH6sTZcJLqc23HeglfoUtB2bcsWqBV0It-z1YKn4s5YLw-nEZ~9Kv5FIWfb8WXX1M7j3sOyG13fru~FWbm1XW9vPxAigWm46S-XByngDVNxzIqaZZbt0nSp90wbp4WSPhZBDcDDq1bMp69O2JOjXIGtcSUXgvwhZwtFX~o4HB29G66buEYAk3TJiQcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </View>
        <Text style={styles.title}>{t('chats:messages')}</Text>
        {messages.map((item, index) => {
          return (
            <MessagesCard
              {...item}
              key={`${item.name}_${index}`}
              showNotification={true}
            />
          );
        })}
      </View>
      <Footer activeIndex={2} />
    </>
  );
};

export default connect(null, {})(Dashboard);
