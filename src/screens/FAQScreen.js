import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

import {Display} from '../utils';
import Separator from '../components/Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AccordionView from '../components/AccordionView';

const content_list = [
  {
    id: 1,
    title: 'How to create an account..?',
    content:
      'The following terms and conditions, together with any referenced documents (collectively, "Terms of Use") form a legal agreement between you and your employer, employees, agents, contractors and any other entity on whose behalf you accept these terms (collectively, “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and “our”).',
  },
  {
    id: 2,
    title: 'How to contact astrologers on weekend..?',
    content:
      'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
  },
  {
    id: 3,
    title: 'How to pay an astrologer..?',
    content:
      'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
  {
    id: 4,
    title: 'How to pay an astrologer..?',
    content:
      'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
  {
    id: 5,
    title: 'How to pay an astrologer..?',
    content:
      'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
  {
    id: 6,
    title: 'How to pay an astrologer..?',
    content:
      'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
];

const FAQScreen = ({navigation}) => {
  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const setSections = sections => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        // duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.collapsibleHeaderText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={styles.collapsibleAnswerText}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <View style={StyleSheet.container}>
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
        <Text style={styles.headerTitle}>Help</Text>
      </View>
      {/* COLLAPSIBLE_CODE */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginVertical: hp('2%')}}>
          <Accordion
            activeSections={activeSections}
            sections={content_list}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PURE_WHITE,
  },
  collapsibleHeaderText: {
    fontSize: 18,
    color: Colors.TEXT_BLACK,
    fontWeight: '700',
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  collapsibleAnswerText: {
    fontSize: 14,
    color: Colors.showsVerticalScrollIndicator,
    fontWeight: '400',
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
    // textAlign: 'center',
    color: Colors.LIGHTCOLOR,
  },
  ///////
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: Colors.WHITE,
    borderWidth: 0.3,
    borderColor: Colors.TEXT_BLACK,
    marginVertical: hp('1%'),
    padding: wp('2%'),
    margin: wp('2%'),
    borderRadius: 5,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    // padding: 20,
    // backgroundColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
    // borderWidth: 0.5,
    // borderColor: Colors.TEXT_BLACK,
    marginVertical: hp('1%'),
    padding: wp('2%'),
    margin: wp('2%'),
    borderRadius: 8,
    elevation: 1,
  },
  active: {
    backgroundColor: Colors.WHITE,
  },
  inactive: {
    backgroundColor: Colors.WHITE,
  },
  //////
});

export default FAQScreen;
