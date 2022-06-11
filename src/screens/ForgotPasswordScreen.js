import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Switch,
  HStack
} from "native-base"
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import { Avatar } from 'react-native-elements';
import {Colors, Fonts, Images} from '../contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Separator} from '../components';
import {Display} from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import {AuthenicationService} from '../services';
import LottieView from 'lottie-react-native';


const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
    <View style = {styles.container}>
      <View style = {{justifyContent:'center',alignItems:'center'}} >
      <Text style = {styles.Maintitle}>Location Services</Text>
      <Image source={require("../assets/images/url.png")} style = {{width:250,height:150,marginTop:20}}/>
      </View>
      <View style = {{flexDirection:'row',justifyContent:'space-between',padding:30}}>
        <Text style = {styles.Maintitlet}>Location Services</Text>
        <View style = {{marginTop:50}}>
        <HStack alignItems="center" space={8}>
       
      <Switch />
    </HStack></View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={{
            marginTop: heightPercentageToDP('30%'),
            backgroundColor: Colors.DEFAULT_Maintheme,
            width: widthPercentageToDP('95%'),
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Fonts.POPPINS_REGULAR,
              color: 'white',
            }}>
            Let's Go
          </Text>
        </TouchableOpacity>
      </View>
    </View></NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginTop:heightPercentageToDP("10%")
  },
  Maintitle: {
   justifyContent:'center',
   alignItems:'center',
   fontSize:20,
   fontFamily:Fonts.POPPINS_REGULAR,

  },
  Maintitlet: {
    justifyContent:'center',
    alignItems:'center',
    fontSize:15,
    fontFamily:Fonts.POPPINS_REGULAR,
    marginTop:50
 
   },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom:1
  },
  Headingtextholder:{

  },
  Headingtext:{
    textAlign:'center',
    fontSize:20,
    fontFamily:Fonts.POPPINS_REGULAR,
  },
  cont: { 
    borderWidth: 4,
    borderColor: Colors.DEFAULT_Maintheme,
    borderRadius: 80/2,  
    width:60, 
    height:60,
  },
  imagess:{   
    width:60, 
    height:60
  }
});
export default ForgotPasswordScreen
