import React, {useState} from 'react';

import {widthPercentageToDP} from 'react-native-responsive-screen';
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
} from 'native-base';

import {Avatar} from 'react-native-elements';
import {View, StatusBar, StyleSheet, Touchable} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import {Display} from '../utils';

import {Fonts} from '../contants';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../contants';

import {Separator} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Eachstar from './Eachstar';
const DataTime = [
  // {id: 1, name: 'Today'},
  // {id: 2, name: 'Yesterday'},
  // {id: 3, name: 'Tommorrow'},
  {id: 1, name: 'Daily'},
  {id: 2, name: 'Weekly'},
  {id: 3, name: 'Monthly'},
  {id: 4, name: 'Yearly'},
];
function Main() {
  console.log('first');
}
const Timeframe = ({data}) => {
  const [timeStatus, setTimeStatus] = useState('');
  function SetTimeStatusfunc(ss) {
    setTimeStatus(ss);
  }

  console.log(data);
  console.log(timeStatus);
  return (
    <View>
      <View style={styles.timeMainContainer}>
        {DataTime.map(data => {
          return (
            <View style={styles.Timeholder}>
              <TouchableOpacity
                onPress={() => SetTimeStatusfunc(data.name)}
                style={[
                  timeStatus === data.name ? styles.timeConts : styles.Eachtime,
                ]}>
                <Text style={styles.Timestyletext}>{data.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <Eachstar data={data} Status={timeStatus} />
    </View>
  );
};

const styles = StyleSheet.create({
  timeMainContainer: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP('0.5%'),
    paddingHorizontal: widthPercentageToDP('5%'),
    justifyContent: 'space-around',
  },
  Timeholder: {
    // flex: 1,
    marginTop: heightPercentageToDP('2.5%'),
    // paddingHorizontal: widthPercentageToDP('25%'),
  },
  Eachtime: {
    borderWidth: 1,
    width: widthPercentageToDP('20%'),
    padding: 5,
    borderRadius: 5,
    // paddingHorizontal: widthPercentageToDP('-1%'),
    width: widthPercentageToDP('25%'),
    // flex: 1,
  },
  Timestyletext: {
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  timeConts: {
    // flex: 1,
    width: widthPercentageToDP('25%'),
    paddingHorizontal: widthPercentageToDP('-1%'),
    borderWidth: 1,
    // width: widthPercentageToDP('20%'),
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#dadad2',
  },
});
export default Timeframe;
