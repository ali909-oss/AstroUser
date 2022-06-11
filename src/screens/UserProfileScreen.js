import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import {Display} from '../utils';
import Separator from '../components/Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {Avatar} from 'react-native-elements';
import EditInfoCard from '../components/EditInfoCard';

const user_profile_list = [
  {
    id: 1,
    user_name: 'Ahmad Bin Hamid',
    phone: '+91 123456789',
    image: require('../assets/images/gemini.jpg'),
  },
];

const UserProfile = () => {
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
          // onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SCREEN_CONTAINER */}
        <View style={styles.screenContainer}>
          {/* USER_PROFILE_CARD */}
          {user_profile_list.map(user => (
            <View style={styles.profileCard}>
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: Fonts.POPPINS_REGULAR,
                      fontSize: 20,
                      fontWeight: '700',
                      color: Colors.TEXT_BLACK,
                    }}>
                    {user.user_name}
                  </Text>
                  <TouchableOpacity>
                    <Octicons
                      name="pencil"
                      size={24}
                      style={{marginLeft: wp('2%')}}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontFamily: Fonts.POPPINS_REGULAR,
                    fontSize: 15,
                    fontWeight: '400',
                    color: Colors.INACTIVE_GREY,
                  }}>
                  {user.phone}
                </Text>
              </View>
              <Avatar size="medium" rounded source={user.image} />
            </View>
          ))}
          {/* USER_PROFILE_CARD */}
          <View style={styles.line} />
          <View style={styles.myAccountCard}>
            <View style={{padding: wp('2%')}}>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 20,
                  fontWeight: '700',
                  color: Colors.TEXT_BLACK,
                }}>
                My Account
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 14,
                  fontWeight: '400',
                  color: Colors.INACTIVE_GREY,
                }}>
                Check your favorites, edit your settings {'&'} notifications
              </Text>
            </View>
            <EditInfoCard
              title={'Following'}
              icon={'user-follow'}
              onPress={() => console.log('Folowing')}
            />
            <EditInfoCard
              title={'Settings'}
              icon={'settings-outline'}
              onPress={() => console.log('Settings')}
            />
            <EditInfoCard
              title={'Notifications'}
              icon={'notifications-outline'}
              onPress={() => console.log('Notifications')}
            />
            {/* <EditInfoCard
              title={'Following'}
              subTitle={'welcome to react native'}
              icon={'settings-outline'}
              onPress={() => console.log('Pressed')}
            /> */}
          </View>
          <View style={styles.line} />
          <View style={styles.myAccountCard}>
            <View style={{padding: wp('2%')}}>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 20,
                  fontWeight: '700',
                  color: Colors.TEXT_BLACK,
                }}>
                My Orders
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 14,
                  fontWeight: '400',
                  color: Colors.INACTIVE_GREY,
                }}>
                View your order {'&'} wallet transactions
              </Text>
            </View>
            <EditInfoCard
              title={'Order History'}
              icon={'history-edu'}
              onPress={() => console.log('Order History')}
            />
            <EditInfoCard
              title={'Wallet Transactions'}
              icon={'wallet-outline'}
              amount={'0'}
              onPress={() => console.log('Wallet')}
            />
          </View>

          <View style={styles.line} />
          <View style={styles.myAccountCard}>
            <EditInfoCard
              title={'Gold Membership'}
              subTitle={'Flat 5% off on every session'}
              onPress={() => console.log('Gold Membership')}
            />
          </View>

          <View style={styles.line} />
          <View style={styles.myAccountCard}>
            <EditInfoCard
              title={'Help'}
              subTitle={'FAQ & customer suppport'}
              onPress={() => console.log('Help')}
            />
          </View>

          <View style={styles.line} />
          <View style={styles.myAccountCard}>
            <EditInfoCard
              title={'Rate us'}
              onPress={() => console.log('Rate us')}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.myAccountCard}>
            <EditInfoCard
              title={'Share'}
              onPress={() => console.log('Share')}
            />
          </View>
          <View style={styles.line} />
          {/* SOCIAL_ACCOUNTS */}
          <View style={{padding: wp('2%')}}>
            <Text>Also available on</Text>
          </View>
          <View style={styles.social}>
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
          {/* SOCIAL_ACCOUNTS */}
        </View>
        {/* SCREEN_CONTAINER */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: 25,
    height: 25,
    marginHorizontal: wp('2%'),
  },
  social: {
    flexDirection: 'row',
    padding: wp('2%'),
    // marginHorizontal: wp('2%'),
  },
  myAccountCard: {},
  line: {
    borderWidth: 0.5,
    borderColor: Colors.TEXT_BLACK,
    marginVertical: hp('.5%'),
  },
  profileCard: {
    padding: wp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  screenContainer: {
    flex: 1,
    padding: wp('3%'),
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
    // textAlign: 'center',
    color: Colors.LIGHTCOLOR,
  },
});

export default UserProfile;
