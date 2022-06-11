import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import Separator from '../components/Separator';
import {Display} from '../utils';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FreeChatCategoriesCard from '../components/FreeChatCategoriesCard';
import FreeChatAstrologerCard from '../components/FreeChatAstrologerCard';
import BookNowProductDetailsCard from '../components/BookNowProductDetailsCard';

const astrologers = [
  {
    id: 1,
    name: 'Umar',
    language: 'English, Urdu',
    experience: '10',
    fee: '181.82',
    clients: '9001',
    speciality: 'Numerology',
    isBestSeller: true,
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 2,
    name: 'Umar',
    language: 'English, Urdu',
    experience: '10',
    fee: '181.82',
    clients: '9001',
    speciality: 'Vedic',
    isBestSeller: false,
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 3,
    name: 'Ahmad Bin Hamid',
    language: 'English, Urdu',
    experience: '10',
    fee: '181.82',
    clients: '9001',
    speciality: 'Vedic',
    isBestSeller: true,
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 4,
    name: 'Ahmad',
    language: 'English, Urdu',
    experience: '10',
    fee: '181.82',
    clients: '9001',
    speciality: 'Vedic',
    isBestSeller: false,
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 5,
    name: 'Ahmad',
    language: 'English, Urdu',
    experience: '10',
    fee: '181.82',
    clients: '9001',
    speciality: 'Vedic',
    isBestSeller: false,
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 6,
    name: 'Ahmad',
    language: 'English, Urdu',
    experience: '10',
    fee: '181.82',
    clients: '9001',
    speciality: 'Vedic',
    isBestSeller: false,
    image: require('../assets/images/salman.jpg'),
  },
];

function BookNowProductDetailsScreen({navigation}) {
  const [selectedName, setSelectedName] = React.useState(); // <-- Add this
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
        <Text style={styles.headerTitle}>Book Now</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}></ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginVertical: wp('3%')}}>
          {astrologers.map(astro => (
            <View style={styles.cardStyle}>
              <BookNowProductDetailsCard
                id={astro.id}
                name={astro.name}
                speciality={astro.speciality}
                isBestSeller={astro.isBestSeller}
                language={astro.language}
                experience={astro.experience}
                fee={astro.fee}
                clients={astro.clients}
                image={astro.image}
                onPress={() => {
                  navigation.navigate('Payment', {fee: astro.fee});
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND,
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
  cardStyle: {
    //marginVertical: wp('1.5%'),
    paddingHorizontal: wp('2%'),
    marginVertical: wp('1.5%'),
  },
  categoriesCard: {
    //paddingHorizontal: wp('1%'),
    // flexDirection: 'row',
    //marginHorizontal: wp('1%'),
  },
});

export default BookNowProductDetailsScreen;
