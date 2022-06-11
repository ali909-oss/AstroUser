import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

const KundliTopTab = ({id, name, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: Colors.DEFAULT_GREY,
    padding: wp('2%'),
    borderRadius: 5,
    //borderWidth: 1,
    // borderColor: 'red',
    //alignItems: 'center',
  },
});

export default KundliTopTab;
