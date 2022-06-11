import React from 'react'
import { View, Text } from 'react-native'
import Accountspage from '../components/Accountspage'
import {createStackNavigator} from '@react-navigation/stack'; 
import Help from '../components/helpandcontact'
import Aboutus from './Aboutus'
import Howto from './Howto'
import orders from './orders'
import Aboutuus from './Aboutus';


const Stack = createStackNavigator();
const Accountsmain = () => {
    return ( 
            
      <Stack.Navigator screenOptions={{headerShown: false}}>
       
        
         <Stack.Screen
           name="Accountspage"
           component={Accountspage}
         />
             
             <Stack.Screen
           name="Help"
           component={Help}
         />

<Stack.Screen
           name="Orders"
           component={orders}
         />
         <Stack.Screen
           name="about"
           component={Aboutuus}
         />
         <Stack.Screen
           name="Howto"
           component={Howto}
         />
         
        
           
     
   </Stack.Navigator>  
    )
}

export default Accountsmain
