import React, {useState} from 'react';

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
import {
  View,
  StatusBar,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import {Display} from '../utils';

import {Colors, Fonts} from '../contants';

import StarRating from 'react-native-star-rating-widget';

const CommentsCard = ({
  id,
  image,
  name,
  rating,
  comment,
  replier_name,
  date,
  replier_comment,
  commentator_date,
}) => {
  const [rate, setRate] = useState(2);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Avatar size="small" rounded source={image} />
        <Text
          style={{
            fontFamily: Fonts.POPPINS_REGULAR,
            fontSize: 17,
            fontWeight: '700',
            color: Colors.black,
            marginLeft: widthPercentageToDP('2%'),
          }}>
          {name}
        </Text>
      </View>
      <View style={{marginVertical: heightPercentageToDP('1%')}}>
        {/* <StarRating
          rating={rating}
          starSize={18}
          onChange={setRate}
          starStyle={{width: widthPercentageToDP('2%')}}
          //starStyle={{paddingHorizontal: wp('-9%')}}
          style={{marginHorizontal: widthPercentageToDP('-1.5%')}}
        /> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <StarRating
            rating={rating}
            onChange={setRate}
            starSize={18}
            starStyle={{width: widthPercentageToDP('2%')}}
            style={{marginHorizontal: widthPercentageToDP('-1.5%')}}
          />
          <Text
            style={{
              fontFamily: Fonts.POPPINS_REGULAR,
              fontSize: 14,
              fontWeight: '400',
              color: Colors.black,
              marginLeft: widthPercentageToDP('5%'),
            }}>
            {commentator_date}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: Fonts.POPPINS_REGULAR,
            fontSize: 13,
            fontWeight: '400',
            color: Colors.black,
            marginTop: heightPercentageToDP('1%'),
          }}>
          {comment}
        </Text>
      </View>
      {replier_name && (
        <View
          style={{
            backgroundColor: Colors.SILVER_GRAY_BACKGROUND,
            padding: widthPercentageToDP('2%'),
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View style={{flex: 2}}>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 15,
                  fontWeight: '400',
                  color: Colors.black,
                  marginTop: heightPercentageToDP('1%'),
                }}>
                {replier_name}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                // marginRight: widthPercentageToDP('1%'),
              }}>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 14,
                  fontWeight: '400',
                  color: Colors.black,
                  marginTop: heightPercentageToDP('1%'),
                }}>
                {date}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: Fonts.POPPINS_REGULAR,
              fontSize: 13,
              fontWeight: '400',
              color: Colors.black,
              marginTop: heightPercentageToDP('1%'),
            }}>
            {replier_comment}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    padding: widthPercentageToDP('3%'),
    borderRadius: 10,
    marginHorizontal: widthPercentageToDP('1.5%'),
    marginVertical: heightPercentageToDP('.5%'),
  },
});
export default CommentsCard;
