/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Sub from './src/screens/Sub';
import {name as appName} from './app.json';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Container = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sub" component={Sub} />
    </Stack.Navigator>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Container);
