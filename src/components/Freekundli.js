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
const DataTime = [
  {id: 1, name: 'Daily'},
  {id: 2, name: 'Weekly'},
  {id: 3, name: 'Monthly'},
  {id: 4, name: 'Yearly'},
];

import {Colors} from '../contants';

import {Separator} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Kundlimain from './Kundlimain';

const Data = [
  {id: 1, name: 'Open Kundli'},
  {id: 2, name: 'New Kundli'},
];
const Freekundli = ({navigation}) => {
  const [Status, setStatus] = useState('');
  function SetStatusfunc(ss) {
    setStatus(ss);
  }
  return (
    <NativeBaseProvider>
      <View style={{flex: 1, backgroundColor: 'white'}}>
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

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: widthPercentageToDP('95%'),
              backgroundColor: 'white',
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'grey',
              height: heightPercentageToDP('7%'),
            }}>
            {Data.map(data => {
              return (
                <TouchableOpacity
                  onPress={() => SetStatusfunc(data.name)}
                  style={[Status === data.name && styles.cont]}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 50,
                      paddingVertical: 10,
                    }}>
                    <Text style={{textAlign: 'center'}}>{data.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <Kundlimain data={Status} />
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
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(60),
    textAlign: 'center',
    color: Colors.LIGHTCOLOR,
  },
  mainscrollholder: {
    width: '100%',
    height: heightPercentageToDP('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 10,
  },
  cont: {
    backgroundColor: '#dadad2',
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'grey',
    height: heightPercentageToDP('7%'),
    width: widthPercentageToDP('50%'),
  },
});
export default Freekundli;
