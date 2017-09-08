import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Me from '../screens/Me';
import Settings from '../screens/Settings';
import Splash from '../screens/Splash';
import UserDetail from '../screens/UserDetail';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => {
      const { name } = navigation.state.params;

      return {
        title: `${name.first} ${name.last}`.toUpperCase(),
      };
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="account-circle" size={35} color={tintColor} />,
    },
  },
});

export default StackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Tabs: {
      screen: Tabs,
    },
    Settings: {
      screen: SettingsStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
