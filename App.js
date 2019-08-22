import React, {Component, Fragment} from 'react';
import {
  SafeAreaView
} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import EventListScreen from './screens/EventListScreen';

const AppTabNavigator = createMaterialTopTabNavigator({
  EventList: {
    screen: EventListScreen,
    navigationOptions: {
      tabBarLabel: 'List',
    },
  },
  Home:{
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: "rgba(249,127,81,1)",
    style: {
      backgroundColor: "rgba(19,15,64,1)",
    },
    indicatorStyle: {
      height: 0,
    }
  },
});

const App = createAppContainer(AppTabNavigator);

export default App;
