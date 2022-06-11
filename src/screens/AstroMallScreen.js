import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Separator from '../components/Separator';
import Horoscope from '../components/Horoscope';
import {Colors, Fonts} from '../contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MallSlider from '../components/MallSlider';
const Data = [
  {
    image: require('../assets/images/astro1.jpg'),
    name: 'Puja @$501',
    saleOn: true,
  },
  {
    image: require('../assets/images/astro2.jpg'),
    name: 'Spell',
    saleOn: true,
  },
  {
    image: require('../assets/images/astro3.jpg'),
    name: 'Online Puja',
    saleOn: false,
  },
  {
    image: require('../assets/images/astro2.jpg'),
    name: 'Evil Eye(Nazar Lagna)',
    saleOn: false,
  },
  {
    image: require('../assets/images/astro2.jpg'),
    name: 'Puja',
    saleOn: false,
  },
  {
    image: require('../assets/images/astro1.jpg'),
    name: 'Online',
    saleOn: false,
  },
  {
    image: require('../assets/images/astro2.jpg'),
    name: 'Past Life Regression',
    saleOn: false,
  },
];
const images = [
  require('../assets/images/sale1.jpg'),
  require('../assets/images/sale2.jpg'),
  require('../assets/images/aquarius.jpg'),
  require('../assets/images/astro1.jpg'),
  require('../assets/images/cancer.jpg'),
];
const AstroMallScreen = ({navigation}) => {
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
        <Text style={styles.headerTitle}>Astro Mall</Text>
      </View>
      <ScrollView>
        <MallSlider images={images} />
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <View
            style={{
              backgroundColor: 'white',
              width: wp(95),
              height: 40,
              marginVertical: hp(2),
              alignSelf: 'center',
              borderRadius: 25,
              borderColor: Colors.TEXT_BLACK,
              borderWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: wp(4),
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.DEFAULT_GREY}}>
              Let's Find what you're looking for...
            </Text>
            <Image
              style={{width: 20, height: 20}}
              source={require('../images/clnd.png')}
            />
          </View>
        </TouchableOpacity>
        <FlatList
          data={Data}
          numColumns={2}
          keyExtractor={item => {
            item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Booking', {title: item.name})
                }>
                <View
                  style={[
                    styles.card,
                    {marginTop: hp(1), marginHorizontal: wp(1.3)},
                  ]}>
                  <Image style={styles.card} source={item.image} />

                  {item.saleOn && (
                    <View style={styles.saleTag}>
                      <Text style={{color: Colors.WHITE}}>Sale</Text>
                    </View>
                  )}

                  <View
                    style={{
                      position: 'absolute',
                      bottom: hp(1.5),
                      alignSelf: 'center',
                    }}>
                    <Text style={styles.cardText}>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={{backgroundColor: Colors.LIGHT_YELLOW, marginTop: hp(2)}}>
          <View style={styles.Liveholder}>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: Fonts.POPPINS_SEMI_BOLD,
                  textAlign: 'center',
                }}>
                Top Selling
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
        </View>
        <View style={{backgroundColor: Colors.LIGHT_YELLOW, marginTop: hp(2)}}>
          <View style={styles.Liveholder}>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: Fonts.POPPINS_SEMI_BOLD,
                  textAlign: 'center',
                }}>
                Recommended by us
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
        </View>
        <View style={{backgroundColor: Colors.LIGHT_YELLOW, marginTop: hp(2)}}>
          <View style={styles.Liveholder}>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: Fonts.POPPINS_SEMI_BOLD,
                  textAlign: 'center',
                }}>
                Newly Launched
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
        </View>
      </ScrollView>
    </View>
  );
};

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
    marginLeft: 20,
  },
  card: {
    height: hp(25),
    width: wp(47),
    backgroundColor: 'gray',
    borderRadius: 14,
  },
  cardText: {
    textAlign: 'center',
    fontSize: 19,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.PURE_WHITE,
  },
  saleTag: {
    position: 'absolute',
    backgroundColor: 'red',
    width: wp(18),
    height: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: wp(3),
    borderTopLeftRadius: wp(3),
  },
  Liveholder: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
});

export default AstroMallScreen;
