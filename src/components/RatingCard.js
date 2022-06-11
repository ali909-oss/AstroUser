import React, {createRef, useState} from 'react';

import {widthPercentageToDP} from 'react-native-responsive-screen';

import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dots from 'react-native-vector-icons/Entypo';

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
  Image,
} from 'native-base';

import {Avatar} from 'react-native-elements';
import {View, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import {Display} from '../utils';

import {Colors, Fonts} from '../contants';

import * as Progress from 'react-native-progress';

import StarRating from 'react-native-star-rating-widget';

import MaterialIcons from 'react-native-vector-icons/FontAwesome';
import {borderColor} from 'styled-system';

const RatingCard = ({
  id,
  rating,
  five_star,
  four_star,
  three_star,
  two_star,
  one_star,
  total_reviews,
}) => {
  const [rate, setRate] = useState(2);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          marginVertical: heightPercentageToDP('1%'),
          //   borderWidth: 1,
          //   borderColor: 'black',
        }}>
        <Text
          style={{
            fontFamily: Fonts.POPPINS_REGULAR,
            fontSize: 17,
            fontWeight: '700',
            color: Colors.black,
          }}>
          Rating and reviews
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          //   borderWidth: 1,
          //   borderColor: 'green',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'blue',
          }}>
          <Text
            style={{
              fontFamily: Fonts.POPPINS_REGULAR,
              fontSize: 30,
              fontWeight: '700',
              color: Colors.black,
              paddingVertical: heightPercentageToDP('2.5%'),
              paddingHorizontal: widthPercentageToDP('1%'),
            }}>
            {rating}
          </Text>
          <View style={{paddingVertical: heightPercentageToDP('1%')}}>
            <StarRating
              rating={rating}
              onChange={setRate}
              starSize={18}
              starStyle={{width: widthPercentageToDP('2%')}}
              style={{marginHorizontal: widthPercentageToDP('-1.5%')}}
            />
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons
                name={'user'}
                color={Colors.TEXT_BLACK}
                size={18}
                style={{marginRight: widthPercentageToDP('1%')}}
              />
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 13,
                  fontWeight: '400',
                  color: Colors.black,
                }}>
                {total_reviews} total
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            // borderWidth: 1,
            // borderColor: 'red',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 13,
                fontWeight: '400',
                color: Colors.black,
                marginRight: widthPercentageToDP('1%'),
              }}>
              5
            </Text>
            <View>
              <Progress.Bar
                progress={five_star}
                width={widthPercentageToDP('40%')}
                height={heightPercentageToDP('1.5%')}
                color="#00ff00"
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 13,
                fontWeight: '400',
                color: Colors.black,
                marginRight: widthPercentageToDP('1%'),
              }}>
              4
            </Text>
            <View>
              <Progress.Bar
                progress={four_star}
                width={widthPercentageToDP('40%')}
                height={heightPercentageToDP('1.5%')}
                color="#2E2EFF"
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 13,
                fontWeight: '400',
                color: Colors.black,
                marginRight: widthPercentageToDP('1%'),
              }}>
              3
            </Text>
            <View>
              <Progress.Bar
                progress={three_star}
                width={widthPercentageToDP('40%')}
                height={heightPercentageToDP('1.5%')}
                color="#F24A72"
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 13,
                fontWeight: '400',
                color: Colors.black,
                marginRight: widthPercentageToDP('1%'),
              }}>
              2
            </Text>
            <View>
              <Progress.Bar
                progress={two_star}
                width={widthPercentageToDP('40%')}
                height={heightPercentageToDP('1.5%')}
                color="#4D96FF"
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 13,
                fontWeight: '400',
                color: Colors.black,
                marginRight: widthPercentageToDP('2%'),
                textAlign: 'center',
              }}>
              1
            </Text>
            <View>
              <Progress.Bar
                progress={one_star}
                width={widthPercentageToDP('40%')}
                height={heightPercentageToDP('1.5%')}
                color="#FFD93D"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: widthPercentageToDP('3%'),
    borderRadius: 10,
    marginHorizontal: widthPercentageToDP('1.5%'),
    marginVertical: heightPercentageToDP('.5%'),
  },
});
export default RatingCard;

{
  /* <View style={{flex: 1}}>
  <Progress.Bar progress={five_star} width={180} color="#00ff00" />
</View> */
}
