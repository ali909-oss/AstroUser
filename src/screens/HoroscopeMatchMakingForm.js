import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import KundliTopTabSlider from '../components/KundliTopTabSlider';

import Separator from '../components/Separator';
import {Display} from '../utils';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from '../components/forms';

import {Formik} from 'formik';
import * as Yup from 'yup';

import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import NumerologyContext from '../context/NumerologyContext';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  // Male Form Fields
  male_hours: Yup.number().required().min(0).max(23).label('Male Hour'),
  male_minutes: Yup.number().required().min(0).max(59).label('Male Minutes'),
  male_birth_date: Yup.number()
    .required()
    .min(1)
    .max(31)
    .label('Male Birth Date'),
  male_birth_month: Yup.number()
    .required()
    .min(1)
    .max(12)
    .label('Male Birth Month'),
  male_birth_year: Yup.number().required().min(1900).label('Male Birth Year'),
  male_latitude: Yup.number().required().label('Male Latitude'),
  male_longitude: Yup.number().required().label('Male Longitude'),
  male_time_zone: Yup.number().required().label('Male Time Zone'),

  // Female Form Fields
  female_hours: Yup.number().required().min(0).max(23).label('Female Hour'),
  female_minutes: Yup.number()
    .required()
    .min(0)
    .max(59)
    .label('Female Minutes'),
  female_birth_date: Yup.number()
    .required()
    .min(1)
    .max(31)
    .label('Female Birth Date'),
  female_birth_month: Yup.number()
    .required()
    .min(1)
    .max(12)
    .label('Female Birth Month'),
  female_birth_year: Yup.number()
    .required()
    .min(1900)
    .label('Female Birth Year'),
  female_latitude: Yup.number().required().label('Female Latitude'),
  female_longitude: Yup.number().required().label('Female Longitude'),
  female_time_zone: Yup.number().required().label('Female Time Zone'),
});

const top_tabs_slider = [
  {
    id: 1,
    name: 'Open Kundli',
  },
  {
    id: 2,
    name: 'New Matching',
  },
];

const HoroscopeMatchMakingForm = ({navigation}) => {
  const [slider, setSlider] = useState(1);

  const {setMatchMakingData, setIsLoading} = useContext(NumerologyContext);

  const fetch_data = async values => {
    try {
      const response = await axios.post(
        'https://astroanandbackend.herokuapp.com/api/astrology/sdk/get',
        {
          // Male Data
          date: values.male_birth_date,
          month: values.male_birth_month,
          year: values.male_birth_year,
          hour: values.male_hours,
          minute: values.male_minutes,
          lat: values.male_latitude,
          long: values.male_longitude,
          timezone: values.male_time_zone,
          // Female Data
          fdate: values.female_birth_date,
          fmonth: values.female_birth_month,
          fyear: values.female_birth_year,
          fhour: values.female_hours,
          fminute: values.female_minutes,
          flat: values.female_latitude,
          flong: values.female_longitude,
          ftimezone: values.female_time_zone,
        },
      );
      setMatchMakingData(response.data);
      setIsLoading(false);
      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

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
        <Text style={styles.headerTitle}>Fill up Partner's Details</Text>
      </View>
      {/* <View
        style={{
          // flex: 1,
          padding: wp('3%'),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: Fonts.POPPINS_REGULAR,
            fontSize: 22,
            fontWeight: '700',
            color: Colors.TEXT_BLACK,
            textAlign: 'center',
          }}>
          Fill up Partner's Details
        </Text>
      </View> */}

      {/*Form*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            // backgroundColor: Colors.SILVER_GRAY_BACKGROUND,
            padding: wp('3%'),
            // borderRadius: 12,
            // elevation: 1,
            // marginVertical: wp('3%'),
          }}>
          <Formik
            initialValues={{
              // Male Form Fields
              male_hours: '',
              male_minutes: '',
              male_birth_date: '',
              male_birth_month: '',
              male_birth_year: '',
              male_latitude: '',
              male_longitude: '',
              male_time_zone: '',

              // Female Form Fields
              female_hours: '',
              female_minutes: '',
              female_birth_date: '',
              female_birth_month: '',
              female_birth_year: '',
              female_latitude: '',
              female_longitude: '',
              female_time_zone: '',
            }}
            onSubmit={values => fetch_data(values)}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              errors,
              values,
            }) => (
              <View style={{flex: 1}}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: Colors.KUNDLI_LIGHT_YELLOW,
                    padding: wp('4%'),
                    borderRadius: 12,
                    elevation: 1,
                    marginVertical: wp('3%'),
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.POPPINS_REGULAR,
                      fontSize: 20,
                      fontWeight: '700',
                      color: Colors.TEXT_BLACK,
                      textAlign: 'center',
                    }}>
                    Boys Details
                  </Text>
                  <Text style={styles.form_title_styles}>Male Hours</Text>
                  <FormField
                    maxLength={2}
                    name="male_hours"
                    placeholder="e.g. 5"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>Male Minutes</Text>
                  <FormField
                    maxLength={2}
                    name="male_minutes"
                    placeholder="e.g. 29"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>Male Birth Date</Text>
                  <FormField
                    maxLength={2}
                    name="male_birth_date"
                    placeholder="e.g. 17"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>Male Birth Month</Text>
                  <FormField
                    maxLength={2}
                    name="male_birth_month"
                    placeholder="e.g. 9"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>Male Birth Year</Text>
                  <FormField
                    maxLength={4}
                    name="male_birth_year"
                    placeholder="e.g. 1999"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>Male Latitude</Text>
                  <FormField
                    name="male_latitude"
                    placeholder="e.g. 3"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>Male Longitude</Text>
                  <FormField
                    name="male_longitude"
                    placeholder="e.g. 21"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>Male Time Zone</Text>
                  <FormField
                    name="male_time_zone"
                    placeholder="e.g. 7"
                    width={wp('85%')}
                  />

                  {/* <Button onPress={handleSubmit} title="Submit" /> */}
                </View>

                {/* Female Form */}
                <View
                  style={{
                    flex: 1,
                    backgroundColor: Colors.KUNDLI_LIGHT_YELLOW,
                    padding: wp('4%'),
                    borderRadius: 12,
                    elevation: 1,
                    marginVertical: wp('3%'),
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.POPPINS_REGULAR,
                      fontSize: 20,
                      fontWeight: '700',
                      color: Colors.TEXT_BLACK,
                      textAlign: 'center',
                    }}>
                    Female Details
                  </Text>
                  <Text style={styles.form_title_styles}>Female Hours</Text>
                  <FormField
                    maxLength={2}
                    name="female_hours"
                    placeholder="e.g. 5"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>Female Minutes</Text>
                  <FormField
                    maxLength={2}
                    name="female_minutes"
                    placeholder="e.g. 29"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>
                    Female Birth Date
                  </Text>
                  <FormField
                    maxLength={2}
                    name="female_birth_date"
                    placeholder="e.g. 17"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>
                    Female Birth Month
                  </Text>
                  <FormField
                    maxLength={2}
                    name="female_birth_month"
                    placeholder="e.g. 9"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>
                    Female Birth Year
                  </Text>
                  <FormField
                    maxLength={4}
                    name="female_birth_year"
                    placeholder="e.g. 1999"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>female Latitude</Text>
                  <FormField
                    name="female_latitude"
                    placeholder="e.g. 3"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>Female Longitude</Text>
                  <FormField
                    name="female_longitude"
                    placeholder="e.g. 21"
                    width={wp('85%')}
                  />

                  <Text style={styles.form_title_styles}>Female Time Zone</Text>
                  <FormField
                    name="female_time_zone"
                    placeholder="e.g. 7"
                    width={wp('85%')}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      handleSubmit();
                      navigation.navigate('HoroMatchMakingDetailsScreen');
                    }}
                    style={styles.button}>
                    <Text
                      style={{
                        fontFamily: Fonts.POPPINS_REGULAR,
                        fontSize: 16,
                        fontWeight: '700',
                        color: Colors.TEXT_BLACK,
                        textAlign: 'center',
                      }}>
                      Match Horoscope
                    </Text>
                  </TouchableOpacity>
                  {/* <Button onPress={handleSubmit} title="Submit" /> */}
                </View>
                {/* Girls Form */}
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
      {/*Form*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    borderRightColor: Colors.APP_BACKGROUND,
    // padding: wp('3%'),
  },
  button: {
    padding: wp('2%'),
    borderRadius: 10,
    marginVertical: wp('3%'),
    backgroundColor: Colors.KUNDLI_YELLOW,
  },
  form_title_styles: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.TEXT_BLACK,
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
});

export default HoroscopeMatchMakingForm;
