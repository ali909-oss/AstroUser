import React from 'react';
import { Accordion, Box, NativeBaseProvider, Center, ScrollView, VStack,Text,Button,Modal,
  FormControl,InputTextArea,Input,TextArea} from 'native-base';
import{View,StatusBar,StyleSheet} from "react-native"
import { heightPercentageToDP } from 'react-native-responsive-screen';

import {Display} from '../utils';

import {Fonts} from '../contants';

import Ionicons from 'react-native-vector-icons/Ionicons';

 
import { Colors } from '../contants';

import { Separator } from '../components';

 const Help = ({navigation}) => {
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
<Text style={styles.headerTitle}>Help and Contacts</Text>
</View>

<View>
  <ScrollView style = {{height:heightPercentageToDP('80%')}}>
 
   
   <Accordian/>
   <ContactModal/>      
</ScrollView>   
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
 
 export default Help
 