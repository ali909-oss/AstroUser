import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Text,
} from 'react-native';

import AppText from './AppText';
import Screen from '../Screen';
import colors from '../../contants/Colors';
import Fonts from '../../contants/Fonts';

import PickerItem from './PickerItem';
import MaterialIcons from 'react-native-vector-icons/Entypo';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function AppPicker({
  icon,
  items,
  value,
  onSelectItem,
  placeholder,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>{placeholder}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            {selectedItem ? (
              <AppText style={styles.text}>{selectedItem.label}</AppText>
            ) : (
              <AppText style={styles.placeholder}>{placeholder}</AppText>
            )}

            <MaterialIcons
              name="chevron-down"
              size={20}
              color={colors.TEXT_BLACK}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    //flexDirection: 'row',
    width: wp('90%'),
    padding: 15,
    marginVertical: wp('2%'),
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.TEXT_MEDIUM,
    flex: 1,
  },
  text: {
    flex: 1,
  },
  title: {
    fontFamily: Fonts.POPPINS_RUBIK,
    color: colors.TEXT_BLUE,
    fontSize: wp('2.7%'),
  },
});

export default AppPicker;
