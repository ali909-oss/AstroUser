// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// import Colors from '../contants/Colors';
// import Fonts from '../contants/Fonts';

// import {Display} from '../utils';
// import Separator from '../components/Separator';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// export default function Notification() {
//   return (
//     <View style={styles.container}>
//       <StatusBar
//         barStyle="dark-content"
//         backgroundColor={Colors.DEFAULT_WHITE}
//         translucent
//       />
//       <Separator height={StatusBar.currentHeight} />

//       <View style={styles.headerContainer}>
//         <Ionicons
//           name="chevron-back-outline"
//           size={30}
//           onPress={() => navigation.goBack()}
//         />
//         <Text style={styles.headerTitle}>Payment Information</Text>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 20,

//     backgroundColor: '#dadad2',
//     paddingVertical: 12,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontFamily: Fonts.POPPINS_MEDIUM,
//     lineHeight: 20 * 1.4,
//     width: Display.setWidth(60),
//     textAlign: 'center',
//     color: Colors.LIGHTCOLOR,
//   },
// });
