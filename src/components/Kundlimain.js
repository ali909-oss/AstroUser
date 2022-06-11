import { View, Text } from 'react-native';
import React from 'react';
import Openkundli from './Openkundli';
import Newkundli from './Newkundli';

const Kundlimain = ({data}) => {
  return (
    <View>
        {data === "Open Kundli" ? <Openkundli/> : <Newkundli/>} 
    </View>
  );
};

export default Kundlimain;
