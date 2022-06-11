import React, {useEffect, useState, useRef} from 'react';

import {widthPercentageToDP} from 'react-native-responsive-screen';
import {
  Accordion,
  Box,
  NativeBaseProvider,
  Center,
  ScrollView,
  VStack,
  Text,
  Button,
  Modal,
  FormControl,
  InputTextArea,
  Input,
  TextArea,
} from 'native-base';

import {Avatar} from 'react-native-elements';
import {View, StatusBar, StyleSheet, Touchable} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import {Display} from '../utils';

import {Fonts} from '../contants';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../contants';

import {Separator} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Eachstar from './Eachstar';
import Timeframe from './Timeframe';
import axios from 'axios';

const Data = [
  {
    id: 1,
    name: 'Aries',
    image: require('../assets/images/aries.jpg'),
    date: 'March 21-April 19',
  },
  {
    id: 2,
    name: 'Taurus',
    image: require('../assets/images/taurus.jpg'),
    date: 'April 20-May 20',
  },
  {
    id: 3,
    name: 'Gemini',
    image: require('../assets/images/gemini.jpg'),
    date: 'May 21-June 20',
  },
  {
    id: 4,
    name: 'Cancer',
    image: require('../assets/images/cancer.jpg'),
    date: 'June 21-July 22',
  },
  {
    id: 5,
    name: 'Leo',
    image: require('../assets/images/leo.jpg'),
    date: 'July 23-August 22',
  },
  {
    id: 6,
    name: 'Virgo',
    image: require('../assets/images/virgo.jpg'),
    date: 'August 23-September 22',
  },
  {
    id: 7,
    name: 'Libra',
    image: require('../assets/images/libra.jpg'),
    date: 'September 23-October 22',
  },
  {
    id: 8,
    name: 'Scorpio',
    image: require('../assets/images/libra.jpg'),
    date: 'October 23-November 21',
  },
  {
    id: 9,
    name: 'Sagittarius',
    image: require('../assets/images/sagittarius.jpg'),
    date: 'November 22-December 21',
  },
  {
    id: 10,
    name: 'Capricorn',
    image: require('../assets/images/capricon.jpg'),
    date: 'December 22-January 19',
  },
  {
    id: 11,
    name: 'Aquarius',
    image: require('../assets/images/aquarius.jpg'),
    date: 'January 20-February 18',
  },
  {
    id: 12,
    name: 'Pisces',
    image: require('../assets/images/pisces.jpg'),
    date: 'February 19-March 20',
  },
];

const DataTime = [
  {id: 1, name: 'Today'},
  {id: 2, name: 'Yesterday'},
  {id: 3, name: 'Tomorrow'},
];
const DailyHoroscope = ({route, navigation}) => {
  const {id, star, image} = route.params;
  const myScroll = useRef(id);

  const [Status, setStatus] = useState(star);
  // Time Frame
  const [timeStatus, setTimeStatus] = useState('Today');
  const [astroImage, setAstroImage] = useState(image);
  function SetTimeStatusfunc(ss) {
    setTimeStatus(ss);
  }

  function SetStatusfunc(ss, img) {
    setStatus(ss);
    setAstroImage(img);
  }
  useEffect(() => {
    console.log(star);
  }, []);
  return (
    <NativeBaseProvider>
      <View style={{flex: 1, backgroundColor: 'white'}}>
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
          <Text style={styles.headerTitle}>Horoscope</Text>
        </View>
        {/* <Timeframe data={Status} /> */}
        <View>
          <View style={styles.timeMainContainer}>
            {DataTime.map(data => {
              return (
                <View style={styles.Timeholder}>
                  <TouchableOpacity
                    onPress={() => SetTimeStatusfunc(data.name)}
                    style={[
                      timeStatus === data.name
                        ? styles.timeConts
                        : styles.Eachtime,
                    ]}>
                    <Text style={styles.Timestyletext}>{data.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
        <Eachstar time={timeStatus} star={Status} image={astroImage} />
        {/* <Timeframe data={Status} /> */}
        <View style={styles.mainscrollholder}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ref={myScroll}
            onContentSizeChange={() => myScroll.current.scrollToEnd()}>
            <View
              style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10}}>
              {Data.map(data => {
                return (
                  <TouchableOpacity
                    onPress={() => SetStatusfunc(data.name, data.image)}
                    style={{
                      marginRight: 10,
                      width: widthPercentageToDP('35%'),
                      height: heightPercentageToDP('20%'),
                      // flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: 'grey',
                      borderWidth: 2,
                      borderRadius: 15,
                    }}>
                    <View style={[Status === data.name && styles.cont]}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Avatar size="medium" rounded source={data.image} />
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 13,
                            fontFamily: Fonts.POPPINS_REGULAR,
                            width: 80,
                            marginTop: 10,
                          }}>
                          {data.name}
                        </Text>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 13,
                            fontFamily: Fonts.POPPINS_REGULAR,
                            width: 120,
                            marginTop: 1,
                          }}>
                          {data.date}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
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
  mainscrollholder: {
    // width: '100%',
    // height: heightPercentageToDP('30%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 10,
  },
  cont: {
    padding: 5,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 15,
    width: widthPercentageToDP('35%'),
    height: heightPercentageToDP('20%'),
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dadad2',
  },
  Maincontainer: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP('0.5%'),
    paddingHorizontal: widthPercentageToDP('5%'),
    justifyContent: 'space-between',
  },
  Timeholder: {
    marginTop: heightPercentageToDP('2.5%'),
  },
  conts: {
    borderWidth: 1,
    width: widthPercentageToDP('20%'),
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#dadad2',
  },
  // Time Frame Styles
  timeMainContainer: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP('0.5%'),
    paddingHorizontal: widthPercentageToDP('5%'),
    justifyContent: 'space-around',
  },
  Timeholder: {
    // flex: 1,
    marginTop: heightPercentageToDP('2.5%'),
    // paddingHorizontal: widthPercentageToDP('25%'),
  },
  Eachtime: {
    borderWidth: 1,
    // width: widthPercentageToDP('20%'),
    padding: 5,
    borderRadius: 5,
    // paddingHorizontal: widthPercentageToDP('-1%'),
    width: widthPercentageToDP('27%'),
    // flex: 1,
  },
  Timestyletext: {
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  timeConts: {
    // flex: 1,
    width: widthPercentageToDP('27%'),
    // paddingHorizontal: widthPercentageToDP('-1%'),
    borderWidth: 1,
    // width: widthPercentageToDP('20%'),
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#dadad2',
  },
});
export default DailyHoroscope;
