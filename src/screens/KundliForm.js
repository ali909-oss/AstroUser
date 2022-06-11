import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  Alert,
  StatusBar,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Screen from '../components/Screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import MaterialIcons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DatePicker from 'react-native-date-picker';

import CheckBox from 'react-native-check-box';

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from '../components/forms';

import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Separator from '../components/Separator';

const validationSchema1 = Yup.object().shape({
  name: Yup.string().required().min(1).label('Name'),
});
const validationSchema2 = Yup.object().shape({
  city: Yup.string().required().min(1).label('City'),
});

const stateData = [
  {
    id: 1,
    icon: 'user-o',
  },
  {
    id: 2,
    icon: 'user-o',
  },
  {
    id: 3,
    icon: 'user-o',
  },
  {
    id: 4,
    icon: 'user-o',
  },
  {
    id: 5,
    icon: 'user-o',
  },
];

function KundliForm({navigation}) {
  const storeName = async value => {
    try {
      await AsyncStorage.setItem('name', value);
    } catch (e) {
      // saving error
    }
  };
  const storeGender = async value => {
    try {
      await AsyncStorage.setItem('gender', value);
    } catch (e) {
      // saving error
    }
  };
  const storeLocation = async value => {
    try {
      await AsyncStorage.setItem('location', value);
    } catch (e) {
      // saving error
    }
  };
  const storeDate = async (date, month, year) => {
    try {
      const jsonValue = JSON.stringify({date: date, month: month, year: year});
      await AsyncStorage.setItem('date', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const storeTime = async (minutes, hours) => {
    try {
      const jsonValue = JSON.stringify({minutes: minutes, hours: hours});
      await AsyncStorage.setItem('time', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getName = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      console.log('Name from Storage', value);
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  const getDate = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('date');
      console.log(
        'DatefromStoargae',
        jsonValue != null ? JSON.parse(jsonValue) : null,
      );
    } catch (e) {
      // error reading value
    }
  };
  const getTIme = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('time');
      console.log('Time', jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      // error reading value
    }
  };
  const [basicData, setBasicData] = useState({});
  const [panchangData, setPanchangData] = useState({});
  const [isArrived, setArrival] = useState(false);
  const getBasic = async () => {
    const basicRes = await axios.post(
      'https://astroanandbackend.herokuapp.com/api/astrology/sdk/birth_details',
      {
        day: date,
        month: month,
        year: year,
        hour: hour,
        minute: minutes,
        lat: 19.132,
        long: 72.342,
        timezone: 5.5,
      },
    );
    const panchangRes = await axios.post(
      'https://astroanandbackend.herokuapp.com/api/astrology/sdk/basic_panchang',
      {
        day: date,
        month: month,
        year: year,
        hour: hour,
        minute: minutes,
        lat: 19.132,
        long: 72.342,
        timezone: 5.5,
      },
    );
    setBasicData(basicRes.data);
    setPanchangData(panchangRes.data);
    console.log(basicData);
    {
      panchangData &&
        navigation.navigate('KundliFormTopTabNavigator', {
          bData: basicRes.data,
          pData: panchangRes.data,
        });
    }

    setArrival(true);
  };

  useEffect(() => {
    getDate();
    getTIme();
    getName();
  }, []);

  const [progressState, setProgressState] = useState(1);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');

  const [dateData, setdateData] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [year, setYear] = useState(new Date());

  const [time, setTime] = useState(new Date());
  const [hour, setHour] = useState(new Date());
  const [minutes, setMinutes] = useState(new Date());
  const [open, setOpen] = useState(true);

  const [open2, setOpen2] = useState(true);

  const [isChecked, setIsChecked] = useState(false);

  const [clr1, setClr1] = useState('black');
  const [clr2, setClr2] = useState('black');
  const [clr3, setClr3] = useState('black');

  //   const func = val => {
  //     setName(val);
  //     console.log('->>> ' + form_val1);
  //   };

  const check_func = check => {
    if (check === 1) {
      return (
        <View style={{flex: 1}}>
          <View style={{marginTop: wp('15%')}}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 20,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              Hey there!{'\n'}What is Your name?
            </Text>
          </View>
          <View style={{marginTop: wp('7%')}}>
            <Formik
              initialValues={{
                name: '',
              }}
              onSubmit={values => {
                setName(values.name);
                console.log(values);
                console.log('->' + form_val1);
              }}
              validationSchema={validationSchema1}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                errors,
                values,
              }) => (
                <View>
                  {setName(values.name)}
                  <FormField
                    maxLength={25}
                    name="name"
                    placeholder="User Name"
                  />
                  <Text style={{color: 'red'}}>{errors.name}</Text>
                  <Pressable
                    style={styles.button}
                    onPress={() => {
                      handleSubmit();
                      storeName(name);
                      {
                        values.name === ''
                          ? Alert.alert('Please fill details..')
                          : setProgressState(3);
                      }
                      // console.log('dfd');
                    }}>
                    <Text
                      style={{
                        fontFamily: Fonts.POPPINS_REGULAR,
                        fontSize: 15,
                        fontWeight: '700',
                        color: Colors.TEXT_BLACK,
                      }}>
                      Next
                    </Text>
                  </Pressable>
                </View>
              )}
            </Formik>
          </View>
        </View>
      );
    }
    if (check === 2) {
      return (
        <View style={{flex: 1, marginTop: wp('15%')}}>
          <View>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 20,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              What is Your gender?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginTop: wp('2%'),
              justifyContent: 'space-between',
              padding: wp('5%'),
            }}>
            <View>
              <Pressable
                onPress={() => {
                  setGender('Male');
                  storeGender('Male');
                  setProgressState(3);
                  console.log(gender);
                  setClr1('#ccc');
                  setClr2('black');
                  setClr3('black');
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  //marginHorizontal: wp('1%'),
                  //marginRight: wp('2%'),
                  //backgroundColor: Colors.TEXT_BLACK,
                  backgroundColor: clr1,
                }}>
                <MaterialCommunityIcons
                  name={'gender-male'}
                  color={Colors.WHITE}
                  size={24}
                />
              </Pressable>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: wp('2.5%'),
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 15,
                  fontWeight: '700',
                  color: Colors.TEXT_BLACK,
                }}>
                Male
              </Text>
            </View>
            <View>
              <Pressable
                onPress={() => {
                  setGender('Female');
                  storeGender('Female');
                  setProgressState(3);
                  console.log(gender);
                  setClr1('black');
                  setClr2('#ccc');
                  setClr3('black');
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: wp('1%'),
                  marginRight: wp('2%'),
                  backgroundColor: clr2,
                }}>
                <MaterialCommunityIcons
                  name={'gender-female'}
                  color={Colors.WHITE}
                  size={24}
                />
              </Pressable>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: wp('2.5%'),
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 15,
                  fontWeight: '700',
                  color: Colors.TEXT_BLACK,
                }}>
                Female
              </Text>
            </View>
            <View>
              <Pressable
                onPress={() => {
                  setGender('Transgender');
                  storeGender('Transgender');
                  setProgressState(4);
                  console.log(gender);
                  setClr1('black');
                  setClr2('black');
                  setClr3('#ccc');
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: wp('1%'),
                  marginRight: wp('2%'),
                  backgroundColor: clr3,
                }}>
                <MaterialCommunityIcons
                  name={'gender-transgender'}
                  color={Colors.WHITE}
                  size={24}
                />
              </Pressable>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: wp('2.5%'),
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontSize: 15,
                  fontWeight: '700',
                  color: Colors.TEXT_BLACK,
                }}>
                Other
              </Text>
            </View>
          </View>
          <View></View>
          {/* <View>
            <Text>second</Text>
          </View> */}
        </View>
      );
    }
    // <View style={{flex: 1, marginTop: wp('15%')}}>
    //       <View>
    //         <Text
    //           style={{
    //             fontFamily: Fonts.POPPINS_REGULAR,
    //             fontSize: 20,
    //             fontWeight: '700',
    //             color: Colors.TEXT_BLACK,
    //           }}>
    //           Enter your birth date
    //         </Text>
    //       </View>
    //       <View style={{marginTop: wp('7%')}}>
    //         <DatePicker
    //           open={open}
    //           date={dateData}
    //           onDateChange={dat => {
    //             setdateData(dat);
    //             setDate(dat.getDate());
    //             setMonth(dat.getMonth());
    //             setYear(dat.getUTCFullYear());
    //             // setForm_val3(dat);
    //             // storeDate(dat.getDate(), dat.getMonth(), dat.getUTCFullYear());
    //             console.log(dat);
    //             // setProgressState(4);
    //           }}
    //           mode="date"
    //           androidVariant="nativeAndroid"
    //           textColor={Colors.TEXT_BLACK}
    //         />
    //       </View>
    //       <Pressable
    //         style={styles.button}
    //         onPress={() => {
    //           storeDate(
    //             dateData.getDate(),
    //             dateData.getMonth(),
    //             dateData.getUTCFullYear(),
    //           );
    //           setProgressState(4);
    //         }}>
    //         <Text
    //           style={{
    //             fontFamily: Fonts.POPPINS_REGULAR,
    //             fontSize: 15,
    //             fontWeight: '700',
    //             color: Colors.TEXT_BLACK,
    //           }}>
    //           Next
    //         </Text>
    //       </Pressable>
    //     </View>
    if (check === 3) {
      return (
        <View style={{flex: 1, marginTop: wp('15%')}}>
          <View>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 20,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              Enter your birth time
            </Text>
          </View>
          <View style={{marginTop: wp('7%')}}>
            <DatePicker
              open={open}
              date={time}
              onDateChange={time => {
                setTime(time);
                setHour(time.getUTCHours());
                setMinutes(time.getMinutes());
                // storeTime(time);
                console.log(
                  'hour',
                  time.getUTCHours(),
                  'min',
                  time.getMinutes(),
                );
                console.log(time);
                // setForm_val4(time);
              }}
              mode="time"
              timeZoneOffsetInMinutes={0}
              androidVariant="nativeAndroid"
              textColor={Colors.TEXT_BLACK}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              onClick={() => {
                setIsChecked(!isChecked);
                console.log(isChecked);
              }}
              //value={isChecked}
              //onValueChange={setIsChecked}
              isChecked={isChecked}
              style={{alignSelf: 'center'}}
            />
            <Text style={styles.label}>Do you like React Native?</Text>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => {
              storeTime(time.getMinutes(), time.getUTCHours());
              setProgressState(2);
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 15,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              Next
            </Text>
          </Pressable>
        </View>
      );
    }
    if (check === 4) {
      return (
        <View style={{flex: 1, marginTop: wp('15%')}}>
          <View>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 20,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              Enter your birth date
            </Text>
          </View>
          <View style={{marginTop: wp('7%')}}>
            <DatePicker
              open={open}
              date={dateData}
              onDateChange={dat => {
                setdateData(dat);
                setDate(dat.getDate());
                setMonth(dat.getUTCMonth());
                setYear(dat.getUTCFullYear());
                // setForm_val3(dat);
                // storeDate(dat.getDate(), dat.getMonth(), dat.getUTCFullYear());
                console.log(dat);
                // setProgressState(4);
              }}
              mode="date"
              androidVariant="nativeAndroid"
              textColor={Colors.TEXT_BLACK}
            />
          </View>
          <Pressable
            style={styles.button}
            onPress={() => {
              storeDate(
                dateData.getDate(),
                dateData.getUTCMonth(),
                dateData.getUTCFullYear(),
              );
              setProgressState(5);
            }}>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 15,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              Next
            </Text>
          </Pressable>
        </View>
      );
    }
    if (check === 5) {
      return (
        <View style={{flex: 1, marginTop: wp('15%')}}>
          <View>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 20,
                fontWeight: '700',
                color: Colors.TEXT_BLACK,
              }}>
              Where were you born?
            </Text>
          </View>
          <View style={{marginTop: wp('7%')}}>
            <Formik
              initialValues={{
                city: '',
              }}
              onSubmit={values => {
                storeLocation(values);
                setLocation(values);
                console.log(values);
                console.log(basicData);
              }}
              validationSchema={validationSchema2}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                errors,
                values,
              }) => (
                <View>
                  {setLocation(values.city)}
                  <FormField
                    maxLength={25}
                    name="city"
                    placeholder="Lahore, Pakistan"
                  />
                  <Text style={{color: 'red'}}>{errors.city}</Text>
                  <Pressable
                    style={styles.button}
                    onPress={() => {
                      handleSubmit();
                      storeLocation(values.city);
                      getBasic();
                      {
                        values.city === ''
                          ? Alert.alert('Please fill details..')
                          : setProgressState(5);
                      }
                      // console.log('dfd');
                    }}>
                    <Text
                      style={{
                        fontFamily: Fonts.POPPINS_REGULAR,
                        fontSize: 15,
                        fontWeight: '700',
                        color: Colors.TEXT_BLACK,
                      }}>
                      Next
                    </Text>
                  </Pressable>
                </View>
              )}
            </Formik>
          </View>
        </View>
      );
    }
  };
  return (
    <Screen style={styles.screen}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View
        style={{
          //flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() =>
            setProgressState(
              progressState > 1 ? progressState - 1 : navigation.goBack(),
            )
          }
          style={{marginRight: wp('2%')}}>
          <MaterialIcons
            name={'chevron-thin-left'}
            color={Colors.TEXT_BLACK}
            size={24}
          />
        </Pressable>
        <Text
          style={{
            fontFamily: Fonts.POPPINS_REGULAR,
            fontWeight: '700',
            fontSize: 20,
            color: Colors.TEXT_BLACK,
          }}>
          Kundli
        </Text>
      </View>
      <View style={styles.progress_bar_styles}>
        {stateData.map(st => (
          <View
            style={[
              styles.barTabs,
              {
                backgroundColor:
                  progressState === st.id
                    ? Colors.APP_BACKGROUND
                    : Colors.TEXT_BLACK,
              },
            ]}>
            <FontAwesome name={st.icon} color={Colors.TEXT_BLACK} size={24} />
          </View>
        ))}
      </View>
      {check_func(progressState)}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp('2%'),
    backgroundColor: Colors.WHITE,
  },
  body: {
    flex: 1,
    padding: wp('4%'),
  },
  progress_bar_styles: {
    flexDirection: 'row',
    marginTop: wp('2%'),
    //flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    //Horizontal: wp('2%'),
    //flex: 1,
    //marginTop: hp('-5%'),
  },
  barTabs: {
    //flex: 1,
    // backgroundColor: Colors.TEXT_RED,
    //padding: wp('2%'),
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('1%'),
  },
  button: {
    borderColor: Colors.TEXT_BLACK,
    borderWidth: 1,
    padding: wp('2.5%'),
    alignItems: 'center',
    borderRadius: 10,
    marginTop: wp('3%'),
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default KundliForm;
