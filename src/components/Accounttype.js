import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Status,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Filtertags = [
  {id: 1, name: 'Habib Bank', image: require('../assets/images/main.jpg')},
  {id: 2, name: 'Habib Bank', image: require('../assets/images/main.jpg')},
  {id: 3, name: 'Habib Bank', image: require('../assets/images/main.jpg')},
  {id: 4, name: 'Habib Bank', image: require('../assets/images/main.jpg')},
  {id: 5, name: 'Habib Bank', image: require('../assets/images/main.jpg')},
];

import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Colors, Fonts, Images} from '../contants';
import Ionicons from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Separator} from '../components';
import {Display} from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import {AuthenicationService} from '../services';
import LottieView from 'lottie-react-native';

const Accounttype = () => {
  const navigation = useNavigation();
  const [Status, setStatus] = useState('');
  function SetStatusfunc(ss) {
    setStatus(ss);
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.bankmain}>Bank</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            marginTop: heightPercentageToDP('5%'),
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 1,
          }}>
          {Filtertags.map(data => (
            <View
              style={{
                width: widthPercentageToDP('30%'),
                borderRadius: 10,
                padding: 8,
                borderColor: 'black',
                marginTop: heightPercentageToDP('.5%'),
                height: heightPercentageToDP('15%'),
              }}>
              <TouchableOpacity onPress={() => SetStatusfunc(data.name)}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 60 / 2,
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={data.image}
                      style={[
                        Status === data.name ? styles.cont : styles.imagess,
                      ]}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: Fonts.POPPINS_REGULAR,
                      color: 'black',
                      textAlign: 'center',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    {data.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Text>Other</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  Maintitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 1,
  },
  Headingtextholder: {},
  Headingtext: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  cont: {
    borderWidth: 1,
    borderColor: Colors.DEFAULT_Maintheme,
    borderRadius: 60 / 2,
    width: 30,
    height: 30,
  },
  imagess: {
    width: 30,
    height: 30,
  },
  Choose: {
    marginTop: 20,
    padding: 20,
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  bankmain: {
    paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  Bankholder: {},
  firstrow: {
    flexDirection: 'row',
  },
});
export default Accounttype;
