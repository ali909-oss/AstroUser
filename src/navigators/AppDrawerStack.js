import React from 'react';
import {
  //width,
  //isLargeScreen,
  View,
  style,
  StyleSheet,
  Button,
  Text,
  useWindowDimensions,
  Image,
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
//import Tabs from '../screens/Tabs';

import CustomDrawer from '../components/CustomDrawerComponent';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MallNavigator from './MallNavigator';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Feather from 'react-native-vector-icons/dist/Feather';

import colors from '../contants/Colors';
import fonts from '../contants/Fonts';

import AppNavigator from '../navigators/AppNavigator';
import FreeChatScreen from '../screens/FreeChatScreen';
import AstroMallScreen from '../screens/AstroMallScreen';
import OrderHistoryTopTabNavigator from './OrderHistoryTopTabNavigator';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const AppDrawerStack = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: colors.WHITE,

        drawerInactiveTintColor: colors.WHITE,
        drawerStyle: {width: '80%'},
        headerShown: false,
        drawerLabelStyle: {
          fontFamily: fonts.POPPINS_REGULAR,
          fontWeight: '500',
          fontSize: 15,
          color: colors.TEXT_BLACK,
          marginLeft: wp('-2%'),
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={AppNavigator}
        options={{
          drawerIcon: ({focused, size}) => (
            <Ionicons name="home-outline" size={20} color={colors.TEXT_BLACK} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat with asrologers"
        component={FreeChatScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={20}
              color={colors.TEXT_BLACK}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Astro Mall"
        component={MallNavigator}
        options={{
          drawerIcon: ({focused, size}) => (
            <Feather name="shopping-bag" size={20} color={colors.TEXT_BLACK} />
          ),
        }}
      />
      <Drawer.Screen
        name="Order History"
        component={OrderHistoryTopTabNavigator}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialIcons name="history" size={22} color={colors.TEXT_BLACK} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Feather name="settings" size={20} color={colors.TEXT_BLACK} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerStack;
