import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DrawerActions} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import colors from '../contants/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import fonts from '../contants/Fonts';

const profile = [
  {
    id: 1,
    name: 'Ahmad',
    cell: '0123456789',
    image: require('../assets/images/ahmad.jpg'),
  },
];

const CustomDrawer = (props, navigation) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: colors.WHITE,
          padding: 20,
          height: hp('100%'),
        }}>
        <View style={{height: hp('10%')}}>
          {/* <Image style={styles.head} source={require('../assets/head.png')} /> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: wp('3%'),
            position: 'absolute',
            top: wp('10%'),
            // borderWidth: 1,
            // borderColor: 'black',
          }}>
          {profile.map(patient => (
            <TouchableOpacity
              style={{flex: 2, flexDirection: 'row'}}
              onPress={() => props.navigation.navigate('UserProfile')}>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <Image
                  source={patient.image}
                  style={{width: 50, height: 50, borderRadius: 25}}
                />
                <View style={{flex: 1, marginLeft: wp('3%')}}>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_RUBIK,
                      fontSize: 16,
                      fontWeight: '500',
                      color: colors.TEXT_BLACK,
                    }}>
                    {patient.name}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <FontAwesome
                      name="phone"
                      color={colors.TEXT_BLACK}
                      size={15}
                    />

                    <View style={{marginLeft: wp('2%')}}>
                      <Text
                        style={{
                          fontFamily: fonts.POPPINS_RUBIK,
                          fontSize: 12,
                          fontWeight: '400',
                          color: colors.TEXT_BLACK,
                        }}>
                        {patient.cell}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <Pressable
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
              // borderWidth: 1,
              // borderColor: 'red',
            }}
            onPress={props.navigation.closeDrawer}>
            <Image
              style={styles.close}
              source={require('../assets/images/cross.png')}
            />
          </Pressable>
        </View>

        <View style={{flex: 1, marginTop: hp('1%')}}>
          <DrawerItemList {...props} />
          {/* <EvilIcons name="chevron-right" color={colors.WHITE} size={30} /> */}
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
          }}>
          <FontAwesome name={'sign-out'} size={27} color={colors.TEXT_BLACK} />
          <Text
            style={{
              color: colors.TEXT_BLACK,
              fontSize: 22,
              marginLeft: wp('5%'),
              fontWeight: 'bold',
            }}>
            LogOut
          </Text>
        </TouchableOpacity>
        <View style={{marginLeft: wp('5%')}}>
          <Text
            style={{
              fontFamily: fonts.POPPINS_REGULAR,
              fontSize: 14,
              fontWeight: '500',
              color: colors.TEXT_BLACK,
            }}>
            Also available on
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: wp('1%'),
            marginHorizontal: wp('2%'),
          }}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../assets/images/apple.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../assets/images/instagram.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../assets/images/youtube_icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../assets/images/facebook_icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../assets/images/linkedin.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../assets/images/twitter.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../assets/images/web_icon.png')}
            />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imagehead: {
    height: hp('8%'),
    width: wp('15%'),
    borderRadius: 12,
    marginLeft: wp('-5%'),
  },
  texta: {
    fontWeight: '500',
    fontSize: 18,
    color: 'white',
    marginLeft: wp('-18%'),
    padding: 4,
  },
  phone: {
    fontWeight: '500',
    fontSize: 14,
    color: 'white',
    marginLeft: wp('-13%'),
    marginTop: hp('-2%'),
  },
  close: {
    //marginLeft: wp('10%'),
    width: 30,
    height: 30,
  },
  image: {
    width: 25,
    height: 25,
    marginHorizontal: wp('2%'),
  },
});

export default CustomDrawer;
