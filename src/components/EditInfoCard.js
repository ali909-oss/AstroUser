import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const EditInfoCard = ({title, subTitle, icon, amount, onPress}) => {
  return (
    <View style={styles.cardContainer}>
      {icon && (
        <View style={styles.iconBackgroundStyles}>
          {icon === 'user-follow' ? (
            <SimpleLineIcons name={icon} size={23} />
          ) : icon === 'settings-outline' ? (
            <Ionicons name={icon} size={25} />
          ) : icon === 'history-edu' ? (
            <MaterialIcons name={icon} size={30} />
          ) : (
            <Ionicons name={icon} size={25} />
          )}
        </View>
      )}
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1, marginLeft: wp('2%')}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.titleText}>{title}</Text>
            {amount && <Text style={styles.amount}>USD {amount}</Text>}
          </View>
          {subTitle && <Text style={styles.subTitleText}>{subTitle}</Text>}
        </View>
        <Feather name="chevron-right" size={30} style={{alignSelf: 'center'}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: wp('2%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  amount: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  iconBackgroundStyles: {
    elevation: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.TEXT_BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  subTitleText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.INACTIVE_GREY,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
});

export default EditInfoCard;
