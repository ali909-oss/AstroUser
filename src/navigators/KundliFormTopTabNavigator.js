import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import BasicScreen from '../screens/BasicScreen';
import LagnaScreen from '../screens/LagnaScreen';
import NavamsaScreen from '../screens/NavamsaScreen';
import TransitChartScreen from '../screens/TransitChartScreen';
import DashaScreen from '../screens/DashaScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import DivisionalChartsScreen from '../screens/DivisionalChartsScreen';
import LifeReport from '../screens/LifeReport';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import Separator from '../components/Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../contants/Colors';

const Tab = createMaterialTopTabNavigator();

const KundliFormTopTabNavigator = ({navigation, route}) => {
  const {bData, pData} = route.params;
  console.log('TAB NAVIGATOR Data', bData);
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
        <Text style={styles.headerTitle}>Kundli</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {flex: 1},
        }}
        initialRouteName="Basic">
        <Tab.Screen name="Basic">
          {() => <BasicScreen basicDetails={bData} pData={pData} />}
        </Tab.Screen>
        <Tab.Screen name="Lagna" component={LagnaScreen} />
        <Tab.Screen name="Navamsa" component={NavamsaScreen} />
        <Tab.Screen name="Transit Chart" component={TransitChartScreen} />
        <Tab.Screen name="Dasha" component={DashaScreen} />
        <Tab.Screen name="Planets" component={PlanetsScreen} />
        <Tab.Screen
          name="Divisional Charts"
          component={DivisionalChartsScreen}
        />
        <Tab.Screen name="Life Report" component={LifeReport} />
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

export default KundliFormTopTabNavigator;
