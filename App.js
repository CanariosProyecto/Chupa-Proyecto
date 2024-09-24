import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from "./navigation/drawerNavigation";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <DrawerNavigation />
  );
}

