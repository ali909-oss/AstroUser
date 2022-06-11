import React from 'react';
import {
  View, 
  StyleSheet,
  FlatList,
  Image, 
  Text,StatusBar
} from 'react-native';

import Helpandcontact from './helpandcontact';
import Aboutus from './Aboutus';
import Howto from './Howto';

import { WebView } from 'react-native-webview';
import {Display} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Avatar } from 'react-native-elements'; 
import { TouchableOpacity } from 'react-native-gesture-handler'; 
import Separator from "../components/Separator"
import Icon from 'react-native-vector-icons/dist/AntDesign';
 

import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from "native-base"

import Tabs from '../Tabs/Bottomtabs';
import {Fonts} from '../contants';
 
import {useState} from 'react';

import {color} from 'react-native-elements/dist/helpers';

const uri  = require("../assets/images/sixth.jpeg")

import {Searchbar} from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'; 
import { Data } from '../Data';
import { Colors } from 'react-native/Libraries/NewAppScreen'; 

function Webviewfunc(){
  return(
    <View>
      <WebView source={{ uri: 'https://freshleafuae.com/' }} />
    </View>
    
  )
}
const Accountspage = ({navigation}) => {
  const [showModal, setShowModal] = useState(false)

  function Modalhandler(){
    return(
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} style = {styles.Modalmain}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Update Personal Info</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Enter New Name</FormControl.Label>
              <Input style= {styles.personalInfo}/>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Enter New Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Enter New Phone Number</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Update 
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    )
  }
    return (
        <View style = {styles.Main}>
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
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
          <View style = {styles.cardholder}>
            <View style= {styles.Card}>
              {Data.map((data)=>{
                return(
                  <View style = {styles.Cardinner}>
                  <Avatar
                  size="large"
                  rounded
       source={{
         uri:
          data.uri,
       }}
       />
       <View style = {styles.Textholderinner}>
         
       <Text style = {styles.Text}>{data.name}</Text>
       <Text style = {styles.Text}>{data.phone_number}</Text>
       <Text style = {styles.Text}>{data.email}</Text>
       </View>
       <View style = {styles.Editholder}>
  
       <Icon name = "edit" style = {{color:"white" }} size = {20} onPress={() => setShowModal(true)}/>
    
       
       
      
       </View>
       </View>
                )
              })}
           
               </View>
            </View>
            
            <View style = {styles.listholder}>
              <TouchableOpacity style = {styles.contentholder} onPress = {()=>navigation.navigate("Help")}>
                <Icon name = "contacts" size = {25} style = {{color:"#022b4f"}} />
                <Text style = {styles.listtext}>Help and Contacts</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.contentholder}  onPress = {()=>navigation.navigate("")}>
                <Icon name = "inbox" size = {25}  style = {{color:"#022b4f"}}/>
                <Text style = {styles.listtext}>Orders</Text></TouchableOpacity> 
                <TouchableOpacity style = {styles.contentholder}  onPress = {()=>navigation.navigate("")}>
                <Icon name = "infocirlce" size = {25} style = {{color:"#022b4f"}} />
                <Text style = {styles.listtext}>About Us</Text></TouchableOpacity> 
                <TouchableOpacity style = {styles.contentholder}  onPress = {()=>navigation.navigate("")}>
                <Icon name = "book" size = {25}  style = {{color:"#022b4f"}} />
                <Text style = {styles.listtext}>How to use </Text>
                
              
                
                
                
                </TouchableOpacity>  
                
            </View>
            <NativeBaseProvider>
       
        <Modalhandler />
      
    </NativeBaseProvider>
        </View>
    )
}


const styles = StyleSheet.create({
    Main:{ 
        marginTop:heightPercentageToDP("1%")
    },
    Card:{
        width:widthPercentageToDP('95%'),
        height:heightPercentageToDP("20%"),
        backgroundColor:"#00315a",
        borderRadius:20,
        padding:20,
        justifyContent:'center',
    },
    Cardinner:{
      flexDirection:'row',
      justifyContent:'flex-start'
    },
    Text:{
      fontFamily:Fonts.POPPINS_REGULAR,
      color:"white", 
      fontSize:15
    },
    Text2:{
    marginTop:10,
    fontSize:12,
    color:"white",
    fontFamily:Fonts.POPPINS_REGULAR,
    textAlign:'center'
    },
    Textholderinner:{
  marginLeft:widthPercentageToDP("5%")      
    },
    Editholder:{
      marginLeft:widthPercentageToDP("1%")
    },

    listholder:{
      flexDirection:'column',
      width:widthPercentageToDP("100%"),
      padding:heightPercentageToDP('8%'),
      marginBottom:heightPercentageToDP('8%'),
     
      },
      cardholder:{
        justifyContent:'center',
        alignItems:'center'
      },
      listtext:{
        height:heightPercentageToDP("10%"),
        fontSize:20,
        fontFamily:Fonts.POPPINS_REGULAR,
        marginLeft:widthPercentageToDP('8%')
        
      },
      Modalmain:{
        width:widthPercentageToDP("100%"),
        backgroundColor:"grey"
      },
      contentholder:{
        flexDirection:'row',
        justifyContent:'flex-start',


      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center', 
        color:Colors.LIGHTCOLOR
      },
  });
export default Accountspage;
