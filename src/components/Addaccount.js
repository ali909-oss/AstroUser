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
} from "native-base"
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import { Avatar } from 'react-native-elements';
import {Colors, Fonts, Images} from '../contants';
import Ionicons from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Separator} from '../components';
import {Display} from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import {AuthenicationService} from '../services';
import LottieView from 'lottie-react-native';
import Accounttype from './Accounttype';
const Addaccount = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
       
        <Text style = {{marginRight:widthPercentageToDP("27.5%"),marginLeft:widthPercentageToDP("27.5%"),fontSize:17,fontFamily:Fonts.POPPINS_SEMI_BOLD}}>Add Account</Text>
        <Ionicons
          name="cross"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style = {styles.Choose}>Choose Your Account Type</Text>
      <Accounttype/>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.DEFAULT_WHITE,
    },
    Maintitle: {
     justifyContent:'center',
     alignItems:'center'
  
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
    },
    Choose:{
        marginTop:20,padding:20,
        fontSize:20,
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    }
  });
export default Addaccount;
