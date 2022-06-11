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
} from 'react-native';
import Simplebanner from '../components/Simplebanner';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import {Colors, Searchbar} from 'react-native-paper';
import Sliderfirst from '../components/Sliderfirst';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Fonts} from '../contants';
import axios from 'axios';

const Eachstar = ({time, star, image}) => {
  const [astroData, setAstroData] = useState([]);
  useEffect(() => {
    console.log('time-> ' + time + 'star-> ' + star);
    const options = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: {sign: star, day: time},
      headers: {
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '58db436a19msh727d2909f1661bfp1a0434jsn495665a5db56',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAstroData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [star, time]);
  return (
    <View style={{height: heightPercentageToDP('54%')}}>
      <Text
        style={{
          marginTop: heightPercentageToDP('2.5%'),
          fontSize: 20,
          fontFamily: Fonts.POPPINS_REGULAR,
          textAlign: 'center',
          color: '#890119',
        }}>
        {star} Daily Horoscope
      </Text>
      <Text
        style={{
          // marginTop: heightPercentageToDP('2.5%'),
          fontSize: 17,
          fontFamily: Fonts.POPPINS_REGULAR,
          textAlign: 'center',
          color: '#890119',
        }}>
        ({astroData.current_date})
      </Text>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.black,
              borderRadius: 10,
              padding: widthPercentageToDP('2%'),
              marginVertical: heightPercentageToDP('2%'),
              // flexDirection: 'row',
              //paddingHorizontal: widthPercentageToDP('3%'),
            }}>
            <View style={{flex: 1, marginVertical: heightPercentageToDP('1%')}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  fontFamily: Fonts.POPPINS_REGULAR,
                  color: Colors.black,
                }}>
                Your daily horoscope is ready!
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  padding: widthPercentageToDP('1%'),
                  // borderWidth: 1,
                  // borderColor: 'red',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      fontFamily: Fonts.POPPINS_REGULAR,
                      color: '#5f2a33',
                    }}>
                    Lucky Color
                  </Text>
                  {/* <Text
                    style={{
                      fontSize: 12,
                      fontFamily: Fonts.POPPINS_REGULAR,
                      color: '#5f2a33',
                    }}>
                    {astroData.color}
                  </Text> */}
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 12.5,
                      // backgroundColor: 'springgreen',
                      backgroundColor:
                        astroData.color &&
                        astroData.color.replace(/ /g, '').toLowerCase(),
                    }}
                  />
                </View>
                <View style={{marginTop: heightPercentageToDP('1%')}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      fontFamily: Fonts.POPPINS_REGULAR,
                      color: '#5f2a33',
                    }}>
                    Lucky Number
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: Fonts.POPPINS_REGULAR,
                      color: '#5f2a33',
                    }}>
                    {astroData.lucky_number}
                  </Text>
                </View>
              </View>
              {/*  */}
              <View
                style={{
                  flex: 1,
                  padding: widthPercentageToDP('1%'),
                  // borderWidth: 1,
                  // borderColor: 'blue',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      fontFamily: Fonts.POPPINS_REGULAR,
                      color: '#5f2a33',
                    }}>
                    Mood
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: Fonts.POPPINS_REGULAR,
                      color: '#5f2a33',
                    }}>
                    {astroData.mood}
                  </Text>
                </View>
                <View style={{marginTop: heightPercentageToDP('1%')}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      fontFamily: Fonts.POPPINS_REGULAR,
                      color: '#5f2a33',
                    }}>
                    Lucky Time
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: Fonts.POPPINS_REGULAR,
                      color: '#5f2a33',
                    }}>
                    {astroData.lucky_time}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: widthPercentageToDP('1.5%'),
                  // borderWidth: 1,
                  // borderColor: 'green',
                }}>
                <Avatar size="large" rounded source={image} />
              </View>
            </View>

            {/*  */}
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.black,
              borderRadius: 10,
              marginVertical: heightPercentageToDP('1%'),
              padding: heightPercentageToDP('1.5%'),
              paddingHorizontal: widthPercentageToDP('3%'),
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#5f2a33',
                fontWeight: '700',
                fontFamily: Fonts.POPPINS_REGULAR,
              }}>
              Description
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: Fonts.POPPINS_REGULAR,
                color: '#5f2a33',
              }}>
              {astroData.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP('0.5%'),
    paddingHorizontal: widthPercentageToDP('5%'),
    justifyContent: 'space-between',
  },
  Timeholder: {
    marginTop: heightPercentageToDP('2.5%'),
  },
  Eachtime: {
    borderWidth: 1,
    width: widthPercentageToDP('20%'),
    padding: 5,
    borderRadius: 5,
  },
  Timestyletext: {
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  cont: {
    borderWidth: 1,
    width: widthPercentageToDP('20%'),
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#dadad2',
  },
});
export default Eachstar;
