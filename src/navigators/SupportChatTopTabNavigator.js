import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import CustomerSupportScreen from '../screens/CustomerSupportScreen';
import AstrologersAssistantScreen from '../screens/AstrologersAssistantScreen';

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

const SupportChatTopTabNavigator = ({navigation}) => {
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
        <Text style={styles.headerTitle}>Support Chat</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {flex: 1, width: wp('50%')},
        }}
        initialRouteName="Customer Support">
        <Tab.Screen name="Customer Support" component={CustomerSupportScreen} />
        <Tab.Screen
          name="Astrologers Assistant"
          component={AstrologersAssistantScreen}
        />
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

export default SupportChatTopTabNavigator;
