import React, {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dots from 'react-native-vector-icons/Entypo';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  Accordion,
  Box,
  NativeBaseProvider,
  Center,
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
import {
  View,
  StatusBar,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Display} from '../utils';

import {Fonts} from '../contants';

import {Colors} from '../contants';

import {Separator} from '../components';

import AvailabilityTimings from '../components/AvailabilityTimings';

const monday_timings_list = [
  {
    id: 1,
    day: 'Monday',
    date: 'March 29',
    time1: '07:30 AM - 12:00 AM',
    time2: '07:30 AM - 12:00 AM',
  },
];
const tuesday_timings_list = [
  {
    id: 1,
    day: 'Tuesday',
    date: 'March 30',
    time1: '07:30 AM - 12:00 AM',
    time2: '07:30 AM - 12:00 AM',
    time3: '07:30 AM - 12:00 AM',
    time4: '07:30 AM - 12:00 AM',
  },
];
const wednesday_timings_list = [
  {
    id: 1,
    day: 'Wednesday',
    date: 'March 31',
    time1: '07:30 AM - 12:00 AM',
  },
];
const thursday_timings_list = [
  {
    id: 1,
    day: 'Thursday',
    date: 'April 1',
    time1: '07:30 AM - 12:00 AM',
  },
];
const friday_timings_list = [
  {
    id: 1,
    day: 'Friday',
    date: 'April 2',
    time1: '07:30 AM - 12:00 AM',
  },
];
const saturday_timings_list = [
  {
    id: 1,
    day: 'Saturday',
    date: 'April 3',
    time1: '07:30 AM - 12:00 AM',
  },
];
const sunday_timings_list = [
  {
    id: 1,
    day: 'Sunday',
    date: 'April 4',
    time1: '07:30 AM - 12:00 AM',
    time2: '07:30 AM - 12:00 AM',
    time3: '07:30 AM - 12:00 AM',
    time4: '07:30 AM - 12:00 AM',
    time5: '07:30 AM - 12:00 AM',
    time6: '07:30 AM - 12:00 AM',
    time7: '07:30 AM - 12:00 AM',
  },
];

const AvailabilityScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <View style={styles.contaier}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.WHITE}
          translucent
        />
        <Separator height={StatusBar.currentHeight} />

        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Avatar
            size="small"
            rounded
            source={require('../assets/images/ahmad.jpg')}
          />
          <Text style={styles.headerTitle}>Virat</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {monday_timings_list.map(monday => (
            <AvailabilityTimings
              id={monday.id}
              date={monday.date}
              day={monday.day}
              time1={monday.time1}
              time2={monday.time2}
            />
          ))}
          {tuesday_timings_list.map(tuesday => (
            <AvailabilityTimings
              id={tuesday.id}
              date={tuesday.date}
              day={tuesday.day}
              time1={tuesday.time1}
              time2={tuesday.time2}
              time3={tuesday.time3}
              time4={tuesday.time4}
            />
          ))}
          {wednesday_timings_list.map(wednesday => (
            <AvailabilityTimings
              id={wednesday.id}
              date={wednesday.date}
              day={wednesday.day}
              time1={wednesday.time1}
            />
          ))}
          {thursday_timings_list.map(thursday => (
            <AvailabilityTimings
              id={thursday.id}
              date={thursday.date}
              day={thursday.day}
              time1={thursday.time1}
            />
          ))}
          {friday_timings_list.map(friday => (
            <AvailabilityTimings
              id={friday.id}
              date={friday.date}
              day={friday.day}
              time1={friday.time1}
            />
          ))}
          {saturday_timings_list.map(saturday => (
            <AvailabilityTimings
              id={saturday.id}
              date={saturday.date}
              day={saturday.day}
              time1={saturday.time1}
            />
          ))}
          {sunday_timings_list.map(sunday => (
            <AvailabilityTimings
              id={sunday.id}
              date={sunday.date}
              day={sunday.day}
              time1={sunday.time1}
              time2={sunday.time2}
              time3={sunday.time3}
              time4={sunday.time4}
              time5={sunday.time5}
              time6={sunday.time6}
              time7={sunday.time7}
            />
          ))}
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  contaier: {
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
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(30),
    textAlign: 'center',
    color: Colors.LIGHTCOLOR,
  },
});
export default AvailabilityScreen;
