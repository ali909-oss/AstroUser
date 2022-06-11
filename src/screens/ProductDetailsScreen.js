import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';

import {NativeBaseProvider} from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import {Display} from '../utils';
import Separator from '../components/Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

import CommentsCard from '../components/CommentsCard';

const commetns_array = [
  {
    id: 1,
    image: require('../assets/images/gemini.jpg'),
    name: 'Ahmad',
    rating: 3.4,
    comment: 'it was very nice talking to you',
    replier_name: 'Ali',
    date: '24 Mar 2022',
    replier_comment: 'thank you',
    commentator_date: '24 Dec 2022',
  },
  {
    id: 2,
    image: require('../assets/images/gemini.jpg'),
    name: 'Ahmad Bin Hamid',
    rating: 4.2,
    comment:
      'it was very nice talking to you, I dont have friends at all and it really felt like I was sharing my insecurities with a friend, thanks for talikng to me',
    replier_name: 'Ateeq',
    date: '24 Mar 2022',
    replier_comment: 'thanks for your love',
    commentator_date: '24 Dec 2022',
  },
  {
    id: 3,
    image: require('../assets/images/gemini.jpg'),
    name: 'Asad',
    rating: 3.4,
    comment: 'it was very nice talking to you',
    commentator_date: '24 Dec 2022',
  },
  {
    id: 4,
    image: require('../assets/images/gemini.jpg'),
    name: 'Virat Kohli',
    rating: 3.4,
    comment: 'it was very nice talking to you',
    commentator_date: '24 Dec 2022',
  },
];

const ProductDetailsScreen = ({navigation}) => {
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
          <Text style={styles.headerTitle}>Product details</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{padding: wp('3%'), flex: 1}}>
            <Image
              source={require('../assets/images/astro1.jpg')}
              style={styles.image}
            />
            <View style={styles.card}>
              <Text style={styles.titleText}>Hanuman Group Puja</Text>
              <Text style={[styles.subTitleText, {marginVertical: hp('1%')}]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <Text style={styles.titleText}>Starting from:USD 13/-</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('BookNowProduct')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: Colors.TEXT_BLACK,
                  fontFamily: Fonts.POPPINS_REGULAR,
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
            <View style={styles.textCard}>
              <Text style={styles.titleText}>
                What hapens after I place an order?
              </Text>
              <Text style={styles.subTitleText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </Text>
            </View>
            <View style={styles.textCard}>
              <Text style={styles.titleText}>
                When can we attend the hanuman group puja?
              </Text>
              <Text style={styles.subTitleText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </Text>
            </View>
            <View style={styles.textCard}>
              <Text style={styles.titleText}>
                What will be the benefits of hanuman group puja?
              </Text>
              <Text style={styles.subTitleText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
            {/* COMMENTS_CARD */}
            <View style={{marginTop: hp('2%')}}>
              {commetns_array.map(comments => (
                <CommentsCard
                  id={comments.id}
                  image={comments.image}
                  name={comments.name}
                  rating={comments.rating}
                  comment={comments.comment}
                  replier_name={comments.replier_name}
                  date={comments.date}
                  replier_comment={comments.replier_comment}
                  commentator_date={comments.commentator_date}
                />
              ))}
            </View>
            {/* COMMENTS_CARD */}
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND,
  },
  image: {
    width: wp('90%'),
    height: hp('24%'),
    borderRadius: 10,
    alignSelf: 'center',
  },
  textCard: {
    borderWidth: 1,
    borderRadius: 10,
    padding: wp('3%'),
    marginTop: hp('2%'),
    borderColor: Colors.TEXT_BLACK,
  },
  card: {
    marginVertical: hp('2%'),
  },
  button: {
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    padding: wp('4%'),
    borderRadius: 10,
    width: wp('35%'),
  },
  titleText: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.TEXT_BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
    // lineHeight: hp('5%'),
  },
  subTitleText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.INACTIVE_GREY,
    fontFamily: Fonts.POPPINS_REGULAR,
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

export default ProductDetailsScreen;
