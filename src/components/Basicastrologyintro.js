import React, {useState} from 'react';

import {widthPercentageToDP} from 'react-native-responsive-screen';

import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dots from 'react-native-vector-icons/Entypo';

import {
  Accordion,
  Box,
  NativeBaseProvider,
  Center,
  ScrollView,
  VStack,
  Text,
  Button,
  Modal,
  FormControl,
  InputTextArea,
  Input,
  TextArea,
  Image,
} from 'native-base';

import {Avatar} from 'react-native-elements';
import {View, StatusBar, StyleSheet, Touchable} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import {Display} from '../utils';

import {Fonts} from '../contants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from 'react-native-paper';

const Basicastrologyintro = ({
  name,
  image,
  profession,
  language,
  experience,
  charges,
  total_chat,
  total_call,
  about,
  ratings,
  total_reviews,
}) => {
  return (
    <NativeBaseProvider>
      <View
        style={{
          backgroundColor: Colors.white,
          padding: widthPercentageToDP('1%'),
          paddingBottom: heightPercentageToDP('1%'),
          margin: widthPercentageToDP('1.5%'),
          borderRadius: 10,
        }}>
        <View style={styles.mainrowholder}>
          <View style={{marginTop: 10, paddingHorizontal: 20}}>
            <Avatar size="large" rounded source={image} />
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: '#dadad2',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={styles.Textstyle}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondrow}>
            <Text style={{fontSize: 18, fontFamily: Fonts.POPPINS_SEMI_BOLD}}>
              {name}
            </Text>
            <Text style={{fontSize: 15, fontFamily: Fonts.POPPINS_REGULAR}}>
              {language}
            </Text>
            <Text style={{fontSize: 15, fontFamily: Fonts.POPPINS_REGULAR}}>
              {experience}
            </Text>
            <Text style={{fontSize: 15, fontFamily: Fonts.POPPINS_REGULAR}}>
              {charges}
            </Text>
          </View>
          <View style={{marginLeft: widthPercentageToDP('25%')}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Antdesign name="hearto" size={20} />
              <Image
                source={require('../assets/images/verified.png')}
                style={{width: 20, height: 20, marginLeft: 10}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginTop: heightPercentageToDP('2%'),
          }}
        />
        <View
          style={{
            paddingHorizontal: widthPercentageToDP('15%'),
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: heightPercentageToDP('1%'),
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/chat.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 13,
                fontWeight: '500',
                color: Colors.TEXT_BLACK,
                textAlign: 'center',
              }}>
              65k mins
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/phone.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 13,
                fontWeight: '500',
                color: Colors.TEXT_BLACK,
                textAlign: 'center',
              }}>
              42k mins
            </Text>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,

    backgroundColor: '#dadad2',
    paddingVertical: 12,
  },
  mainrowholder: {
    flexDirection: 'row',
  },
  firstrow: {
    flexDirection: 'column',
  },
  Textstyle: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  secondrow: {
    marginTop: 10,
  },
});
export default Basicastrologyintro;
