import React from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../contants/Colors';
import Fonts from '../../contants/Fonts';

function AppButton({title, onPress, color = 'green'}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, {backgroundColor: {color}}]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingHorizontal: wp('35%'),
    paddingVertical: wp('4%'),
    alignSelf: 'center',

    marginVertical: wp('3%'),
  },
  text: {
    color: colors.WHITE,
    fontFamily: Fonts.POPPINS_RUBIK,
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
});

export default AppButton;
