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
import Separator from '../components/Separator';

import {Colors, Fonts} from '../contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {borderWidth} from 'styled-system';
import ServiceChip from '../components/ServiceChip';
import LinkChip from '../components/LinkChip';

export default function BookingSearch({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{
            width: wp(80),
            color: 'black',
            fontSize: hp(2),
            marginLeft: wp(2),
            paddingHorizontal: wp(2),
          }}
          placeholder={'Search for a Booking'}
          placeholderTextColor={Colors.DEFAULT_GREY}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.LIGHT_YELLOW,
    paddingVertical: 10,
    borderBottomColor: Colors.DEFAULT_GREY,
    borderBottomWidth: 1,
  },
});
