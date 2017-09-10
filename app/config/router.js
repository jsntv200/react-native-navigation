import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Recipes from '../containers/Recipes';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import SignIn from '../containers/SignIn';
import Splash from '../screens/Splash';
import UserDetail from '../screens/UserDetail';

export const RecipesStack = StackNavigator({
  Recipes: {
    screen: Recipes,
    navigationOptions: {
      title: 'Recipes',
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
  Recipes: {
    screen: RecipesStack,
    navigationOptions: {
      tabBarLabel: 'Recipes',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={35} color={tintColor} />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" size={35} color={tintColor} />
      ),
    },
  },
});

export default StackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    SignIn: {
      screen: SignIn,
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
