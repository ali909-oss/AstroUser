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

const FreeChatCategoriesCard = ({id, name, image, onPress, isSelected}) => {
  const [catId, setCatId] = useState();
  let activeColor;
  activeColor = isSelected ? Colors.KUNDLI_YELLOW : Colors.WHITE; // Change this
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={onPress} style={styles.t_opacity}>
          <Image
            source={image}
            style={[styles.image, {borderColor: activeColor}]}
            resizeMode="cover"
          />
          <View
            style={{position: 'absolute', top: hp('0.5%'), left: wp('1.5%')}}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 12,
                fontWeight: '400',
                color: Colors.WHITE,
              }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: wp('1%'),
    justifyContent: 'center',
    marginBottom: wp('2.5%'),
  },
  t_opacity: {
    justifyContent: 'center',
  },
  image: {
    width: wp('23%'),
    height: wp('24%'),
    borderRadius: 9,
    borderWidth: 3,
    borderColor: Colors.WHITE,
  },
});
export default FreeChatCategoriesCard;
