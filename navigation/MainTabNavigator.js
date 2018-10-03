import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WorksScreen from '../screens/WorksScreen';
import AboutmeScreen from '../screens/AboutmeScreen';
import ContactmeScreen from '../screens/ContactmeScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const WorksStack = createStackNavigator({
  Works: WorksScreen,
});

WorksStack.navigationOptions = {
  tabBarLabel: 'Works',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const AboutmeStack = createStackNavigator({
  Aboutme: AboutmeScreen,
});

AboutmeStack.navigationOptions = {
  tabBarLabel: 'About me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-person'}
    />
  ),
};

const ContactmeStack = createStackNavigator({
  Contactme: ContactmeScreen,
});

ContactmeStack.navigationOptions = {
  tabBarLabel: 'Contact me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'contact-mail'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
 // WorksStack,
  AboutmeStack,
  ContactmeStack
});
