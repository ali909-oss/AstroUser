import React from 'react';
import { Accordion, Box, NativeBaseProvider, Center, ScrollView, VStack,Text,Button,Modal,
  FormControl,InputTextArea,Input,TextArea,Image, Avatar} from 'native-base';
import{View,StatusBar,StyleSheet} from "react-native"
import { heightPercentageToDP } from 'react-native-responsive-screen';
import {widthPercentageToDP} from 'react-native-responsive-screen';

import {Display} from '../utils';

import {Fonts} from '../contants';

import Ionicons from 'react-native-vector-icons/Ionicons';

 
import { Colors } from '../contants';

import { Separator } from '../components';

 const Aboutuus = ({navigation}) => {
  function ContactModal() {
    const [modalVisible, setModalVisible] = React.useState(false)
    const [showModal, setShowModal] =   React.useState(false)
    return (
      <>
 <Button onPress={() => setShowModal(true)} > Contact Us </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Subject</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Description</FormControl.Label>
              <TextArea
      h={20}
      placeholder="Text Area Placeholder"
      w={{
        base: "100%",
        md: "25%",
      }}
    />

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
                Submit
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal> 
      </>
    )
  }
  
  function Accordian(){

    return(
    
      <Box my={5}>
        
      <Accordion allowToggle defaultIndex={[2]}>
        <Accordion.Item>
          <Accordion.Summary>
            First FAQ
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary>
            Second FAQ
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
  
        <Accordion.Item>
          <Accordion.Summary>
           Third FAQ
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
  
        <Accordion.Item>
          <Accordion.Summary>
            Fourth FAQ
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
  
        <Accordion.Item>
          <Accordion.Summary>
            FIFTH FAQ
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
  
        <Accordion.Item>
          <Accordion.Summary>
            SIXTH FAQ
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary>
            SEVENTH FAQ
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item> 
        <Accordion.Item>
          <Accordion.Summary>
            Eight FAQ
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item> 
      </Accordion>
    </Box>
    )
  }
   
   return (
     
    
<NativeBaseProvider> 
  
    <View style = {{flex:1,backgroundColor:"white"}}>
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
<Text style={styles.headerTitle}>About Us</Text>
</View>
<View style = {{justifyContent:'center',alignItems:'center'}}>
<Image source = {require("../assets/images/storexonelogo.jpeg")} style = {{height:heightPercentageToDP("25%"),width:widthPercentageToDP("40%")}}/> 
 
<Text style = {{fontFamily:Fonts.POPPINS_MEDIUM,fontSize:20,marginTop:30,color:"#022b4f",marginBottom:30}}>Team</Text>
<Avatar.Group size="lg" max={3}>
      <Avatar
        bg="green.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg",
        }}
      >
        SS
      </Avatar>
      <Avatar
        bg="lightBlue.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        }}
      >
        AK
      </Avatar>
      <Avatar
        bg="indigo.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
        }}
      >
        RS
      </Avatar>
      <Avatar
        bg="amber.600"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
        }}
      >
        MR
      </Avatar>
      <Avatar
        bg="emerald.600"
        source={{
          uri: "https://bit.ly/code-beast",
        }}
      >
        CB
      </Avatar>
      <Avatar
        bg="blue.600"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
        }}
      >
        GG
      </Avatar>
      <Avatar
        bg="black.600"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
        }}
      >
        RS
      </Avatar>
      <Avatar
        bg="blueGray.600"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
        }}
      >
        MR
      </Avatar>
    </Avatar.Group>
<Text style
 = {{textAlign:'center',fontFamily:Fonts.POPPINS_MEDIUM,marginTop:50,color
 :"#30d7e9",marginLeft:widthPercentageToDP("10%"),marginRight:widthPercentageToDP("10%")}}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</Text>
</View>
</View>

 </NativeBaseProvider> 
   )}
   const styles = StyleSheet.create({
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
 
 export default Aboutuus
 