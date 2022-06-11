import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import {Table, Row, Rows} from 'react-native-table-component';
import KundliTopTabSlider from '../components/KundliTopTabSlider';

const top_tabs_slider = [
  {
    id: 1,
    name: 'Moon Sign',
  },
  {
    id: 2,
    name: 'Nakshatra',
  },
];

const DashaScreen = () => {
  const getKundli = async () => {
    const res = await axios.post(
      'https://astroanandbackend.herokuapp.com/api/astrology/sdk//majorvedasha',
      {
        day: 12,
        month: 3,
        year: 1992,
        hour: 15,
        minute: 23,
        lat: 19.132,
        long: 72.342,
        timezone: 5.5,
      },
    );
    setData(res.data);
    console.log(res.data[1].planet);
    setArrival(true);
  };
  const [slider, setSlider] = useState(1);
  const [data, setData] = useState();
  const [isArrived, setArrival] = useState(false);

  const [tableHead, setTableHead] = useState([
    'Planet',
    'End Date',
    'End Date',
  ]);
  const [tableData, setTableData] = useState([
    ['VE', '12-Mar-2017', '13-Dec-2029'],
    ['VE', '12-Mar-2017', '13-Dec-2029'],
    ['VE', '12-Mar-2017', '13-Dec-2029'],
    ['VE', '12-Mar-2017', '13-Dec-2029'],
    ['VE', '12-Mar-2017', '13-Dec-2029'],
    ['VE', '12-Mar-2017', '13-Dec-2029'],
    ['VE', '12-Mar-2017', '13-Dec-2029'],
    ['VE', '12-Mar-2017', '13-Dec-2029'],
    ['VE', '12-Mar-2017', '13-Dec-2029'],
  ]);

  useEffect(() => {
    getKundli();
    {
      isArrived &&
        setTableData([
          [data[0].planet, data[0].end, data[0].start],
          [data[1].planet, data[1].end, data[1].start],
          [data[2].planet, data[2].end, data[2].start],
          [data[3].planet, data[3].end, data[3].start],
          [data[4].planet, data[4].end, data[4].start],
          [data[5].planet, data[5].end, data[5].start],
          [data[6].planet, data[6].end, data[6].start],
          [data[7].planet, data[7].end, data[7].start],
          [data[8].planet, data[8].end, data[8].start],
        ]);
    }
  }, [isArrived]);

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
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headText}
            />
            <Rows data={tableData} style={styles.text} />
          </Table>
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
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headText}
            />
            <Rows data={tableData} style={styles.text} />
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
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headText}
            />
            <Rows data={tableData} style={styles.text} />
          </Table>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: Fonts.POPPINS_REGULAR,
              fontSize: 16,
              fontWeight: '700',
              color: Colors.TEXT_BLACK,
            }}>
            Mahadasha
          </Text>
        </View>
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
    flex: 1,
    // height: hp('5%'),
    // borderWidth: 1,
    // borderColor: 'red',
    //width: wp('90%'),
    //padding: wp('2%'),
    //backgroundColor: '#f1f8ff',
  },
  text: {
    paddingVertical: wp('2%'),
  },
  headText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
  },
});

export default DashaScreen;
