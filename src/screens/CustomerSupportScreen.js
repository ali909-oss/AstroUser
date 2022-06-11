import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

const CustomerSupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Customer Suport..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: Colors.APP_BACKGROUND,
  },
});

export default CustomerSupportScreen;
