import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Tabs from '../Tabs/Bottomtabs';
import {Fonts} from '../contants';
import {
  Select,
  VStack,
  CheckIcon,  
  Button,
  Modal,
  useToast,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {useState} from 'react';

import {color} from 'react-native-elements/dist/helpers';

import {Searchbar} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const SearchHome = ({navigation}) => {
  const [showModal, setShowModal] = useState(false)
  let [service, setService] = React.useState("")
  
  let [category, setCategory] = React.useState("")
  const toast = useToast()
  function Modalhandler(){
    return(
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} style = {styles.Modalmain} 
      size="xl">
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Apply filters</Modal.Header>
          <Modal.Body>
          <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose a Country"
        placeholder="Choose a Country"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="France" value="France" />
        <Select.Item label="USA" value="USA" />
        <Select.Item label="UK" value="UK" />
        <Select.Item label="SPAIN" value="SPAIN" />
        <Select.Item label="ITALY" value="ITALY" />
      </Select>

      <Select
        selectedValue={category}
        minWidth="200"
        accessibilityLabel="Choose a category"
        placeholder="Choose a Category"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
         
        <Select.Item label="Fashion" value="Fashion" />
        <Select.Item label="Electronic" value="Electronics" />
        <Select.Item label="Home Decor" value="Home Decor" />
        <Select.Item label="Kitchen" value="Kitchen" />
      </Select>
    </VStack>
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
              style = {{backgroundColor:"#022b4f"}}
                onPress={() => {
                  setShowModal(false)
                   
                }}
                 
              >
                Apply  
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    )
  }
    return (
        <View style={styles.container}>
      <Text style={styles.Maintext}>Select A store to shop</Text>

      <View style={styles.Searchholder}>
        <View>
          <Searchbar placeholder="Search" style={styles.Search} />
        </View>
 
        <TouchableOpacity style={styles.filterholder}  onPress={() => setShowModal(true)}> 
            <Image
              source={require('../assets/images/filter.png')}
              style={styles.filter}
            /> 
            
            <Text style={styles.filtertext}>Filter</Text>
         
        </TouchableOpacity>
        
      </View>
      <NativeBaseProvider>
       
       <Modalhandler />
     
   </NativeBaseProvider>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      
      backgroundColor: 'white',
    },
    Maintext: {
      fontSize: 20,
      fontFamily: Fonts.POPPINS_BOLD,
      textAlign: 'center',
  
      marginTop: hp('1%'),
      color:"#00315a"

    },
    Searchholder: {
      flexDirection: 'row',
      justifyContent: 'space-around',
  
      marginTop: hp('1%'),
    },
    Search: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eaeaea',
      width: wp('75%'),
    },
    filter: {
      height: hp('3%'),
      width: wp('8%'),
    },
    filterholder: {},
    filtertext: {
      fontSize: 15,
      fontFamily: Fonts.POPPINS_BOLD,
      textAlign: 'center',
      marginTop: hp('.55%'),
      color: '#063970',
    },
    Modalmain:{
      width:widthPercentageToDP("80%")
    }
  });
export default SearchHome
