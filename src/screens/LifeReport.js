import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';
import KundliCard from '../components/KundliCard';
import KundliTopTab from '../components/KundliTopTab';
import KundliTopTabSlider from '../components/KundliTopTabSlider';

const top_tabs = [
  {
    id: 1,
    name: 'Basic',
  },
  {
    id: 2,
    name: 'Lagna',
  },
  {
    id: 3,
    name: 'Navamsa',
  },
  {
    id: 4,
    name: 'Transit Chart',
  },
  {
    id: 5,
    name: 'Dasha',
  },
  {
    id: 6,
    name: 'Planets',
  },
  {
    id: 7,
    name: 'Divisional Chart',
  },
  {
    id: 8,
    name: 'Life Report',
  },
];
const top_tabs_slider = [
  {
    id: 1,
    name: 'Ascendant',
  },
  {
    id: 2,
    name: 'Planetary',
  },
  {
    id: 3,
    name: 'Yoga',
  },
  {
    id: 4,
    name: 'Vimshottari Dasha',
  },
  {
    id: 5,
    name: 'Manglik',
  },
];
const ascendant_card_list = [
  {
    id: 1,
    title: 'Description',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 2,
    title: 'Personality',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 3,
    title: 'Physical',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 4,
    title: 'Health',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 5,
    title: 'Career',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 6,
    title: 'Relationship',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
];
const planetary_card_list = [
  {
    id: 1,
    title: 'Sun Description',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 2,
    title: 'Moon Description',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 3,
    title: 'Mercury Description',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 4,
    title: 'Venus Description',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 5,
    title: 'Mars Description',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 6,
    title: 'Jupiter Description',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 7,
    title: 'Saturn Description',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 8,
    title: 'Rahhu Description',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 9,
    title: 'Ketu Description',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
];
const yoga_card_list = [
  {
    id: 1,
    title: 'Gajakesari Yoga',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 2,
    title: 'Sunapha Yoga',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 3,
    title: 'Adhi Yoga',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 4,
    title: 'Vesi Yoga',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 5,
    title: 'Lakshmi Yoga',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 6,
    title: 'Chandra Mangala Yoga',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
];
const vimshottari_dasha_card_list = [
  {
    id: 1,
    title: 'Saturn Mahadasha (09.05.1995 - 09/05/2014)',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 2,
    title: 'Mercury Mahadasha (09.05.1995 - 09/05/2014)',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 3,
    title: 'Ketu Mahadasha (09.05.1995 - 09/05/2014)',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 4,
    title: 'Venus Mahadasha (09.05.1995 - 09/05/2014)',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 5,
    title: 'Sun Mahadasha (09.05.1995 - 09/05/2014)',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 6,
    title: 'Moon Mahadasha (09.05.1995 - 09/05/2014)',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 7,
    title: 'Mars Mahadasha (09.05.1995 - 09/05/2014)',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 8,
    title: 'Rahu Mahadasha (09.05.1995 - 09/05/2014)',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
  {
    id: 9,
    title: 'Jupiter Mahadasha (09.05.1995 - 09/05/2014)',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
];
const manglik_card_list = [
  {
    id: 1,
    title: 'Manglik Analysis',
    data: 'Yes',
  },
  {
    id: 2,
    title: 'Conclusion',
    data: 'Our success story began with an unassuming beginning way back in 2000 with the opening of the first pharmacy, and there has been no turning back ever since. As the years went by, more outlets were added to our family and the network matured to its existing size. We inaugurated our 49th pharmacy in April 2014 at Lahore and aim at opening over 100 outlets by 2020, thus having positioned ourselves as the largest retail pharmacy chain in the Pakistan',
  },
];

const LifeReport = () => {
  const [slider, setSlider] = useState(1);

  const topTabSliderCheck = () => {
    if (slider === 1) {
      return (
        <View>
          {ascendant_card_list.map(card => (
            <View style={{marginVertical: wp('1%')}}>
              <KundliCard id={card.id} text={card.data} title={card.title} />
            </View>
          ))}
        </View>
      );
    }
    if (slider === 2) {
      return (
        <View>
          {planetary_card_list.map(card => (
            <View style={{marginVertical: wp('1%')}}>
              <KundliCard id={card.id} text={card.data} title={card.title} />
            </View>
          ))}
        </View>
      );
    }
    if (slider === 3) {
      return (
        <View>
          {yoga_card_list.map(card => (
            <View style={{marginVertical: wp('1%')}}>
              <KundliCard id={card.id} text={card.data} title={card.title} />
            </View>
          ))}
        </View>
      );
    }
    if (slider === 4) {
      return (
        <View>
          {vimshottari_dasha_card_list.map(card => (
            <View style={{marginVertical: wp('1%')}}>
              <KundliCard id={card.id} text={card.data} title={card.title} />
            </View>
          ))}
        </View>
      );
    }
    if (slider === 5) {
      return (
        <View>
          {manglik_card_list.map(card => (
            <View style={{marginVertical: wp('1%')}}>
              <KundliCard id={card.id} text={card.data} title={card.title} />
            </View>
          ))}
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: wp('1%'),
          //flex: 1,
          //paddingLeft: wp('4%'),
          //alignItems: 'center',
          //justifyContent: 'space-between',
          // justifyContent: 'flex-end',
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              marginTop: wp('4%'),
              //paddingHorizontal: wp('4%'),
              flexDirection: 'row',
              backgroundColor: Colors.WHITE,
              borderRadius: 12,
            }}>
            {top_tabs_slider.map(tabs => (
              <View>
                <KundliTopTabSlider
                  id={tabs.id}
                  name={tabs.name}
                  slider={slider}
                  nav_route="LifeReport"
                  onPress={() => {
                    setSlider(tabs.id);
                    console.log(tabs.name);
                  }}
                  //onPress={() => console.log(tabs.name)}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: wp('4%'), flex: 1}}>
          {topTabSliderCheck(slider)}
        </View>
      </ScrollView>
      {/* <Text>screen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRightColor: Colors.APP_BACKGROUND,
    //padding: wp('4%'),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default LifeReport;
