import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AstroMallScreen from '../screens/AstroMallScreen';
import BookingScreen from '../screens/BookingScreen';
import SearchScreen from '../screens/SearchScreen';
import OrderHistoryTopTabNavigator from './OrderHistoryTopTabNavigator';
import BookNowProductDetailsScreen from '../screens/BookNowProductDetailsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import PaymentInformationScreen from '../screens/PaymentInformationScreen';
import BookingSearch from '../screens/BookingSearch';

const Stack = createStackNavigator();

const MallNavigator = () => (
  <Stack.Navigator presentation="modal" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Mall" component={AstroMallScreen} />
    <Stack.Screen name="Booking" component={BookingScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen
      name="BookNowProduct"
      component={BookNowProductDetailsScreen}
    />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    <Stack.Screen name="Payment" component={PaymentInformationScreen} />
    <Stack.Screen name="BookingSearch" component={BookingSearch} />
  </Stack.Navigator>
);

export default MallNavigator;
