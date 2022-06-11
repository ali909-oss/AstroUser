import 'react-native-gesture-handler';

import React, {useState, useContext} from 'react';
import Navigators from './src/navigators';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigators/AppNavigator';
import NumerologyContext from './src/context/NumerologyContext';

import AppDrawerStack from './src/navigators/AppDrawerStack';
import CallScreen from './src/screens/CallScreen';
import OrderHistoryTopTabNavigator from './src/navigators/OrderHistoryTopTabNavigator';

import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import BookNowProductDetailsScreen from './src/screens/BookNowProductDetailsScreen';
import PaymentInformationScreen from './src/screens/PaymentInformationScreen';

import UserProfileScreen from './src/screens/Authentication';
import FAQScreen from './src/screens/ChatIntakeForm';

const App = () => {
  const [numerologyData, setNumerologyData] = useState([]);
  const [matchMakingData, setMatchMakingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    // <NumerologyContext.Provider
    //   value={{matchMakingData, setMatchMakingData, isLoading, setIsLoading}}>
    //   {/* {console.log(matchMakingData)} */}
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    // </NumerologyContext.Provider>

    <NumerologyContext.Provider
      value={{matchMakingData, setMatchMakingData, isLoading, setIsLoading}}>
      {/* {console.log(matchMakingData)} */}
      <NavigationContainer>
        <AppDrawerStack />
      </NavigationContainer>
    </NumerologyContext.Provider>

    // <UserProfileScreen />
    // <FAQScreen />

    // <ProductDetailsScreen />
    // <BookNowProductDetailsScreen />
    // <PaymentInformationScreen />

    // <NavigationContainer>
    //   <OrderHistoryTopTabNavigator />
    // </NavigationContainer>
  );
};

export default App;
