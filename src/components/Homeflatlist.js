import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';

const DATA = [
  {
    id: 1,
    image1: require('../assets/images/first.jpeg'),
    image2: require('../assets/images/second.jpeg'),
    webview1: 'https://www.cdiscount.com/',
    webview2: 'https://www.laredoute.fr/',
  },
  {
    id: 2,
    image1: require('../assets/images/third.jpeg'),
    image2: require('../assets/images/fourth.jpeg'),

    webview1: 'https://www.amazon.com/',
    webview2: 'https://promod.fr/',
  },
  {
    id: 3,
    image1: require('../assets/images/fifth.jpeg'),
    image2: require('../assets/images/sixth.jpeg'),
    webview1: 'https://www.placedestendances.com/fr/fr',
    webview2: 'https://www.3suisses.fr/',
  },
  {
    id: 4,
    image1: require('../assets/images/seven.jpeg'),
    image2: require('../assets/images/eight.jpeg'),
    webview1: 'https://www.fnac.com/',
    webview2: 'https://www.ebay.com/',
  },
];

const Homeflatlist = () => {
  const openurl = async url => {
    const issupported = await Linking.openURL(url);
    if (issupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("can't open");
    }
  };
  return (
    <View style={styles.Mainflat}>
      <FlatList
        data={DATA}
        keyExtractor={item => {
          item.id;
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.Main}>
              <View style={styles.Imageholder}>
                <TouchableOpacity
                  style={styles.image1holder}
                  onPress={() => openurl(item.webview1)}>
                  <Image source={item.image} style={styles.image1} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.image2holder}
                  onPress={() => openurl(item.webview2)}>
                  <Image source={item.image2} style={styles.image1} />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Mainflat: {
    height: heightPercentageToDP('65%'),
    marginTop: 30,
  },
  Imageholder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image1: {
    width: widthPercentageToDP('45%'),
    height: heightPercentageToDP('15%'),
  },
  image1holder: {
    borderWidth: 1,
    color: '#30d7e9',
    padding: 10,
  },
  image2holder: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    color: '#30d7e9',
  },
});

export default Homeflatlist;
