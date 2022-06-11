import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Pressable,
} from 'react-native';
import Colors from '../contants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Fonts} from '../contants';

export default function ChatFormField({label, name, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <View style={{alignItems: 'center', marginTop: hp(2.5)}}>
        <View>
          <Text style={{fontSize: hp(2.2), color: Colors.DEFAULT_GREY}}>
            {label}
          </Text>
          <TextInput
            style={{
              color: 'black',
              fontFamily: Fonts.POPPINS_MEDIUM,
              borderBottomWidth: 1,
              width: wp(90),
              textAlignVertical: 'bottom',
              borderColor: Colors.DEFAULT_GREY,
            }}
          />
        </View>
      </View>
    </Pressable>
  );
}
