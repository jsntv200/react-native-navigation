import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Recipes from '../containers/Recipes';
import Profile from '../containers/Profile';
import Settings from '../screens/Settings';
import RecipeDetail from '../screens/RecipeDetail';

export const RecipesStack = StackNavigator({
  Recipes: {
    screen: Recipes,
    navigationOptions: {
      title: 'Recipes',
    },
  },
  RecipeDetail: {
    screen: RecipeDetail,
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
      tabBarIcon: ({ tintColor }) =>
        <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="account-circle" size={35} color={tintColor} />,
    },
  },
});

export default StackNavigator(
  {
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
