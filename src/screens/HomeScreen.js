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
  StatusBar,
} from 'react-native';
import Simplebanner from '../components/Simplebanner';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import {Searchbar} from 'react-native-paper';
import Sliderfirst from '../components/Sliderfirst';

import Colors from '../contants/Colors';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Fonts} from '../contants';
import Liveevents from '../components/Liveevents';
import Astrologers from '../components/Astrologers';
import Horoscope from '../components/Horoscope';
import Shoppingcomponent from '../components/Shoppingcomponent';
import Blogs from '../components/Blogs';
import News from '../components/News';

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

const our_astrologers = [
  {
    id: 1,
    name: 'Roshni',
    image: require('../assets/images/salman.jpg'),
    profession: 'Vedic',
  },
  {
    id: 2,
    name: 'Ashok',
    image: require('../assets/images/salman.jpg'),
    profession: 'Tarot',
  },
  {
    id: 3,
    name: 'Ravi',
    image: require('../assets/images/salman.jpg'),
    profession: 'Vedic',
  },
  {
    id: 4,
    name: 'Ajay',
    image: require('../assets/images/salman.jpg'),
    profession: 'Tarot',
  },
  {
    id: 5,
    name: 'Sanjay',
    image: require('../assets/images/salman.jpg'),
    profession: 'Vedic',
  },
  {
    id: 6,
    name: 'Sanjay',
    image: require('../assets/images/salman.jpg'),
    profession: 'Tarot',
  },
  {
    id: 7,
    name: 'Sanjay',
    image: require('../assets/images/salman.jpg'),
    profession: 'Vedic',
  },
  {
    id: 8,
    name: 'Sanjay',
    image: require('../assets/images/salman.jpg'),
    profession: 'Tarot',
  },
];
const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.Maincontainer}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <View style={styles.Mainrowholder}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assets/images/menu.png')}
            style={styles.Mainrowimage1}
          />
        </TouchableOpacity>

        <Text style={styles.Mainrowtext}>Astro App</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SupportChatTopTabNavigator')}>
          <Image
            source={require('../assets/images/support.png')}
            style={styles.Mainrowimage2}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginBottom: 20}}>
        <View style={styles.Searchholder}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.Searchstyle}
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={styles.Categoryholder}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DailyHoroscope', {
                star: 'Aries',
                image: require('../assets/images/aries.jpg'),
              })
            }
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.round}>
              <Image
                source={require('../assets/images/horoscope.png')}
                style={{height: 40, width: 40}}
              />
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.Categorytext}>Daily Hor-oscope</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('KundliForm')}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.round}>
              <Image
                source={require('../assets/images/kundli.jpg')}
                style={{height: 40, width: 40}}
              />
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.Categorytext}>Free Kundli</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('HoroscopeMatchMakingForm')}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.round}>
              <Image
                source={require('../assets/images/mm.jpg')}
                style={{height: 40, width: 40}}
              />
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.Categorytext}>Match Making</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FreeChatScreen')}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.round}>
              <Image
                source={require('../assets/images/freec.png')}
                style={{height: 40, width: 40}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.Categorytext}>Free Chat</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Sliderfirst />
        <View style={styles.Liveholder}>
          <View>
            <Text style={{fontSize: 18, fontFamily: Fonts.POPPINS_REGULAR}}>
              Live Events
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'grey',
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                paddingHorizontal: 10,
                textAlign: 'center',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <Liveevents />
        <View style={styles.Liveholder}>
          <View>
            <Text style={{fontSize: 18, fontFamily: Fonts.POPPINS_REGULAR}}>
              Our Astrologers
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Freekundli');
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'grey',
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                paddingHorizontal: 10,
                textAlign: 'center',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: widthPercentageToDP('3%')}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {our_astrologers.map(astrologers => (
              <Astrologers
                id={astrologers.id}
                name={astrologers.name}
                profession={astrologers.profession}
                image={astrologers.image}
                onPress={() => navigation.navigate('Astrologersmain')}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.Liveholder}>
          <View>
            <Text style={{fontSize: 18, fontFamily: Fonts.POPPINS_REGULAR}}>
              Today's Horoscope
            </Text>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          {Data.map(stars => (
            <Horoscope
              id={stars.id}
              name={stars.name}
              image={stars.image}
              date={stars.date}
              onPress={() =>
                navigation.navigate('DailyHoroscope', {
                  id: stars.id,
                  star: stars.name,
                  image: stars.image,
                })
              }
            />
          ))}
        </ScrollView>
        <Simplebanner />
        <View style={styles.Liveholder}>
          <View>
            <Text style={{fontSize: 18, fontFamily: Fonts.POPPINS_REGULAR}}>
              Shop at Astroapp
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'grey',
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                paddingHorizontal: 10,
                textAlign: 'center',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <Shoppingcomponent />

        <View style={styles.Liveholder}>
          <View>
            <Text style={{fontSize: 18, fontFamily: Fonts.POPPINS_REGULAR}}>
              Latest Blogs
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'grey',
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                paddingHorizontal: 10,
                textAlign: 'center',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <Blogs />
        <View style={styles.Liveholder}>
          <View>
            <Text style={{fontSize: 18, fontFamily: Fonts.POPPINS_REGULAR}}>
              Behind The Scenes
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}></View>
        <View style={styles.Liveholder}>
          <View>
            <Text style={{fontSize: 18, fontFamily: Fonts.POPPINS_REGULAR}}>
              Clients Testimonials
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'grey',
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                paddingHorizontal: 10,
                textAlign: 'center',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              width: widthPercentageToDP('85%'),
              backgroundColor: '#e2dedb',
              height: 220,
              marginTop: heightPercentageToDP('2.5%'),
            }}>
            <View style={{height: 180}}></View>
          </View>
        </View>
        <View style={styles.Liveholder}>
          <View>
            <Text style={{fontSize: 18, fontFamily: Fonts.POPPINS_REGULAR}}>
              Astroapp in News
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'grey',
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                paddingHorizontal: 10,
                textAlign: 'center',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <News />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: heightPercentageToDP('2.5%'),
          }}>
          <View
            style={{
              width: widthPercentageToDP('85%'),
              backgroundColor: '#f3f0ef',
              height: heightPercentageToDP('45%'),
              borderRadius: 20,
            }}>
            <Text
              style={{
                paddingHorizontal: 20,
                marginTop: 10,
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 15,
              }}>
              Feedback to the CEO office !
            </Text>
            <Text
              style={{
                paddingHorizontal: 20,
                marginTop: 1,
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 10,
                color: 'grey',
              }}>
              Please share your Honest Feedback to help us improve
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                placeholder="Write Your Feedback"
                style={{
                  marginTop: 20,
                  height: heightPercentageToDP('25%'),
                  width: widthPercentageToDP('75%'),
                  borderRadius: 10,
                  textAlign: 'center',
                  backgroundColor: '#b6b5a2',
                  color: 'white',
                }}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                  width: widthPercentageToDP('40%'),
                  backgroundColor: '#b6b5a2',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    fontFamily: Fonts.POPPINS_BOLD,
                    padding: 5,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Mainrowholder: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP('5%'),
    paddingHorizontal: widthPercentageToDP('5%'),
  },
  Mainrowimage1: {height: 22, width: 22, marginTop: 2.5},
  Mainrowimage2: {
    height: 25,
    width: 25,
    marginLeft: widthPercentageToDP('50%'),
  },
  Mainrowtext: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
    marginLeft: widthPercentageToDP('7.5%'),
  },
  image: {
    height: 300,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  Searchstyle: {
    width: widthPercentageToDP('96%'),
    borderRadius: 20,
    height: heightPercentageToDP('6.5%'),
  },
  Searchholder: {
    marginTop: heightPercentageToDP('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Categoryholder: {
    flexDirection: 'row',

    paddingHorizontal: widthPercentageToDP('5%'),
    marginTop: heightPercentageToDP('2.5%'),
    justifyContent: 'space-between',
  },
  round: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#dadad2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Categorytext: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_REGULAR,
    width: 55,
    textAlign: 'center',
    marginTop: 5,
  },
  Liveholder: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
export default HomeScreen;
