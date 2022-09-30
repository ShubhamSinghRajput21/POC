import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useHistory} from 'react-router';
import {Home, Person, Circles, Chat} from '../../assets/svg';
import theme from '../../design-system/theme';
import {useThemedStyles} from '../../hooks';
import createStyles from './styles';

const Footer = ({activeIndex}) => {
  const {styles} = useThemedStyles(createStyles);
  const [isFocused, setIsFocused] = useState(activeIndex ? activeIndex : 0);
  const history = useHistory();
  const routes = [
    {
      route: focused => {
        return focused ? <Home color={theme.colors.white} /> : <Home />;
      },
      path: '/home/dashboard1',
    },
    {
      route: focused => {
        return focused ? <Circles color={theme.colors.white} /> : <Circles />;
      },
      path: '/matches/match',
    },
    {
      route: focused => {
        return focused ? <Chat color={theme.colors.white} /> : <Chat />;
      },
      path: '/chat/dashboard',
    },
    {
      route: focused => {
        return focused ? <Person color={theme.colors.white} /> : <Person />;
      },
      path: '/settings/profile',
    },
  ];
  return (
    <View style={styles.footer}>
      {routes.map((item, index) => {
        return (
          <View style={styles.iconContainer} key={`${item.route}_${index}`}>
            <TouchableOpacity
              onPress={() => {
                setIsFocused(index);
                item?.path && history.replace(item?.path);
              }}
              style={styles.focusedIconContainer(isFocused === index)}>
              {item.route(isFocused === index)}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Footer;
