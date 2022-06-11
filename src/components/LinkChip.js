import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, Fonts} from '../contants';
export default function LinkChip({logo, title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: wp(22),
          height: hp(14),
          marginHorizontal: wp(0.8),
          borderWidth: 1,
          borderColor: Colors.DEFAULT_GREY,
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Image
          style={{width: 34, height: 34, marginTop: hp(1.4)}}
          source={logo}
        />
        <Text
          style={{fontSize: hp(2.1), marginTop: hp(0.7), textAlign: 'center'}}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
