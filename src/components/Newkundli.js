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
  Image,
  Select,
  CheckIcon,
} from 'native-base';

import {Avatar} from 'react-native-elements';
import {View, StatusBar, StyleSheet, Touchable} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import {Display} from '../utils';

import {Fonts} from '../contants';

import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
const DataTime = [
  {id: 1, name: 'Daily'},
  {id: 2, name: 'Weekly'},
  {id: 3, name: 'Monthly'},
  {id: 4, name: 'Yearly'},
];

import {Colors} from '../contants';

import {Separator} from '../components';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
const Newkundli = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  let [language, setLanguage] = React.useState('');

  let [service, setService] = React.useState('');
  return (
    <View style={{marginTop: 20, paddingHorizontal: 20}}>
      <Text style={{fontSize: 15, fontFamily: Fonts.POPPINS_REGULAR}}>
        Name
      </Text>
      <TextInput
        placeholder="Enter Your Name"
        style={{
          borderRadius: 10,
          borderWidth: 1,
          height: heightPercentageToDP('5%'),
          marginTop: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      />
      <Text
        style={{
          fontSize: 15,
          fontFamily: Fonts.POPPINS_REGULAR,
          marginTop: 10,
        }}>
        Gender
      </Text>
      <VStack alignItems="center" space={4}>
        <Select
          selectedValue={service}
          minWidth="375"
          accessibilityLabel="Select Information Type"
          placeholder="Select Your Gender"
          _selectedItem={{
            bg: '#c89956',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={5}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Male" value="Male" />
          <Select.Item label="Female" value="Female" />
          <Select.Item label="Other" value="Other" />
        </Select>
      </VStack>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 15, fontFamily: Fonts.POPPINS_REGULAR, mb: 10}}>
          Enter Date of Birth
        </Text>
        <TouchableOpacity
          style={{
            width: widthPercentageToDP('95%'),
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onPress={() => setOpen(true)}>
          <Text>{date.toDateString()}</Text>
          <Image
            source={require('../assets/images/calendar.png')}
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          mode="date"
          textColor="green"
        />
      </View>

      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 15, fontFamily: Fonts.POPPINS_REGULAR, mb: 10}}>
          Enter Birth Time
        </Text>
        <TouchableOpacity
          style={{
            width: widthPercentageToDP('95%'),
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onPress={() => setOpen(true)}>
          <Text>{date.toDateString()}</Text>
          <Image
            source={require('../assets/images/clock.png')}
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          mode="date"
          textColor="green"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: heightPercentageToDP('5%'),
    paddingHorizontal: 20,
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
  Formholder: {},
  Textinputstyle: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    height: heightPercentageToDP('5%'),
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  labelstyle: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_REGULAR,
    marginBottom: 5,
  },
});

export default Newkundli;
