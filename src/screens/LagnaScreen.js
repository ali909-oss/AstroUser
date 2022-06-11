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

const LagnaScreen = () => {
  const [slider, setSlider] = useState(1);

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
      <View
        style={{
          paddingHorizontal: wp('1%'),
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <Pressable
              style={{
                backgroundColor: Colors.TEXT_GRAY,
                padding: wp('2%'),
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <Text>Lagna/Ascendant Chart</Text>
            </Pressable>
            <View style={{alignItems: 'center'}}>
              <Text>Chart</Text>
            </View>
            <Pressable
              style={{
                backgroundColor: Colors.TEXT_GRAY,
                padding: wp('2%'),
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <Text>Planets</Text>
            </Pressable>
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

export default LagnaScreen;
