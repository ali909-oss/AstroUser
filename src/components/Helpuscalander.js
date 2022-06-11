import React, { useState } from 'react'
import { Button,Touchable,View,Text,Image } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  
  return (
    <>
    <View style = {{marginTop:20}}>
       <TouchableOpacity style = {{width:widthPercentageToDP("95%"),backgroundColor:"white",padding:15,borderRadius:5,flexDirection:'row',justifyContent:'space-between'}} onPress={() => setOpen(true)}>
        <Text>{date.toDateString()}</Text>
        <Image source={require("../assets/images/calendar.png")} style = {{height:25,width:25}}/>
       </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        mode="date"
        textColor = "green"
      />
      </View>
    </>
  )
}