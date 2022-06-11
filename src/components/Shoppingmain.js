import React, {useState} from 'react';

import {widthPercentageToDP} from 'react-native-responsive-screen';

import {Colors} from '../contants';
import {Searchbar} from 'react-native-paper';

import {Separator} from '../components';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dots from 'react-native-vector-icons/Entypo';

const Dataimage = [
  {
    id: 1,
    image: require('../assets/images/astro1.jpg'),
  },
];
const Data = [
  {
    id: 1,
    name: 'Tarot Reading',
    main_image: require('../assets/images/aries.jpg'),
    price: '',

    subimage: require('../assets/images/astro1.jpg'),
  },
  {
    id: 2,
    name: 'Numerology',
    main_image: require('../assets/images/aries.jpg'),
    price: '',

    subimage: require('../assets/images/astro2.jpg'),
  },
  {
    id: 3,
    name: 'Tarot Reading',
    main_image: require('../assets/images/aries.jpg'),
    price: '',
    subimage: require('../assets/images/astro3.jpg'),
  },
  {
    id: 4,
    name: 'Tarot Reading ',
    main_image: require('../assets/images/aries.jpg'),
    price: '',
    subimage: require('../assets/images/astro1.jpg'),
  },
  {
    id: 5,
    name: 'Tarot Reading',
    main_image: require('../assets/images/aries.jpg'),
    price: '',
    subimage: require('../assets/images/astro2.jpg'),
  },
];
import {
  Accordion,
  Box,
  NativeBaseProvider,
  Center,
  ScrollView,
  VStack,
  Image,
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

const Shoppingmain = ({route}) => {
  const {name} = route.params;
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <NativeBaseProvider>
      <View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
          translucent
        />
        <Separator height={StatusBar.currentHeight} />

        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>{name}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          {Dataimage.map(data => {
            return (
              <Image
                source={data.image}
                style={{
                  width: widthPercentageToDP('98%'),
                  height: heightPercentageToDP('25%'),
                  borderRadius: 20,
                }}
              />
            );
          })}
        </View>
        <View
          style={{
            marginTop: 10,
            width: widthPercentageToDP('95%'),
            marginRight: widthPercentageToDP('10%'),
            marginLeft: widthPercentageToDP('2.5%'),
          }}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.Searchstyle}
            placeholderTextColor={'grey'}
          />
        </View>
        {Data.map(data => {
          return <View></View>;
        })}
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
    width: Display.setWidth(30),
    textAlign: 'center',
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
    padding: 5,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 15,
    width: widthPercentageToDP('35%'),
    height: heightPercentageToDP('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dadad2',
  },
  Maincontainer: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP('0.5%'),
    paddingHorizontal: widthPercentageToDP('5%'),
    justifyContent: 'space-between',
  },
  Timeholder: {
    marginTop: heightPercentageToDP('2.5%'),
  },
  Eachtime: {
    borderWidth: 1,
    width: widthPercentageToDP('20%'),
    padding: 5,
    borderRadius: 5,
  },
  Timestyletext: {
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  conts: {
    borderWidth: 1,
    width: widthPercentageToDP('20%'),
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#dadad2',
  },
  Searchstyle: {
    width: widthPercentageToDP('96%'),
    borderRadius: 20,
    height: heightPercentageToDP('6.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Shoppingmain;
