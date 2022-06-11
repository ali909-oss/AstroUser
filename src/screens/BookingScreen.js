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
  TouchableHighlight,
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
const images = [require('../assets/images/astro1.jpg')];

export default function BookingScreen({route, navigation}) {
  const {title} = route.params;
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
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <ScrollView>
        <MallSlider images={images} />
        <TouchableOpacity onPress={() => navigation.navigate('BookingSearch')}>
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
          style={{marginBottom: hp(2)}}
          data={Data}
          numColumns={2}
          keyExtractor={item => {
            item.id;
          }}
          renderItem={({item}) => {
            return (
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
                  }}>
                  <Text style={styles.cardText}>{item.name}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: wp(47),
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontSize: 13,
                          fontFamily: Fonts.POPPINS_MEDIUM,
                          color: Colors.PURE_WHITE,
                        }}>
                        USD 18.19/-
                      </Text>
                    </View>
                    <TouchableHighlight
                      underlayColor={Colors.PURE_WHITE}
                      style={{borderRadius: wp(10)}}
                      onPress={() => navigation.navigate('ProductDetails')}>
                      <View
                        style={{
                          borderColor: Colors.WHITE,
                          borderWidth: 1,
                          paddingHorizontal: wp(5),
                          paddingVertical: wp(0.5),
                          borderRadius: wp(10),
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: Fonts.POPPINS_MEDIUM,
                            color: Colors.PURE_WHITE,
                          }}>
                          Book
                        </Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            );
          }}
        />
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
    marginLeft: 20,
  },
  card: {
    height: hp(25),
    width: wp(47),
    backgroundColor: 'gray',
    borderRadius: 14,
  },
  cardText: {
    textAlign: 'left',
    marginLeft: wp(1.5),
    fontSize: 18,
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
