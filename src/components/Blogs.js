import React, {useEffect, useState, useContext} from 'react';
import LottieView from 'lottie-react-native';
import Liveanimation from '../components/Liveanimation';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';

import {Searchbar} from 'react-native-paper';
import Sliderfirst from '../components/Sliderfirst';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Fonts} from '../contants';

const Data = [
  {
    id: 1,
    name: 'Online Puja',
    image: require('../assets/images/puja.jpg'),
    Newsdata:"Sharadha kapoor to marry soon",
    author:"Manish Gupta",
    date:"27 Jan , 2022"
  },
  {
    id: 2,
    name: 'Palmistry',
    image: require('../assets/images/palmistry.jpg'),
    
    Newsdata:"Sharadha kapoor to marry soon",
    author:"Manish Gupta",
    date:"27 Jan , 2022"
  },
  {
    id: 3,
    name: 'Evil Eye',
    image: require('../assets/images/evileye.jpg'),
    
    Newsdata:"Sharadha kapoor to marry soon",
    author:"Manish Gupta",
    date:"27 Jan , 2022"
  },
  {
    id: 4,
    name: 'Reiki Healing',
    image: require('../assets/images/reiki.jpg'), 
    
    Newsdata:"Sharadha kapoor to marry soon",
    author:"Manish Gupta",
    date:"27 Jan , 2022"
  },
  {
    id: 5,
    name: 'Sanjay',
    image: require('../assets/images/salman.jpg'),
    
    Newsdata:"Sharadha kapoor to marry soon",
    author:"Manish Gupta" ,
    date:"27 Jan , 2022"
  },
  {
    id: 6,
    name: 'Sanjay',
    image: require('../assets/images/salman.jpg'),
    
    Newsdata:"Sharadha kapoor to marry soon",
    author:"Manish Gupta" 
  },
  {
    id: 7,
    name: 'Sanjay',
    image: require('../assets/images/salman.jpg'), 
    
    Newsdata:"Sharadha kapoor to marry soon",
    author:"Manish Gupta",
    date:"27 Jan , 2022"
  },
  {
    id: 8,
    name: 'Sanjay',
    image: require('../assets/images/salman.jpg'),
    Newsdata:"Sharadha kapoor to marry soon",
    author:"Manish Gupta",
    date:"27 Jan , 2022"
  },
];

const Blogs = () => {
  return (
    <View style={{paddingHorizontal: 10, marginTop: 10}}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}>
        <View style={{flexDirection: 'row'}}>
          {Data.map(data => {
            return (
              <View
                style={{
                  marginRight: 10,
                  width: 200,
                  height: 180,
                  borderRadius: 20, 
                }}>
                <Image
                  source={data.image}
                  style={{height: 100, width: 200,borderTopRightRadius:20,borderTopLeftRadius:20}}
                />
                <View style={{top: 10, position: 'absolute',marginLeft:10}}>
                  <Text>watch</Text>
                </View>
                <View style = {{backgroundColor:"#f3f0ef",width:200,height:80,borderBottomRightRadius:20,borderBottomLeftRadius:20,borderWidth:1,borderColor:"#dbd5d2"}}>
                    <Text style = {{fontSize:14,width:190,paddingHorizontal:5,fontFamily:Fonts.POPPINS_REGULAR,color:"#738d8f"}}>{data.Newsdata}</Text>
                    <View style = {{flexDirection:'row'}}>
                    <Text style = {{fontSize:10,width:100,paddingHorizontal:5,marginTop:10,fontFamily:Fonts.POPPINS_BOLD,color:"red"}}>{data.author}</Text>
                      <Text style = {{fontSize:10,width:90,paddingHorizontal:5,marginTop:10,fontFamily:Fonts.POPPINS_BOLD,color:"green",marginLeft:20}}>{data.date}</Text>
                    </View></View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Mainrowholder: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP('5%'),
    paddingHorizontal: widthPercentageToDP('5%'),
  },
  Mainrowimage1: {height: 22, width: 22, marginTop: 2.5},
  Mainrowimage2: {
    height: 25,
    width: 25,
    marginLeft: widthPercentageToDP('50%'),
  },
  Mainrowtext: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
    marginLeft: widthPercentageToDP('7.5%'),
  },
  image: {
    height: 300,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  Searchstyle: {
    width: widthPercentageToDP('96%'),
    borderRadius: 20,
    height: heightPercentageToDP('6.5%'),
  },
  Searchholder: {
    marginTop: heightPercentageToDP('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Categoryholder: {
    flexDirection: 'row',

    paddingHorizontal: widthPercentageToDP('5%'),
    marginTop: heightPercentageToDP('2.5%'),
    justifyContent: 'space-between',
  },
  round: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#dadad2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Categorytext: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_REGULAR,
    width: 55,
    textAlign: 'center',
    marginTop: 5,
  },
  Liveholder: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
export default Blogs;
