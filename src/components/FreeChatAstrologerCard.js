import React, {useEffect, useState, useContext} from 'react';
import LottieView from 'lottie-react-native';
import Liveanimation from '../components/Liveanimation';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import {Searchbar} from 'react-native-paper';
import Sliderfirst from '../components/Sliderfirst';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import StarRating from 'react-native-star-rating-widget';
import MaterialIcons from 'react-native-vector-icons/FontAwesome';

// const astrologers = [
//   {
//     id: 1,
//     name: 'All',
//     image: require('../assets/images/salman.jpg'),
//   },
//   {
//     id: 2,
//     name: 'Love',
//     image: require('../assets/images/salman.jpg'),
//   },
//   {
//     id: 3,
//     name: 'Career',
//     image: require('../assets/images/salman.jpg'),
//   },
//   {
//     id: 4,
//     name: 'Marriage',
//     image: require('../assets/images/salman.jpg'),
//   },
//   {
//     id: 5,
//     name: 'Holidays',
//     image: require('../assets/images/salman.jpg'),
//   },
// ];

const FreeChatAstrologerCard = ({
  id,
  name,
  address,
  language,
  experience,
  fee,
  clients,
  image,
  onPress
}) => {
  const [rating, setRating] = useState(0.5);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          padding: wp('2%'),
          //   borderWidth: 1,
          //   borderColor: 'red',
        }}>
        <Avatar size="large" rounded source={image} />
        <StarRating
          rating={rating}
          onChange={setRating}
          //maxStars={1}
          starSize={18}
          starStyle={{width: wp('2%')}}
          //starStyle={{paddingHorizontal: wp('-9%')}}
          style={{marginHorizontal: wp('-1.5%')}}
        />
        <View style={{flexDirection: 'row'}}>
          <MaterialIcons
            name={'user'}
            color={Colors.TEXT_BLACK}
            size={18}
            style={{marginRight: wp('2%')}}
          />
          <Text
            style={{
              fontFamily: Fonts.POPPINS_REGULAR,
              fontSize: 14,
              fontWeight: '400',
              color: Colors.TEXT_BLACK,
            }}>
            {clients} total
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          padding: wp('2%'),
          marginLeft: wp('5%'),
          //   borderWidth: 1,
          //   borderColor: 'green',
          //   marginLeft: wp('3%'),
        }}>
        <Text
          style={{
            fontFamily: Fonts.POPPINS_REGULAR,
            fontSize: 18,
            fontWeight: '700',
            color: Colors.TEXT_BLACK,
          }}>
          {name}
        </Text>
        <Text style={styles.detailsText}>{address}</Text>
        <Text style={styles.detailsText}>{language}</Text>
        <Text style={styles.detailsText}>Exp: {experience} Years</Text>
        <Text
          style={{
            fontFamily: Fonts.POPPINS_REGULAR,
            fontSize: 15,
            fontWeight: '700',
            color: Colors.TEXT_BLACK,
          }}>
          {fee}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: wp('2%'),
        }}>
        <Image
          source={require('../assets/images/verify_icon.png')}
          style={{width: 50, height: 50}}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              fontFamily: Fonts.POPPINS_REGULAR,
              fontSize: 15,
              fontWeight: '400',
              color: Colors.TEXT_BLACK,
              textAlign: 'center',
            }}>
            chat
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('2%'),
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  detailsText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 13,
    fontWeight: '400',
    color: Colors.TEXT_BLACK,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    width: wp('17%'),
    paddingVertical: wp('1.5%'),
  },
});
export default FreeChatAstrologerCard;
