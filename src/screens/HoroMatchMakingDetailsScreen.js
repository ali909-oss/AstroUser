import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Screen from '../components/Screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import NumerologyContext from '../context/NumerologyContext';

import Separator from '../components/Separator';
import {Display} from '../utils';

import Ionicons from 'react-native-vector-icons/Ionicons';

function HoroMatchMakingDetailsScreen({navigation}) {
  const {matchMakingData, isLoading} = useContext(NumerologyContext);
  {
    console.log(matchMakingData);
  }
  const details = () => {
    if (isLoading || !matchMakingData) {
      return (
        <View style={styles.container}>
          <Text>Loading..</Text>
        </View>
      );
    } else if (!isLoading || matchMakingData) {
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
            <Text style={styles.headerTitle}>Match Making Details</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{padding: wp('3%')}}>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: Colors.TEXT_BLACK,
                  borderRadius: 15,
                  backgroundColor: Colors.WHITE,
                  marginTop: wp('2%'),
                }}>
                <View style={{marginTop: wp('3%')}}>
                  <Text
                    style={{
                      fontFamily: Fonts.POPPINS_REGULAR,
                      fontSize: 22,
                      fontWeight: '900',
                      color: Colors.TEXT_BLACK,
                      textAlign: 'center',
                    }}>
                    Basic Detail's
                  </Text>
                </View>

                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.WHITE,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.titleText}>Attribute</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.titleText}>Male</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.titleText}>Female</Text>
                  </View>
                </View>
                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.KUNDLI_LIGHT_PINK,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Varna</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.varna.male_koot_attribute}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.varna.female_koot_attribute}
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.WHITE,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Vashya</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.vashya.male_koot_attribute}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.vashya.female_koot_attribute}
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.KUNDLI_LIGHT_PINK,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Tara</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.tara.male_koot_attribute}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.tara.female_koot_attribute}
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.WHITE,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Yoni</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.yoni.male_koot_attribute}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.yoni.female_koot_attribute}
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.KUNDLI_LIGHT_PINK,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Maitri</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.maitri.male_koot_attribute}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.maitri.female_koot_attribute}
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.WHITE,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Gan</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.gan.male_koot_attribute}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.gan.female_koot_attribute}
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.KUNDLI_LIGHT_PINK,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Bhakut</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.bhakut.male_koot_attribute}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.bhakut.female_koot_attribute}
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.kundli_card,
                    {
                      flex: 1,
                      flexDirection: 'row',
                      backgroundColor: Colors.WHITE,
                      justifyContent: 'space-between',
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Nadi</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.nadi.male_koot_attribute}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>
                      {matchMakingData.nadi.female_koot_attribute}
                    </Text>
                  </View>
                </View>
                <View
                  style={{borderWidth: 0.5, borderColor: Colors.TEXT_BLACK}}
                />
                <View style={{padding: wp('3%')}}>
                  <Text
                    style={{
                      fontFamily: Fonts.POPPINS_REGULAR,
                      fontSize: 12,
                      fontWeight: '400',
                      color: Colors.TEXT_BLACK,
                      // textAlign: 'center',
                    }}>
                    Conclusion: The match has scored 27.5 points out of 36
                    points. This is quite good score.
                  </Text>
                </View>
              </View>
            </View>
            {/* Ashtakoot Details */}
            <View style={{padding: wp('3%')}}>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: Colors.TEXT_BLACK,
                  borderRadius: 15,
                  backgroundColor: Colors.WHITE,
                  // marginTop: wp('1%'),
                  // padding: wp('3%'),
                }}>
                <View style={{marginTop: wp('3%')}}>
                  <Text
                    style={{
                      fontFamily: Fonts.POPPINS_REGULAR,
                      fontSize: 22,
                      fontWeight: '900',
                      color: Colors.TEXT_BLACK,
                      textAlign: 'center',
                    }}>
                    Ashtakoot Detail's
                  </Text>
                </View>

                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.WHITE,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.titleText}>Attribute</Text>
                  </View>
                  <View style={{flex: 2, justifyContent: 'center'}}>
                    <Text style={styles.titleText}>Description</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.titleText}>Matching Points</Text>
                  </View>
                </View>
                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.KUNDLI_LIGHT_PINK,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Varna</Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.varna.description}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.varna.received_points}
                    </Text>
                    <Text style={styles.val_text}>
                      /{matchMakingData.varna.total_points}
                    </Text>
                  </View>
                </View>

                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.WHITE,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Vashya</Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.vashya.description}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.vashya.received_points}
                    </Text>
                    <Text style={styles.val_text}>
                      /{matchMakingData.vashya.total_points}
                    </Text>
                  </View>
                </View>

                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.KUNDLI_LIGHT_PINK,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Tara</Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.tara.description}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.tara.received_points}
                    </Text>
                    <Text style={styles.val_text}>
                      /{matchMakingData.tara.total_points}
                    </Text>
                  </View>
                </View>

                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.WHITE,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Yoni</Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.yoni.description}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.yoni.received_points}
                    </Text>
                    <Text style={styles.val_text}>
                      /{matchMakingData.yoni.total_points}
                    </Text>
                  </View>
                </View>

                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.KUNDLI_LIGHT_PINK,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Maitri</Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.maitri.description}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.maitri.received_points}
                    </Text>
                    <Text style={styles.val_text}>
                      /{matchMakingData.maitri.total_points}
                    </Text>
                  </View>
                </View>

                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.WHITE,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Gan</Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.gan.description}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.gan.received_points}
                    </Text>
                    <Text style={styles.val_text}>
                      /{matchMakingData.gan.total_points}
                    </Text>
                  </View>
                </View>

                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.KUNDLI_LIGHT_PINK,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Bhakut</Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.bhakut.description}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.bhakut.received_points}
                    </Text>
                    <Text style={styles.val_text}>
                      /{matchMakingData.bhakut.total_points}
                    </Text>
                  </View>
                </View>

                {/*  */}
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.WHITE,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.val_text}>Nadi</Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.nadi.description}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.val_text}>
                      {matchMakingData.nadi.received_points}
                    </Text>
                    <Text style={styles.val_text}>
                      /{matchMakingData.nadi.total_points}
                    </Text>
                  </View>
                </View>
                <View
                  style={{borderWidth: 0.5, borderColor: Colors.TEXT_BLACK}}
                />
                <View
                  style={[
                    styles.kundli_card,
                    {
                      backgroundColor: Colors.WHITE,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      flex: 1,
                    },
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.titleText}>Total Pts. </Text>
                    <Text style={styles.val_text}>
                      {matchMakingData.total.total_points}
                    </Text>
                  </View>
                  <View style={{flex: 2, justifyContent: 'center'}}>
                    <Text style={styles.titleText}>Rec. Points</Text>
                    <Text style={styles.val_text}>
                      {matchMakingData.total.received_points}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.titleText}>Min req.</Text>
                    <Text style={styles.val_text}>
                      {matchMakingData.total.minimum_required}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  };

  return <View style={styles.container}>{details()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: wp('3%'),
    borderRightColor: Colors.APP_BACKGROUND,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  kundli_card: {
    padding: wp('3%'),
    flex: 1,
  },
  val_text: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 13,
    fontWeight: 'normal',
    color: Colors.TEXT_BLACK,
    textAlign: 'center',
  },
  titleText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 16,
    fontWeight: '900',
    color: Colors.TEXT_BLACK,
    textAlign: 'center',
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

export default HoroMatchMakingDetailsScreen;
