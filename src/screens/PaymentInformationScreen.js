import {Center} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
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

import {Radio, NativeBaseProvider} from 'native-base';

const payments_list = [
  {
    id: 1,
    love_honey_spell: 38.97,
    total_wallet_balance: 0,
    wallet_balance_deducted: 0,
    total_payable_amount: 38.97,
  },
];

const PaymentInformationScreen = ({navigation, route}) => {
  const {fee} = route.params;
  const [itemSelected, setItemSelected] = useState('');

  return (
    <NativeBaseProvider>
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
          <Text style={styles.headerTitle}>Payment Information</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{padding: wp('3%')}}>
            {payments_list.map(payment => (
              <View style={styles.card}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '900',
                    fontFamily: Fonts.POPPINS_REGULAR,
                    color: Colors.TEXT_BLACK,
                  }}>
                  Payment Details
                </Text>
                <View style={styles.textContainer}>
                  <Text style={styles.subTitleText}>Love Honey Spell</Text>
                  <Text style={styles.subTitleText}>USD {fee}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.subTitleText}>
                    Your total wallet balance
                  </Text>
                  <Text style={styles.subTitleText}>
                    USD {payment.total_wallet_balance}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.subTitleText}>
                    Wallet balance deducted
                  </Text>
                  <Text
                    style={[styles.subTitleText, {color: Colors.LIGHT_RED}]}>
                    USD {payment.wallet_balance_deducted}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.subTitleText,
                      {color: Colors.TEXT_BLACK, fontWeight: '700'},
                    ]}>
                    Total Payable Amount
                  </Text>
                  <Text
                    style={[
                      styles.subTitleText,
                      {color: Colors.TEXT_BLACK, fontWeight: '700'},
                    ]}>
                    USD{' '}
                    {Number(fee) +
                      Number(payment.wallet_balance_deducted) +
                      Number(payment.total_wallet_balance)}
                  </Text>
                </View>
              </View>
            ))}
            <View style={[styles.card, {marginTop: hp('2%')}]}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '900',
                  fontFamily: Fonts.POPPINS_REGULAR,
                  color: Colors.INACTIVE_GREY,
                }}>
                Payment Methods
              </Text>
              <Radio.Group>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.paymentContainer}>
                    <Image
                      source={require('../assets/images/paypal.png')}
                      resizeMode="contain"
                      style={styles.image}
                    />
                    <Text style={styles.paymentText}>Credit/Debit card</Text>
                  </View>
                  <View>
                    {/* <View>
                      <Text>dfd</Text>
                    </View> */}
                    <Radio value="1" />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.paymentContainer}>
                    <Image
                      source={require('../assets/images/paypal.png')}
                      resizeMode="contain"
                      style={styles.image}
                    />
                    <Text style={styles.paymentText}>Paypal</Text>
                  </View>
                  <Radio value="2" />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.paymentContainer}>
                    <Image
                      source={require('../assets/images/razorpay.png')}
                      resizeMode="contain"
                      style={styles.image}
                    />
                    <Text style={styles.paymentText}>Credit/Debit card</Text>
                  </View>
                  <Radio value="3" />
                </View>
              </Radio.Group>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Payment Information Screen')}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: Colors.TEXT_BLACK,
                fontFamily: Fonts.POPPINS_REGULAR,
              }}>
              Proceed to Payment
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  paymentText: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.TEXT_BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
    marginLeft: wp('3%'),
  },
  paymentContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // justifyContent: 'space-between',
  },
  image: {
    width: wp('15%'),
    height: hp('10%'),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
  subTitleText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.INACTIVE_GREY,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  card: {
    elevation: 1,
    padding: wp('3%'),
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
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
  button: {
    backgroundColor: Colors.KUNDLI_LIGHT_ORANGE,
    alignItems: 'center',
    alignSelf: 'center',
    padding: wp('4%'),
    borderRadius: 10,
    width: wp('90%'),
    bottom: 20,
    position: 'absolute',
  },
});

export default PaymentInformationScreen;
