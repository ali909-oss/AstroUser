import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Table, Row, Rows} from 'react-native-table-component';
import KundliTopTabSlider from '../components/KundliTopTabSlider';
import axios from 'axios';
const top_tabs_slider = [
  {
    id: 1,
    name: 'Birth Details',
  },
  {
    id: 2,
    name: 'Panchang Details',
  },
  {
    id: 3,
    name: 'Avakhada Details',
  },
];

const BasicScreen = ({basicDetails, pData}) => {
  const [slider, setSlider] = useState(1);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isArrived, setArrival] = useState(false);
  const [asyncArrive, setAsyncArrive] = useState(false);
  const [date, setDate] = useState({});
  const [time, setTime] = useState({});
  const [data, setData] = useState({});

  const getDate = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('date');
      setAsyncArrive(true);
      setDate(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      // error reading value
    }
  };
  const getTime = async () => {
    try {
      setAsyncArrive(true);
      const jsonValue = await AsyncStorage.getItem('time');
      setTime(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      // error reading value
    }
  };
  const getName = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      setName(value);

      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  const getLocation = async () => {
    try {
      const value = await AsyncStorage.getItem('location');
      setLocation(value);

      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  const getBasic = async () => {
    //   const res = await axios.post(
    //     'https://astroanandbackend.herokuapp.com/api/astrology/sdk/birth_details',
    //     {
    //       day: date.date,
    //       month: date.month,
    //       year: date.year,
    //       hour: time.hours,
    //       minute: time.minutes,
    //       lat: 19.132,
    //       long: 72.342,
    //       timezone: 5.5,
    //     },
    //   );
    //   setData(res.data);
    //   // console.log(data);

    //   setArrival(true);
    console.log('GET BASIC DETAILS FUNC IN BASIC SCREEN');
  };

  useEffect(() => {
    console.log(
      'Thsi is basic Screen',
      pData.tithi,
      'aya:::',
      basicDetails.ayanamsha,
    );
    getName();

    getLocation();

    const sufix = data.hour >= 12 ? 'PM' : 'AM';
    {
      basicDetails &&
        setTableData([
          ['Name', name],
          [
            'Date',
            basicDetails.day +
              '/' +
              basicDetails.month +
              '/' +
              basicDetails.year,
          ],
          [
            'Time',
            ((basicDetails.hour + 11) % 12) +
              1 +
              ':' +
              basicDetails.minute +
              ' ' +
              sufix,
          ],
          ['Place', location],
          ['Latitude', basicDetails.latitude],
          ['Longitude', basicDetails.longitude],
          ['Timezone', 'GMT+' + basicDetails.timezone],
          ['Sunrise', basicDetails.sunrise],
          ['Sunset', basicDetails.sunset],
          ['Ayanamsha', basicDetails.ayanamsha.toFixed(5)],
        ]);
    }
    setpanchang([
      ['Tithi', pData.tithi],
      ['Karan', pData.karan],
      ['Yog', pData.yog],
      ['Nakshtra', pData.nakshatra],
      ['Sunrise', pData.sunrise],
      ['Sunset', pData.sunset],
    ]);
  }, [basicDetails, name, location]);
  const [tableData, setTableData] = useState([]);
  const [panchang, setpanchang] = useState([]);

  const [avakhada, setAvakhada] = useState([]);

  const topTabSliderCheck = () => {
    if (slider === 1) {
      return (
        <View
          style={{
            borderWidth: 1,
            borderRadius: 15,
            marginTop: wp('5%'),
            borderColor: Colors.TEXT_BLACK,
          }}>
          <Table style={{padding: wp('4%')}}>
            <Rows data={tableData} style={styles.text} />
          </Table>
          {/* <Text>Name from Async Storage:: {name}</Text>
          <Text>Date from Async Storage:: {date.month}</Text>
          <Text>Hours from Async Storage:: {time.hours}</Text>
          <Text>Minutes from Async Storage:: {time.minutes}</Text> */}
        </View>
      );
    }
    if (slider === 2) {
      return (
        <View
          style={{
            borderWidth: 1,
            borderRadius: 15,
            marginTop: wp('5%'),
            borderColor: Colors.TEXT_BLACK,
          }}>
          <Table style={{padding: wp('4%')}}>
            <Rows data={panchang} style={styles.text} />
          </Table>
        </View>
      );
    }
    if (slider === 3) {
      return (
        <View
          style={{
            borderWidth: 1,
            borderRadius: 15,
            marginTop: wp('5%'),
            borderColor: Colors.TEXT_BLACK,
          }}>
          <Table style={{padding: wp('4%')}}>
            <Rows data={tableData} style={styles.text} />
          </Table>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: wp('1%'),
          //flex: 1,
          //paddingLeft: wp('4%'),
          //alignItems: 'center',
          //justifyContent: 'space-between',
          // justifyContent: 'flex-end',
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              marginTop: wp('4%'),
              //paddingHorizontal: wp('4%'),
              flexDirection: 'row',
              backgroundColor: Colors.WHITE,
              borderRadius: 12,
            }}>
            {top_tabs_slider.map(tabs => (
              <View>
                <KundliTopTabSlider
                  id={tabs.id}
                  name={tabs.name}
                  slider={slider}
                  nav_route="BasicScreen"
                  onPress={() => {
                    setSlider(tabs.id);
                    console.log(tabs.name);
                  }}
                  //onPress={() => console.log(tabs.name)}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>{topTabSliderCheck(slider)}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRightColor: Colors.APP_BACKGROUND,
    padding: wp('5%'),
  },
  head: {
    height: hp('4%'),
    // borderWidth: 1,
    // borderColor: 'red',
    //width: wp('90%'),
    //padding: wp('2%'),
    //backgroundColor: '#f1f8ff',
  },
  text: {
    paddingVertical: wp('2%'),
  },
});

export default BasicScreen;
