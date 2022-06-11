import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

function KundliCard({id, text, title}) {
  return (
    <View style={styles.card}>
      <View
        style={{
          backgroundColor: Colors.DEFAULT_GREY,
          flex: 1,
          padding: wp('3%'),
          paddingHorizontal: wp('1%'),
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: Fonts.POPPINS_MULISH,
            color: Colors.WHITE,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </View>
      {title === 'Manglik Analysis' && (
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            margin: wp('5%'),
            alignSelf: 'center',
          }}>
          <Text style={{color: Colors.WHITE}}>{text}</Text>
        </View>
      )}
      {title !== 'Manglik Analysis' && (
        <View style={{flex: 1, padding: wp('3%')}}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WHITE,
    // padding: wp('3%'),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.TEXT_BLACK,
  },
  text: {
    fontFamily: Fonts.POPPINS_MULISH,
    color: Colors.TEXT_INPUT_COLOR,
    fontSize: 13,
    fontWeight: '400',
  },
});

export default KundliCard;
