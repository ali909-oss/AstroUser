import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

const DivisionalChartsScreen = () => {
  const [slider, setSlider] = useState(1);

  return (
    <View style={styles.container}>
      <Text>Divisional Charts Screen</Text>
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

export default DivisionalChartsScreen;
