import React from 'react';
import { StyleSheet,View,Text,Image, Button, TextInput,TouchableOpacity,updateSecureTextEntry} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import {Fonts} from '../contants';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';



const Shopass = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={require('../assets/images/urlimg.png')}
            style={{height: hp('30%'),
            width: wp('70%'),marginTop:hp('4%'),marginLeft:wp('10%')}}
            />
            </View>
            <View style={styles.footer}>
            <View  >
            <Text style = {{fontFamily:Fonts.POPPINS_MEDIUM,textAlign:'center'
            }}>
                Paste the link of your product here and our shopping assistant will arrange that product for you ! 
            </Text>
            </View>
            <View><View style = {{marginTop:heightPercentageToDP("5%"),borderWidth:1,borderRadius:20}}>
            <Fumi
    label={'paste'}
    iconClass={FontAwesomeIcon}
    iconName={'copy'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
  />
  </View></View>
<View style = {{justifyContent:'center',alignItems:'center',marginTop:heightPercentageToDP("5%")}}>
    <TouchableOpacity style = {{backgroundColor:"#30d7e9",borderRadius:20,width:widthPercentageToDP("60%"),justifyContent:'center',alignItems:'center'}}>
        <Text style = {{paddingHorizontal:30,color:"white",fontFamily:Fonts.POPPINS_MEDIUM,paddingVertical:5,fontSize:18,}}>Submit</Text>
    </TouchableOpacity>
</View>
            </View>
           

 
            </View>

)
}

export default Shopass; 

const styles = StyleSheet.create({
    container:{
 
       backgroundColor: 'white', 
       flex:1,
       
 
    },
    header:{
       backgroundColor: '#fff',
        marginTop:hp('10%')
    },
    footer:{ 

        marginTop:hp('2'),
        height: hp('42%'),
       width: wp('100%')

    },
    textin: {
        
        marginLeft: wp('22'), 
         fontSize: 20, 
         marginTop: hp('-5'), 
         justifyContent: 'center', 
         alignItems: 'center',
         width: wp('75%'),
         borderRadius:0.5,
         height:42,
         borderWidth:1.5,
         paddingLeft:wp('3')
    },
});