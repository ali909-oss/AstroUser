import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';

import {NativeBaseProvider} from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import {Display} from '../utils';
import Separator from '../components/Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {DataTable} from 'react-native-paper';

const Data = [
  {
    title: 'Break-Up Pain',
    subTitle: 'Are you unable to move on???',
    date: '21 Mar 2022',
  },
  {
    title: 'Rebellious Nature',
    subTitle: 'Are you unable to move on???',
    date: '22 Mar 2022',
  },
  {
    title: 'Arriving at the right time',
    subTitle:
      'Are you unable to move on??? we have the solution but you need to talk about it firsto move on??? we have the solution but you need o move on??? we have the solution but you need ',
    date: '24 Mar 2022',
  },
  {
    title: 'Arriving at the right time',
    subTitle:
      'Are you unable to move on??? we have the solution but you need to talk about it first',
    date: '24 Mar 2022',
  },
];
export default function NotficationScreen({navigation}) {
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
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <ScrollView>
        {Data.map((item, index) => (
          <View style={styles.card}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.subTitleText}>{item.subTitle}</Text>
            <Text
              style={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                color: Colors.TEXT_BLACK,
              }}>
              {item.date}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  card: {
    width: wp(94),
    borderRadius: 8,
    backgroundColor: Colors.PURE_WHITE,
    elevation: 1.5,
    marginHorizontal: hp(3),
    marginVertical: hp(0.5),
    alignSelf: 'center',
    padding: hp(1),
  },
  button: {
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    padding: wp('4%'),
    borderRadius: 10,
    width: wp('35%'),
  },
  titleText: {
    color: Colors.TEXT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: hp(2.5),
  },
  subTitleText: {
    color: Colors.TEXT_BLACK,
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: hp(2),
    marginBottom: hp(2),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#dadad2',
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(60),
    textAlign: 'center',
    color: Colors.LIGHTCOLOR,
  },
});
