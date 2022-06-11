import React, {useEffect, useState, useContext} from 'react';
import LottieView from 'lottie-react-native';
import Liveanimation from '../components/Liveanimation';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';

import {Searchbar} from 'react-native-paper';
import Sliderfirst from '../components/Sliderfirst';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Fonts} from '../contants';

const Astrologers = ({id, name, profession, image, onPress}) => {
  return (
    <View style={{marginTop: heightPercentageToDP('2%')}}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginRight: 10,
          width: 140,
          height: 140,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'grey',
          borderWidth: 2,
          borderRadius: 10,
        }}>
        <Avatar size="large" rounded source={image} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 13,
              fontFamily: Fonts.POPPINS_REGULAR,
              width: 60,
              marginTop: 5,
            }}>
            {name}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 13,
              fontFamily: Fonts.POPPINS_REGULAR,
              width: 60,
              color: 'green',
            }}>
            {profession}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 300,
    width: '100%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
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
export default Astrologers;
