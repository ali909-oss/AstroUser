import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen, HomeScreen, WelcomeScreen} from '../screens';

import DailyHoroscope from '../components/DailyHoroscope';
import Freekundli from '../components/Freekundli';
import KundliForm from '../screens/KundliForm';
import Astrologersmain from '../components/Astrologersmain';
import Shoppingmain from '../components/Shoppingmain';

import HoroscopeMatchMakingForm from '../screens/HoroscopeMatchMakingForm';
import HoroMatchMakingDetailsScreen from '../screens/HoroMatchMakingDetailsScreen';
import FreeChatScreen from '../screens/FreeChatScreen';
import AvailabilityScreen from '../screens/AvailabilityScreen';
import SupportChatTopTabNavigator from '../navigators/SupportChatTopTabNavigator';
import KundliFormTopTabNavigator from '../navigators/KundliFormTopTabNavigator';
import NotficationScreen from '../screens/NotficationScreen';
import UserProfile from '../screens/UserProfile';
import SettingsScreen from '../screens/SettingsScreen';
import FAQScreen from '../screens/FAQScreen';
import ChatIntakeForm from '../screens/ChatIntakeForm';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator presentation="modal" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Homescreen" component={HomeScreen} />
    <Stack.Screen name="DailyHoroscope" component={DailyHoroscope} />
    <Stack.Screen name="Freekundli" component={Freekundli} />
    <Stack.Screen name="UserProfile" component={UserProfile} />
    <Stack.Screen name="Notification" component={NotficationScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Help" component={FAQScreen} />
    <Stack.Screen name="KundliForm" component={KundliForm} />
    <Stack.Screen name="Astrologersmain" component={Astrologersmain} />
    <Stack.Screen name="Shoppingmain" component={Shoppingmain} />
    <Stack.Screen
      name="HoroscopeMatchMakingForm"
      component={HoroscopeMatchMakingForm}
    />
    <Stack.Screen
      name="HoroMatchMakingDetailsScreen"
      component={HoroMatchMakingDetailsScreen}
    />
    <Stack.Screen name="FreeChatScreen" component={FreeChatScreen} />
    <Stack.Screen name="ChatIntakeForm" component={ChatIntakeForm} />

    <Stack.Screen name="AvailabilityScreen" component={AvailabilityScreen} />
    <Stack.Screen
      name="SupportChatTopTabNavigator"
      component={SupportChatTopTabNavigator}
    />
    <Stack.Screen
      name="KundliFormTopTabNavigator"
      component={KundliFormTopTabNavigator}
    />
  </Stack.Navigator>
);

export default AppNavigator;
