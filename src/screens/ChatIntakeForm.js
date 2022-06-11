import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DateField from '../components/DataTimePicker';

import PhoneInput from 'react-native-phone-number-input';
import Colors from '../contants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Fonts} from '../contants';
import ChatFormField from '../components/ChatFormField';
import AppButton from '../components/formFields/AppButton';
import {NativeBaseProvider, Select} from 'native-base';
import {alignItems} from 'styled-system';

export default function ChatIntakeForm({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [martialStatus, setMartialStatus] = useState('');
  const [timeOpen, setTimeOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [dateData, setDateData] = useState(new Date());
  const [formattedValue, setFormattedValue] = useState('');
  const martialArr = [
    {label: 'Married', value: '1'},
    {label: 'Single', value: '2'},
    {label: 'Divorced', value: '3'},
    {label: 'Seperated', value: '4'},
    {label: 'Widowed', value: '5'},
  ];
  return (
    <NativeBaseProvider>
      <View style={styles.Maincontainer}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.DEFAULT_WHITE}
          translucent
        />
        <View style={styles.Mainrowholder}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.Mainrowtext}>Chat Intake Form</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SupportChatTopTabNavigator')}>
            <Image
              source={require('../assets/images/support.png')}
              style={styles.Mainrowimage2}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{marginBottom: hp(8)}}>
          <ChatFormField label={'First Name*'} name={'firstName'} />
          <ChatFormField label={'Last Name*'} name={'lastName'} />
          <PhoneInput
            textInputStyle={{
              height: hp('3.5%'),
              padding: 1,
            }}
            containerStyle={{
              elevation: 2,
              width: wp('90%'),
              borderRadius: 15,
              marginTop: hp(5),
              alignSelf: 'center',
            }}
            defaultValue={phoneNumber}
            defaultCode="IN"
            layout="first"
            onChangeText={text => {
              setPhoneNumber(text);
              // console.log('onChange Text:', text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
              // console.log('Formatted Text:', text);
            }}
          />
          {/* <DatePicker
          open={dateOpen}
          modal
          date={dateData}
          onDateChange={dat => {
            setDateData(dat);
            console.log(dat);
          }}
          mode="date"
          textColor={Colors.TEXT_BLACK}
        /> */}
          <DateField
            label={'Date of Birth*'}
            name={'dob'}
            // onPress={() => setDateOpen(true)}
          />
          <DateField
            label={'Time of Birth*'}
            name={'tob'}
            // onPress={() => setDateOpen(true)}
          />

          <Text
            style={{
              fontSize: hp(2.2),
              marginTop: hp(2),
              paddingHorizontal: wp(5),
              color: Colors.DEFAULT_GREY,
            }}>
            MartialStatus
          </Text>
          <View style={{alignItems: 'center'}}>
            <Select
              borderWidth={0}
              borderBottomWidth={1}
              fontSize="md"
              selectedValue={martialStatus}
              width={wp(90)}
              accessibilityLabel="Martial Status"
              placeholder="Martial Status"
              placeholderTextColor={'black'}
              color={'black'}
              onValueChange={itemValue => {
                setMartialStatus(itemValue);
                console.log(itemValue);
              }}>
              {martialArr.map(item => {
                return <Select.Item label={item.label} value={item.value} />;
              })}
            </Select>
          </View>
          <ChatFormField label={'Occupation'} name={'occupation'} />
          <ChatFormField label={'Place of Birth*'} name={'placeOfBirth'} />
          <Text
            style={{
              fontSize: hp(2.2),
              marginTop: hp(2),
              paddingHorizontal: wp(5),
              color: Colors.DEFAULT_GREY,
            }}>
            Concerns
          </Text>
          <View style={{alignItems: 'center'}}>
            <Select
              borderWidth={0}
              borderBottomWidth={1}
              fontSize="md"
              selectedValue={martialStatus}
              width={wp(90)}
              accessibilityLabel="Concerns"
              placeholder="Concerns"
              placeholderTextColor={'black'}
              color={'black'}
              onValueChange={itemValue => {
                setMartialStatus(itemValue);
                console.log(itemValue);
              }}>
              {martialArr.map(item => {
                return <Select.Item label={item.label} value={item.value} />;
              })}
            </Select>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Payment Information Screen')}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: Colors.TEXT_BLACK,
              fontFamily: Fonts.POPPINS_REGULAR,
            }}>
            Start Chat with Manjot
          </Text>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Mainrowholder: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP('5%'),
    paddingHorizontal: widthPercentageToDP('5%'),
  },
  Mainrowimage1: {height: 22, width: 22, marginTop: 2.5},
  Mainrowimage2: {
    height: 25,
    width: 25,
    marginLeft: widthPercentageToDP('20%'),
  },
  Mainrowtext: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
    marginLeft: widthPercentageToDP('7.5%'),
  },
  image: {
    height: 300,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  button: {
    backgroundColor: Colors.KUNDLI_LIGHT_PINK,
    alignItems: 'center',
    alignSelf: 'center',
    padding: wp('4%'),
    bottom: 0,
    position: 'absolute',
    borderRadius: 10,
    width: wp('100%'),
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  Searchstyle: {
    width: widthPercentageToDP('96%'),
    borderRadius: 20,
    height: heightPercentageToDP('6.5%'),
  },
  Searchholder: {
    marginTop: heightPercentageToDP('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Categoryholder: {
    flexDirection: 'row',

    paddingHorizontal: widthPercentageToDP('5%'),
    marginTop: heightPercentageToDP('2.5%'),
    justifyContent: 'space-between',
  },
  round: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#dadad2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Categorytext: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_REGULAR,
    width: 55,
    textAlign: 'center',
    marginTop: 5,
  },
  Liveholder: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
