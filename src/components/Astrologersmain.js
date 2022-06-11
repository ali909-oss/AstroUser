import React, {useState} from 'react';

import {widthPercentageToDP} from 'react-native-responsive-screen';

import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dots from 'react-native-vector-icons/Entypo';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
import {View, StatusBar, StyleSheet, Touchable} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import {Display} from '../utils';

import {Fonts} from '../contants';

import ReadMore from '@fawazahmed/react-native-read-more';

import CommentsCard from '../components/CommentsCard';

const Data = [
  {
    id: 1,
    name: 'Sanjay',
    image: require('../assets/images/salman.jpg'),
    profession: 'Tarot',
    language: 'Hindi',
    Experience: '25 Years',
    charges: ' usd 0.56/min',
    Totalchat: '43K mins',
    Totalcall: '50k mins',
    About:
      'Sanjay is a renouned Astrologer with an experience of  ore than 6 years in the field of Astrology Sanjay is a renouned Astrologer with an experience of  ore than 6 years in the field of AstrologySanjay is a renouned Astrologer with an experience of  ore than 6 years in the field of Astrology',
    Ratings: '4.13',
    Totalreviews: '10232',
  },
];

const image_array = [
  {
    id: 1,
    image: require('../assets/images/ahmad.jpg'),
  },
  {
    id: 2,
    image: require('../assets/images/ahmad.jpg'),
  },
  {
    id: 3,
    image: require('../assets/images/ahmad.jpg'),
  },
  {
    id: 4,
    image: require('../assets/images/ahmad.jpg'),
  },
];

const commetns_array = [
  {
    id: 1,
    image: require('../assets/images/gemini.jpg'),
    name: 'Ahmad',
    rating: 3.4,
    comment: 'it was very nice talking to you',
    replier_name: 'Ali',
    date: '24 Mar 2022',
    replier_comment: 'thank you',
  },
  {
    id: 2,
    image: require('../assets/images/gemini.jpg'),
    name: 'Ahmad Bin Hamid',
    rating: 4.2,
    comment:
      'it was very nice talking to you, I dont have friends at all and it really felt like I was sharing my insecurities with a friend, thanks for talikng to me',
    replier_name: 'Ateeq',
    date: '24 Mar 2022',
    replier_comment: 'thanks for your love',
  },
  {
    id: 3,
    image: require('../assets/images/gemini.jpg'),
    name: 'Asad',
    rating: 3.4,
    comment: 'it was very nice talking to you',
  },
  {
    id: 4,
    image: require('../assets/images/gemini.jpg'),
    name: 'Virat Kohli',
    rating: 3.4,
    comment: 'it was very nice talking to you',
  },
];

const rating_data = [
  {
    id: 1,
    rating: '4.91',
    five_star: '0.9',
    four_star: '0.5',
    three_star: '0.7',
    two_star: '0.1',
    one_star: '0.3',
    total_reviews: '3223',
  },
];

import {Colors} from '../contants';

import {Separator} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Basicastrologyintro from './Basicastrologyintro';
import {CurrentRenderContext} from '@react-navigation/native';
import RatingCard from './RatingCard';

const Astrologersmain = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <View style={{flex: 1, backgroundColor: Colors.APP_BACKGROUND}}>
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
          <Text style={styles.headerTitle}>Profile</Text>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 10,
              paddingHorizontal: 8,
              marginLeft: widthPercentageToDP('20%'),
              paddingVertical: 5,
            }}>
            <Antdesign name="sharealt" size={25} style={{marginRight: 10}} />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontFamily: Fonts.POPPINS_SEMI_BOLD,
                marginTop: 5,
              }}>
              Share
            </Text>
          </View>
          <Dots name="dots-three-vertical" size={20} style={{marginLeft: 10}} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Data.map(data => (
            <Basicastrologyintro
              name={data.name}
              image={data.image}
              profession={data.profession}
              language={data.language}
              experience={data.Experience}
              charges={data.charges}
              total_chat={data.totalchat}
              total_call={data.totalCall}
              about={data.About}
              ratings={data.Ratings}
              total_reviews={data.Totalreviews}
            />
          ))}

          {/* image array */}
          <View
            style={{
              marginVertical: heightPercentageToDP('0.5%'),
              backgroundColor: Colors.WHITE,
              padding: widthPercentageToDP('1.5%'),
              margin: widthPercentageToDP('2%'),
              borderRadius: 10,
            }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bouncesZoom={false}
              bounces={false}>
              {image_array.map(img => (
                <View style={{paddingHorizontal: widthPercentageToDP('1%')}}>
                  <Avatar
                    size="xlarge"
                    source={img.image}
                    avatarStyle={{
                      borderRadius: 6,
                    }}
                  />
                </View>
              ))}
            </ScrollView>
            {/* READ_MORE_TEXT */}
            <View style={{padding: widthPercentageToDP('3%')}}>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 18,
                  fontWeight: '700',
                  color: Colors.TEXT_BLACK,
                  textAlign: 'center',
                }}>
                About me
              </Text>
              <ReadMore
                numberOfLines={3}
                style={styles.textStyle}
                seeMoreStyle={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginBottom: heightPercentageToDP('-1%'),
                }}
                seeLessStyle={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginBottom: heightPercentageToDP('-1%'),
                }}>
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
              </ReadMore>
            </View>
            {/* READ_MORE_TEXT */}
          </View>
          {/* image array */}

          <TouchableOpacity
            onPress={() => navigation.navigate('AvailabilityScreen')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: widthPercentageToDP('3%'),
              alignItems: 'center',
              backgroundColor: Colors.WHITE,
              margin: widthPercentageToDP('1.5%'),
              borderRadius: 10,
            }}>
            <FontAwesome
              name="calendar-times-o"
              size={25}
              style={{marginLeft: 10}}
            />
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 16,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              Availability
            </Text>
            <Entypo
              name="chevron-thin-right"
              size={25}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>

          {/* RATINGS_CARD */}
          {rating_data.map(rate => (
            <RatingCard
              id={rate.id}
              rating={rate.rating}
              five_star={rate.five_star}
              four_star={rate.four_star}
              three_star={rate.three_star}
              two_star={rate.two_star}
              one_star={rate.one_star}
              total_reviews={rate.total_reviews}
            />
          ))}
          {/* RATINGS_CARD */}

          {/* COMMENTS_CARD */}
          {commetns_array.map(comments => (
            <CommentsCard
              id={comments.id}
              image={comments.image}
              name={comments.name}
              rating={comments.rating}
              comment={comments.comment}
              replier_name={comments.replier_name}
              date={comments.date}
              replier_comment={comments.replier_comment}
            />
          ))}
          {/* COMMENTS_CARD */}
        </ScrollView>
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
    width: Display.setWidth(30),
    textAlign: 'center',
    color: Colors.LIGHTCOLOR,
  },
  mainscrollholder: {
    width: '100%',
    height: heightPercentageToDP('30%'),
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
  conts: {
    borderWidth: 1,
    width: widthPercentageToDP('20%'),
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#dadad2',
  },
  textStyle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '700',
    fontSize: 14.5,
    color: Colors.TEXT_BLACK,
    textAlign: 'justify',
  },
});
export default Astrologersmain;
