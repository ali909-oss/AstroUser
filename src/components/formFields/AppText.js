import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Fonts from '../../contants/Fonts';
import Colors from '../../contants/Colors';

function AppText({children, style}) {
  return (
    <Text style={[styles.text, style]} numberOfLines={2}>
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({
  text: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 18,
    fontFamily: Fonts.POPPINS_RUBIK,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default AppText;
