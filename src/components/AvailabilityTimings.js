import React, {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
import {
  View,
  StatusBar,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import {Display} from '../utils';

import {Colors, Fonts} from '../contants';
import {flex, style} from 'styled-system';

const CommentsCard = ({
  id,
  date,
  day,
  time1,
  time2,
  time3,
  time4,
  time5,
  time6,
  time7,
}) => {
  const [rate, setRate] = useState(2);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={styles.day_text}>{day}</Text>
          <Text style={styles.date_text}>{date}</Text>
        </View>
        <View
          style={{
            flex: 1.5,
            borderLeftColor: Colors.TEXT_BLACK,
            borderLeftWidth: 1,
            alignItems: 'center',
          }}>
          {time1 && (
            <View style={styles.timing_slot}>
              <Text style={styles.timing_slot_text}>{time1}</Text>
            </View>
          )}
          {time2 && (
            <View style={styles.timing_slot}>
              <Text style={styles.timing_slot_text}>{time2}</Text>
            </View>
          )}
          {time3 && (
            <View style={styles.timing_slot}>
              <Text style={styles.timing_slot_text}>{time3}</Text>
            </View>
          )}
          {time4 && (
            <View style={styles.timing_slot}>
              <Text style={styles.timing_slot_text}>{time4}</Text>
            </View>
          )}
          {time5 && (
            <View style={styles.timing_slot}>
              <Text style={styles.timing_slot_text}>{time5}</Text>
            </View>
          )}
          {time6 && (
            <View style={styles.timing_slot}>
              <Text style={styles.timing_slot_text}>{time6}</Text>
            </View>
          )}
          {time7 && (
            <View style={styles.timing_slot}>
              <Text style={styles.timing_slot_text}>{time7}</Text>
            </View>
          )}
        </View>
      </View>
      {/* <View
        style={{
          borderWidth: 1,
          borderColor: Colors.TEXT_BLACK,
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    padding: wp('3%'),
    marginHorizontal: wp('1.5%'),
    borderBottomWidth: 1,
    borderColor: Colors.SILVER_GRAY_BACKGROUND,
    // marginVertical: hp('.5%'),
  },
  timing_slot: {
    borderWidth: 1,
    borderColor: Colors.TEXT_BLACK,
    borderRadius: 15,
    padding: wp('1%'),
    paddingHorizontal: wp('5%'),
    marginBottom: hp('1%'),
  },
  timing_slot_text: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black,
  },
  date_text: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.DEFAULT_GREY,
  },
  day_text: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
});
export default CommentsCard;
