import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../contants/Colors';
import Fonts from '../contants/Fonts';

const KundliTopTabSlider = ({id, name, onPress, slider, nav_route}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: slider === id ? Colors.DEFAULT_GREY : Colors.WHITE,
          borderWidth: slider === id ? 1 : 0,
          paddingHorizontal: nav_route === 'LagnaScreen' ? wp('12%') : wp('2%'),
        },
      ]}>
      <Pressable onPress={onPress}>
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //backgroundColor: Colors.DEFAULT_GREY,
    borderWidth: 1,
    borderColor: 'black',
    padding: wp('2%'),
    borderRadius: 12,
    // marginLeft: wp('4%'),
  },
});

export default KundliTopTabSlider;

// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet, Pressable} from 'react-native';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// import Colors from '../../contants/colors';
// import Fonts from '../../contants/fonts';

// const KundliTopTabSlider = ({id, name, onPress}) => {
//   const [slider, setSlider] = useState(1);
//   return (
//     <View
//       style={[
//         styles.container,
//         {backgroundColor: slider === id ? Colors.DEFAULT_GREY : Colors.WHITE},
//       ]}>
//       <Pressable onPress={onPress}>
//         <Text>{name}</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     //flex: 1,
//     //backgroundColor: Colors.DEFAULT_GREY,
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: wp('2%'),
//     borderRadius: 5,
//   },
// });

// export default KundliTopTabSlider;
