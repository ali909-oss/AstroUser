import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Separator from '../components/Separator';

import {Colors, Fonts} from '../contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {Switch, Select, NativeBaseProvider} from 'native-base';

const SettingsScreen = ({navigation}) => {
  const [language, setLanguage] = useState('key0');
  const [currency, setCurrency] = useState('key0');
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
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
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        <ScrollView>
          {/* Notifications */}
          <View
            style={{
              backgroundColor: Colors.WHITE,
              padding: wp('3%'),
              borderRadius: 10,
              marginHorizontal: wp('2%'),
              marginVertical: hp('1%'),
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 17,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              Notifications
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: hp('1%'),
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 14,
                  fontWeight: '400',
                  color: Colors.TEXT_BLACK,
                }}>
                Astromall Chats
              </Text>
              <Switch size="md" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 14,
                  fontWeight: '400',
                  color: Colors.TEXT_BLACK,
                }}>
                Live Events
              </Text>
              <Switch size="md" />
            </View>
          </View>
          {/* Change Currency */}
          <View
            style={{
              backgroundColor: Colors.WHITE,
              padding: wp('3%'),
              borderRadius: 10,
              marginHorizontal: wp('2%'),
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 17,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              Change Currency
            </Text>
            <View style={{marginVertical: hp('1%')}}>
              <Select
                placeholder="Mode of payment"
                selectedValue={currency}
                width={wp('90%')}
                onValueChange={itemValue => setCurrency(itemValue)}>
                <Select.Item label="Pakistan" value="key0" />
                <Select.Item label="Russia" value="key1" />
                <Select.Item label="Australia" value="key2" />
              </Select>
            </View>
          </View>
          {/* Dark Mode */}
          <View
            style={{
              backgroundColor: Colors.WHITE,
              padding: wp('5%'),
              borderRadius: 10,
              marginHorizontal: wp('2%'),
              marginVertical: hp('1%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'space-between',
              }}>
              <Feather name="moon" size={24} style={{alignSelf: 'center'}} />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: wp('1%'),
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.POPPINS_REGULAR,
                    fontSize: 15,
                    fontWeight: '400',
                    color: Colors.TEXT_BLACK,
                  }}>
                  Dark Mode
                </Text>
                <Switch size="md" />
              </View>
            </View>
          </View>
          {/* Change Language */}
          <View
            style={{
              backgroundColor: Colors.WHITE,
              padding: wp('3%'),
              borderRadius: 10,
              marginHorizontal: wp('2%'),
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 17,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              Change App Language
            </Text>
            <View style={{marginVertical: hp('1%')}}>
              <Select
                placeholder="Mode of payment"
                selectedValue={language}
                width={wp('90%')}
                onValueChange={itemValue => setLanguage(itemValue)}>
                <Select.Item label="English" value="key0" />
                <Select.Item label="Urdu" value="key1" />
                <Select.Item label="French" value="key2" />
              </Select>
            </View>
          </View>
          {/* Terms and Conditions */}
          <TouchableOpacity
            style={{
              backgroundColor: Colors.WHITE,
              padding: wp('3.5%'),
              borderRadius: 10,
              marginHorizontal: wp('2%'),
              marginVertical: hp('1%'),
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 17,
                fontWeight: '900',
                color: Colors.DEFAULT_GREEN,
              }}>
              Terms and Conditions
            </Text>
          </TouchableOpacity>
          {/* Privacy Policy */}
          <TouchableOpacity
            style={{
              backgroundColor: Colors.WHITE,
              padding: wp('3.5%'),
              borderRadius: 10,
              marginHorizontal: wp('2%'),
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 17,
                fontWeight: '900',
                color: Colors.DEFAULT_GREEN,
              }}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
          {/* Logout my account */}
          <TouchableOpacity
            style={{
              backgroundColor: Colors.WHITE,
              padding: wp('3.5%'),
              borderRadius: 10,
              marginHorizontal: wp('2%'),
              marginVertical: hp('1%'),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <SimpleLineIcons
              name="logout"
              size={22}
              onPress={() => navigation.goBack()}
            />
            <View style={{marginLeft: wp('3%')}}>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 17,
                  fontWeight: '900',
                  color: Colors.TEXT_BLACK,
                }}>
                Logout my account
              </Text>
            </View>
          </TouchableOpacity>

          {/* Delete my account */}
          <TouchableOpacity
            style={{
              backgroundColor: Colors.WHITE,
              padding: wp('3.5%'),
              borderRadius: 10,
              marginHorizontal: wp('2%'),
              marginVertical: hp('1%'),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesign
              name="delete"
              size={24}
              color={Colors.SECONDARY_RED}
              onPress={() => navigation.goBack()}
            />
            <View style={{marginLeft: wp('3%')}}>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 17,
                  fontWeight: '900',
                  color: Colors.SECONDARY_RED,
                }}>
                Delete my account
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default SettingsScreen;
