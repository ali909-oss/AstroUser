import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import {Table, Row, Rows} from 'react-native-table-component';
import KundliTopTabSlider from '../components/KundliTopTabSlider';
import axios from 'axios';
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

const PlanetsScreen = () => {
  const getKundli = async () => {
    const res = await axios.post(
      'https://astroanandbackend.herokuapp.com/api/astrology/sdk/planets',
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
    console.log([
      res.data[0] && res.data[0].name,
      res.data[0] && res.data[0].sign,
      res.data[0] && res.data[0].signLord,
      res.data[0] && res.data[0].fullDegree,
      res.data[0] && res.data[0].house,
    ]);
    setArrival(true);
  };
  const [slider, setSlider] = useState(1);
  const [data, setData] = useState();

  const [isArrived, setArrival] = useState(false);
  const [tableHead, setTableHead] = useState([
    'Planet',
    'Moon Sign',
    'Sign Lord',
    'Degree',
    'House',
  ]);
  const [tableData, setTableData] = useState([
    ['Sun', 'Pisces', 'Jupiter', '8°112', 'House'],
    ['Sun', 'Pisces', 'Jupiter', '8°112', 'House'],
    ['Sun', 'Pisces', 'Jupiter', '8°112', 'House'],
    ['Sun', 'Pisces', 'Jupiter', '8°112', 'House'],
    ['Sun', 'Pisces', 'Jupiter', '8°112', 'House'],
    ['Sun', 'Pisces', 'Jupiter', '8°112', 'House'],
    ['Sun', 'Pisces', 'Jupiter', '8°112', 'House'],
    ['Sun', 'Pisces', 'Jupiter', '8°112', 'House'],
    ['Sun', 'Pisces', 'Jupiter', '8°112', 'House'],
    ['Sun', 'Pisces', 'Jupiter', '8°112', 'House'],
  ]);

  function ConvertDDToDMS(D) {
    return [
      0 | D,
      '°',
      0 | (((D = (D < 0 ? -D : D) + 1e-4) % 1) * 60),
      "' ",
      0 | (((D * 60) % 1) * 60),
      '"',
    ].join('');
  }

  useEffect(() => {
    getKundli();
    {
      isArrived &&
        setTableData([
          [
            data[0].name,
            data[0].sign,
            data[0].signLord,
            ConvertDDToDMS(data[0].fullDegree),
            data[0].house,
          ],
          [
            data[1].name,
            data[1].sign,
            data[1].signLord,
            ConvertDDToDMS(data[1].fullDegree),
            data[1].house,
          ],
          [
            data[2].name,
            data[2].sign,
            data[2].signLord,
            ConvertDDToDMS(data[2].fullDegree),
            data[2].house,
          ],
          [
            data[3].name,
            data[3].sign,
            data[3].signLord,
            ConvertDDToDMS(data[3].fullDegree),
            data[3].house,
          ],
          [
            data[4].name,
            data[4].sign,
            data[4].signLord,
            ConvertDDToDMS(data[4].fullDegree),
            data[4].house,
          ],
          [
            data[5].name,
            data[5].sign,
            data[5].signLord,
            ConvertDDToDMS(data[5].fullDegree),
            data[5].house,
          ],
          [
            data[6].name,
            data[6].sign,
            data[6].signLord,
            ConvertDDToDMS(data[6].fullDegree),
            data[6].house,
          ],

          [
            data[7].name,
            data[7].sign,
            data[7].signLord,
            ConvertDDToDMS(data[7].fullDegree),
            data[7].house,
          ],
          [
            data[8].name,
            data[8].sign,
            data[8].signLord,
            ConvertDDToDMS(data[8].fullDegree),
            data[8].house,
          ],
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
            <Rows
              data={tableData}
              sstyle={styles.text}
              textStyle={{textAlign: 'center'}}
            />
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
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
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
                    nav_route="LagnaScreen"
                    onPress={() => {
                      setSlider(tabs.id);
                      console.log(tabs.name);
                    }}
                    //onPress={() => console.log(tabs.name)}
                  />
                </View>
              ))}
            </View>
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
    flex: 1,
    // height: hp('5%'),
    // borderWidth: 1,
    // borderColor: 'red',
    // width: wp('100%'),
    //padding: wp('2%'),
    //backgroundColor: '#f1f8ff',
  },
  text: {
    paddingVertical: hp(1),
  },
  headText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
  },
});

export default PlanetsScreen;
