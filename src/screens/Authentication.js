import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, Fonts} from '../contants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import PhoneInput from 'react-native-phone-number-input';

export default function Authentication() {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 140, height: 140}}
          source={require('../assets/images/account.png')}
        />
        <Text style={styles.titleText}>Astro App</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'brown'}}>
        <View
          style={{
            backgroundColor: Colors.TEXT_BLACK,
            width: wp(90),
            height: 40,
            top: -hp(2.2),
            alignSelf: 'center',
            borderRadius: 25,
            borderColor: Colors.PURE_WHITE,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: Colors.WHITE, fontSize: 18}}>
            First Chat with Astrologer is free
          </Text>
        </View>

        <PhoneInput
          textInputStyle={{
            height: hp('3.5%'),
            padding: 1,
          }}
          containerStyle={{
            elevation: 2,
            width: wp('90%'),
            borderRadius: 15,
            marginTop: hp(5),
            alignSelf: 'center',
          }}
          defaultValue={value}
          defaultCode="IN"
          layout="first"
          onChangeText={text => {
            setValue(text);
            // console.log('onChange Text:', text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
            // console.log('Formatted Text:', text);
          }}
        />

        <TouchableOpacity onPress={() => console.log('OTP SENT')}>
          <View
            style={{
              backgroundColor: 'white',
              width: wp(90),
              height: 45,
              marginVertical: hp(2),
              alignSelf: 'center',
              borderRadius: 12,
              borderColor: Colors.TEXT_BLACK,
              borderWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View></View>
            <Text
              style={{
                color: Colors.TEXT_BLACK,
                fontFamily: Fonts.POPPINS_SEMI_BOLD,
                fontSize: hp(2.2),
              }}>
              Sent OTP
            </Text>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: wp('.5'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: hp(1.8), color: Colors.WHITE}}>
            By signing up you agree to our:{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(3),
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity>
            <Text style={{fontSize: hp(1.8), color: Colors.WHITE}}>
              Terms and conditions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: hp(1.8), color: Colors.WHITE}}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            bottom: hp(3.4),
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              height: hp(10),
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={styles.bottomTitle}>100%</Text>
            <Text style={styles.bottomSubTitle}>Privacy</Text>
          </View>
          <View
            style={{
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderColor: Colors.PURE_WHITE,
              height: hp(10),
              flex: 1,
              paddingHorizontal: wp(2),
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={styles.bottomTitle}>3000+</Text>
            <Text style={styles.bottomSubTitle}>Top Astrologers of India</Text>
          </View>
          <View
            style={{
              borderRightColor: Colors.PURE_WHITE,
              height: hp(10),
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={styles.bottomTitle}>2Cr+</Text>
            <Text style={styles.bottomSubTitle}>Happy Customers</Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_LIGHT,
    marginTop: hp(2),
  },
  bottomTitle: {
    color: Colors.PURE_WHITE,
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  bottomSubTitle: {
    color: Colors.PURE_WHITE,
    fontFamily: Fonts.POPPINS_LIGHT,
    textAlign: 'center',
  },
});
