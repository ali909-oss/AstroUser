import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, HomeScreen, WelcomeScreen} from '../screens';
import DailyHoroscope from '../components/DailyHoroscope';
import Freekundli from '../components/Freekundli';
import Astrologersmain from '../components/Astrologersmain';
import Shoppingmain from '../components/Shoppingmain';

const Stack = createStackNavigator();
const Navigators = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Homescreen" component={HomeScreen} />
      <Stack.Screen name="DailyHoroscope" component={DailyHoroscope} />
      <Stack.Screen name="Freekundli" component={Freekundli} />

      <Stack.Screen name="Astrologersmain" component={Astrologersmain} />
      <Stack.Screen name="Shoppingmain" component={Shoppingmain} />
    </Stack.Navigator>
  );
};

export default Navigators;
