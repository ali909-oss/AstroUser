import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Completed from '../components/Completed';
import Inprogress from '../components/Inprogress';
import Pending from '../components/Pending';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const orders = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator style={{marginTop: heightPercentageToDP('4%')}}>
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="Inprogress" component={Inprogress} />
      <Tab.Screen name="Pending" component={Pending} />
    </Tab.Navigator>
  );
};

export default orders;
