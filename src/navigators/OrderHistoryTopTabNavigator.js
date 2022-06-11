import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import CallScreen from '../screens/CallScreen';
import ChatScreen from '../screens/ChatScreen';
import ReportScreen from '../screens/ReportScreen';
import AstroMallOrdersScreen from '../screens/AstroMallOrdersScreen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import Separator from '../components/Separator';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../contants/Colors';

const Tab = createMaterialTopTabNavigator();

const OrderHistoryTopTabNavigator = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Order History</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {flex: 1, width: wp('30%')},
        }}
        initialRouteName="Call">
        <Tab.Screen name="Call" component={CallScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Report" component={ReportScreen} />
        <Tab.Screen name="Astro Mall" component={AstroMallOrdersScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#dadad2',
    paddingVertical: 12,
  },
});

export default OrderHistoryTopTabNavigator;
