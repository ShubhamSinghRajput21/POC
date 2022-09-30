import React, {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {AngleLeft, Phone, ThreeDots} from '../../../assets/svg';
import {ChatFooter, SmallAvatar} from '../../../components';
import {useThemedStyles} from '../../../hooks';
import createStyles from './styles';

const messages = [
  {
    sender: 0,
    message:
      'sdf jgcv kcv kjv jfg jhgf kjhjfuy b ihf ih u yfu fytdyg i uiyfui guiyf iugi utyf.',
    messageType: 'text',
    timeStamp: '3:00 am',
  },
  {
    sender: 1,
    message: "Hello It's me",
    messageType: 'text',
    timeStamp: '3:00 am',
  },
  {
    sender: 0,
    message: "Hello It's me",
    messageType: 'text',
    timeStamp: '3:00 am',
  },
  {
    sender: 0,
    message: "Hello It's me",
    image:
      'https://s3-alpha-sig.figma.com/img/1a54/0910/c980ed10ddec3949bfbf93aff3afb396?Expires=1640563200&Signature=Wux2OYYek3yxaTXCiNBF1eZ2YBmbN1vtXJ9ParulcQJK5QjVCz-hX-YaDZ0gbJOk0LqD-Rk-V7AU3VffubEmpw106YcX031PXt2BrIF-JRX-mFF52gZPNWNgkBc22YkvxhpC0R~OFvh10kVlAvRIl0InXI-nlwfWmrrWStF99s8opE~NwYWpXdxXiI0xeZ6EPrCOzEqdFG9iLoTuHHD~AiNhXxaXjL~7xKHygmH8D-L8HzWs-a7IeugL9D1hlONtlHgAsigRIPCqj1zu26kfPEVxcLuhd8r5-qWZCDwZ~EZ9uAcoHuhc1movEdhmrY7Joip8qsQubHdmfe8dDMDmdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    messageType: 'image',
    timeStamp: '3:00 am',
  },
  {message: 'May 2', messageType: ''},
  {
    sender: 1,
    message:
      'asdf lkjh sfty dod djd  dfkdbd d jsbnd dnsbvkdshcgs codc sdbshifvis sudbvsjdvi dcsyd ckad csd c',
    messageType: 'text',
    timeStamp: '3:00 am',
  },
  {
    sender: 1,
    message: 'asdf lkjh sfty dod djd  dfkdbd d j',
    messageType: 'text',
    timeStamp: '3:00 am',
  },
  {
    sender: 0,
    message: 'Hi there, how are you? Let’s have fun tomorrow',
    messageType: 'text',
    timeStamp: '3:00 am',
  },
];

const suggestionsArray = [
  'Hi, How are you!',
  'Hi, How are you!',
  'Hi, How are you!',
  'Hi, How are you!',
];

const Room = ({history}) => {
  const scrollViewRef = useRef();
  const {styles} = useThemedStyles(createStyles);
  const {t} = useTranslation();
  useEffect(() => {
    scrollViewRef.current.scrollToEnd({animated: false});
  }, []);
  return (
    <>
      <View style={styles.header}>
        <View style={styles.left}>
          <TouchableOpacity style={styles.angleLeft}>
            <AngleLeft />
          </TouchableOpacity>
          <SmallAvatar source="https://s3-alpha-sig.figma.com/img/3ab9/5094/c8354eb55f3bf6c12e829becfe98443c?Expires=1640563200&Signature=EfXODo7nNScUj4LmAdgg6jIOMlGkb7s7B8U2ui5XXEx2MMvZ~QgepWLhtPYL1yh~uF7SkHAQSBJ-OwYwn47QrbqXsJAXVOGdM9Pc-Sdy2z4AmQhUJHg1SCQ0fJTNmSHpJbnI2BcQPK3Q3UIcvQOYfgkvvJ3EH6sTZcJLqc23HeglfoUtB2bcsWqBV0It-z1YKn4s5YLw-nEZ~9Kv5FIWfb8WXX1M7j3sOyG13fru~FWbm1XW9vPxAigWm46S-XByngDVNxzIqaZZbt0nSp90wbp4WSPhZBDcDDq1bMp69O2JOjXIGtcSUXgvwhZwtFX~o4HB29G66buEYAk3TJiQcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          <View style={styles.leftSubView}>
            <Text style={styles.name}>Teja Reddy</Text>
            <Text style={styles.status}>online</Text>
          </View>
        </View>
        <View style={styles.right}>
          <TouchableOpacity style={styles.phone}>
            <Phone />
          </TouchableOpacity>
          <TouchableOpacity style={styles.threeDots}>
            <ThreeDots />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollView}>
          {messages?.map((item, index) => {
            if (item.messageType === 'image') {
              return (
                <View
                  style={
                    item.sender === 1
                      ? styles.imageContainerLeft
                      : styles.imageContainerRight
                  }
                  key={`${item.sender}_${index}`}>
                  <Image
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/1a54/0910/c980ed10ddec3949bfbf93aff3afb396?Expires=1640563200&Signature=Wux2OYYek3yxaTXCiNBF1eZ2YBmbN1vtXJ9ParulcQJK5QjVCz-hX-YaDZ0gbJOk0LqD-Rk-V7AU3VffubEmpw106YcX031PXt2BrIF-JRX-mFF52gZPNWNgkBc22YkvxhpC0R~OFvh10kVlAvRIl0InXI-nlwfWmrrWStF99s8opE~NwYWpXdxXiI0xeZ6EPrCOzEqdFG9iLoTuHHD~AiNhXxaXjL~7xKHygmH8D-L8HzWs-a7IeugL9D1hlONtlHgAsigRIPCqj1zu26kfPEVxcLuhd8r5-qWZCDwZ~EZ9uAcoHuhc1movEdhmrY7Joip8qsQubHdmfe8dDMDmdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    }}
                    style={styles.image}
                  />
                  <View style={styles.imageMsg}>
                    <Text style={[styles.message]}>{item.message}</Text>
                    <Text style={styles.timeStamp}>{item.timeStamp}</Text>
                  </View>
                </View>
              );
            } else {
              return (
                <View
                  style={[
                    styles.messageContainer,
                    item.sender === 1 && styles.messageContainerLeft,
                  ]}
                  key={`${item.sender}_${index}`}>
                  <Text style={styles.message}>{item.message}</Text>
                  <Text style={styles.timeStamp}>{item.timeStamp}</Text>
                </View>
              );
            }
          })}
        </ScrollView>
        <View style={styles.footer}>
          <FlatList
            data={suggestionsArray}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.suggestionContainer}
            keyExtractor={(item, index) => `${item}_${index}`}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.suggestionTextView}>
                  <Text style={styles.suggestionsText}>Hi, How are you!</Text>
                </TouchableOpacity>
              );
            }}
          />
          <ChatFooter />
        </View>
      </View>
    </>
  );
};

export default connect(null, {})(Room);
