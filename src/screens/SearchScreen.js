import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Separator from '../components/Separator';

import {Colors, Fonts} from '../contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {borderWidth} from 'styled-system';
import ServiceChip from '../components/ServiceChip';
import LinkChip from '../components/LinkChip';

export default function SearchScreen({navigation}) {
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
        <TextInput
          style={{
            width: wp(80),
            color: 'black',
            fontSize: hp(2),
            marginLeft: wp(2),
            paddingHorizontal: wp(2),
          }}
          placeholder={'Search Astrologers,Astromall Products'}
          placeholderTextColor={Colors.DEFAULT_GREY}
        />
      </View>
      <View style={{paddingHorizontal: wp(2)}}>
        <Text style={{fontSize: hp(2.4), marginTop: hp(2)}}>Top Services</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginVertical: hp(2),
              }}>
              <ServiceChip
                logo={require('../assets/images/clock.png')}
                title={'Chat & Call'}
                color={Colors.KUNDLI_LIGHT_PINK}
                onPress={() => console.log('Chat & Call')}
              />
              <ServiceChip
                logo={require('../assets/images/clock.png')}
                title={'Live'}
                color={Colors.KUNDLI_LIGHT_YELLOW}
                onPress={() => console.log('Live')}
              />
              <ServiceChip
                logo={require('../assets/images/clock.png')}
                title={'Astro Mall'}
                color={Colors.LIGHT_GREEN}
                onPress={() => navigation.navigate('Mall')}
              />
            </View>
          </ScrollView>
        </View>
        <Text style={{fontSize: hp(2.4), marginTop: hp(2)}}>Quick Link</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ScrollView horizontal>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <LinkChip
                title={'Wallet'}
                logo={require('../assets/images/chat.png')}
                onPress={() => console.log('Wallet')}
              />
              <LinkChip
                title={'Customer Support'}
                logo={require('../assets/images/chat.png')}
                onPress={() =>
                  navigation.navigate('SupportChatTopTabNavigator')
                }
              />
              <LinkChip
                title={'Order History'}
                logo={require('../assets/images/chat.png')}
                onPress={() => navigation.navigate('Order History')}
              />
              <LinkChip
                title={'Profile'}
                logo={require('../assets/images/chat.png')}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.LIGHT_YELLOW,
    paddingVertical: 10,
    borderBottomColor: Colors.DEFAULT_GREY,
    borderBottomWidth: 1,
  },
});
