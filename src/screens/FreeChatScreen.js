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

const astrologers = [
  {
    id: 1,
    name: 'Umar',
    address: 'Lahore',
    language: 'English, Urdu',
    experience: '10',
    fee: 'Free',
    clients: '9001',
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 2,
    name: 'Umar',
    address: 'Lahore',
    language: 'English, Urdu',
    experience: '10',
    fee: 'Free',
    clients: '9001',
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 3,
    name: 'Ahmad Bin Hamid',
    address: 'Gujranwala',
    language: 'English, Urdu',
    experience: '10',
    fee: 'Free',
    clients: '9001',
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 4,
    name: 'Ahmad',
    address: 'Gujranwala',
    language: 'English, Urdu',
    experience: '10',
    fee: 'Free',
    clients: '9001',
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 5,
    name: 'Ahmad',
    address: 'Gujranwala',
    language: 'English, Urdu',
    experience: '10',
    fee: 'Free',
    clients: '9001',
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 6,
    name: 'Ahmad',
    address: 'Gujranwala',
    language: 'English, Urdu',
    experience: '10',
    fee: 'Free',
    clients: '9001',
    image: require('../assets/images/salman.jpg'),
  },
];

const categories_card = [
  {
    id: 1,
    name: 'All',
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 2,
    name: 'Love',
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 3,
    name: 'Career',
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 4,
    name: 'Marriage',
    image: require('../assets/images/salman.jpg'),
  },
  {
    id: 5,
    name: 'Holidays',
    image: require('../assets/images/salman.jpg'),
  },
];
function FreeChatScreen({navigation}) {
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
        <Text style={styles.headerTitle}>Free Chat</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            margin: wp('2%'),
            marginBottom: wp('7%'),
            marginVertical: wp('8%'),
            flex: 1,
          }}>
          {categories_card.map(cat => (
            <View style={styles.categoriesCard}>
              <FreeChatCategoriesCard
                id={cat.id}
                name={cat.name}
                image={cat.image}
                //onPress={() => console.log('clicked')}
                onPress={() => setSelectedName(cat.name)} // <-- Add this
                isSelected={cat.name === selectedName} // <-- Add this
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginVertical: wp('3%')}}>
          {astrologers.map(astro => (
            <View style={styles.cardStyle}>
              <FreeChatAstrologerCard
                id={astro.id}
                name={astro.name}
                address={astro.address}
                language={astro.language}
                experience={astro.experience}
                fee={astro.fee}
                clients={astro.clients}
                image={astro.image}
                onPress={() => navigation.navigate('ChatIntakeForm')}
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

export default FreeChatScreen;
