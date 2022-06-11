import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import { Avatar } from 'react-native-elements';
import {Colors, Fonts, Images} from '../contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Separator} from '../components';
import {Display} from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import {AuthenicationService} from '../services';
import LottieView from 'lottie-react-native';

const inputStyle = state => {
  switch (state) {
    case 'valid':
      return {
        ...styles.inputContainer,
        borderWidth: 1,
        borderColor: Colors.SECONDARY_GREEN,
      };
    case 'invalid':
      return {
        ...styles.inputContainer,
        borderWidth: 1,
        borderColor: Colors.DEFAULT_RED,
      };
    default:
      return styles.inputContainer;
  }
};

const showMarker = state => {
  switch (state) {
    case 'valid':
      return (
        <AntDesign
          name="checkcircleo"
          color={Colors.SECONDARY_GREEN}
          size={18}
          style={{marginLeft: 5}}
        />
      );
    case 'invalid':
      return (
        <AntDesign
          name="closecircleo"
          color={Colors.DEFAULT_RED}
          size={18}
          style={{marginLeft: 5}}
        />
      );
    default:
      return null;
  }
};

const SignupScreen = ({navigation}) => {
  const Filtertags = [
    {id: 1, name: 'Student', image: require('../assets/images/main.jpg')},
    {id: 2, name: 'Professional', image: require('../assets/images/main.jpg')},
    {id: 3, name: 'Self Employeed', image: require('../assets/images/main.jpg')},
    {id: 4, name: 'Housewife', image: require('../assets/images/main.jpg')},
    {id: 5, name: 'Retired', image: require('../assets/images/main.jpg')},
  ];

  const [Status, setStatus] = useState('');
  function SetStatusfunc(ss) {
    setStatus(ss);
  }

  let [service, setService] = React.useState("")
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [emailState, setEmailState] = useState('default');
  const [usernameState, setUsernameState] = useState('default');

  const register = () => {
    let user = {
      username,
      email,
      password,
    };
    setIsLoading(true);
    AuthenicationService.register(user).then(response => {
      setIsLoading(false);
      if (!response?.status) {
        setErrorMessage(response?.message);
      }
    });
    navigation.navigate('RegisterPhone')
  };

  const checkUserExist = async (type, value) => {
    if (value?.length > 0) {
      AuthenicationService.checkUserExist(type, value).then(response => {
        if (response?.status) {
          type === 'email' && emailErrorMessage
            ? setEmailErrorMessage('')
            : null;

          type === 'username' && usernameErrorMessage
            ? setUsernameErrorMessage('')
            : null;
          type === 'email' ? setEmailState('valid') : null;
          type === 'username' ? setUsernameState('valid') : null;
        } else {
          type === 'email' ? setEmailErrorMessage(response?.message) : null;
          type === 'username'
            ? setUsernameErrorMessage(response?.message)
            : null;
          type === 'email' ? setEmailState('invalid') : null;
          type === 'username' ? setUsernameState('invalid') : null;
        }
      });
    }
  };

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
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
        
      </View>
      <View style = {styles.Headingtextholder}>
<Text style = {styles.Headingtext}>What Kind of user are you?</Text>
      </View>
      <View style = {{flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginTop:heightPercentageToDP("5%"),justifyContent:'center',alignItems:'center'}}>{Filtertags.map(data => (
          <View
            style={{
              width: widthPercentageToDP('35%'),
              borderRadius: 10,
              padding: 8,
              borderColor: 'black', 
              marginTop: heightPercentageToDP('.5%'),
              height: heightPercentageToDP('15%'),
            
            }}>
               
            <TouchableOpacity
              onPress={() => SetStatusfunc(data.name)}
              >
              <View style = {{justifyContent:'center',alignItems:'center'}}>
              <Avatar
  size="medium"
  rounded
  source={data.image}
  style={[Status === data.name? (styles.cont) : (styles.imagess)]}
/>
                <Text
                  style={{ 
                    fontSize: 15,
                    fontFamily: Fonts.POPPINS_REGULAR,
                    color: 'black',
                    textAlign:'center',
                    marginTop:10
                  }}>
                  {data.name}
                </Text>
                
              </View>
            </TouchableOpacity>
            
          </View>
        ))}</View>
<View style = {{marginTop:20,justifyContent:'center',alignItems:'center'}}>
  <Text style = {{fontSize:20,fontFamily:Fonts.POPPINS_REGULAR}}>Default Currency</Text>
  <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        placeholderTextColor= "green"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
    </VStack>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={{
            marginTop: heightPercentageToDP('5%'),
            backgroundColor: Colors.DEFAULT_Maintheme,
            width: widthPercentageToDP('95%'),
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Fonts.POPPINS_REGULAR,
              color: 'white',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
</View>
    </View></NativeBaseProvider>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  Maintitle: {
   justifyContent:'center',
   alignItems:'center'

  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom:1
  },
  Headingtextholder:{

  },
  Headingtext:{
    textAlign:'center',
    fontSize:20,
    fontFamily:Fonts.POPPINS_REGULAR,
  },
  cont: { 
    borderWidth: 4,
    borderColor: Colors.DEFAULT_Maintheme,
    borderRadius: 80/2,  
    width:60, 
    height:60,
  },
  imagess:{   
    width:60, 
    height:60
  }
});

export default SignupScreen;
