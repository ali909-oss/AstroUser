import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, Fonts} from '../contants';

export default function ServiceChip({logo, title, onPress, color}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: wp(30),
          backgroundColor: color,
          marginHorizontal: wp(0.8),
          paddingVertical: hp(0.7),
          paddingHorizontal: wp(2),
          borderRadius: wp(1.4),
        }}>
        <Image
          style={{width: 18, height: 18, marginBottom: hp(0.3)}}
          source={logo}
        />
        <Text
          style={{
            marginLeft: wp(1.3),
            fontSize: hp(1.7),
            fontFamily: Fonts.POPPINS_SEMI_BOLD,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
