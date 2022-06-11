import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../contants/Colors';
import Accordion from 'react-native-collapsible/Accordion';

class AccordionView extends Component {
  state = {
    activeSections: [],
  };
  _renderHeader = section => {
    return (
      <View
        style={{
          width: wp(80),
          height: hp(10),
          marginTop: hp(1.5),
          backgroundColor: '#4A2B2B',
          alignSelf: 'center',
          justifyContent: 'space-evenly',
          borderRadius: 10,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {/* <Image source={require('../assets/icons/calender.png')} /> */}
        <View>
          <Text style={{color: '#ff7668', fontWeight: '700', fontSize: 18}}>
            It is long extablished...
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: Colors.gray,
              marginRight: wp(1),
            }}>
            Kliknij aby zobaczyć więcej
          </Text>
        </View>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View>
        <View
          style={{
            width: wp(80),
            // height: hp(35),
            borderRadius: 10,
            alignSelf: 'center',
            backgroundColor: Colors.TEXT_BLACK,
          }}>
          <Text
            style={{
              color: 'white',
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}>
            {section.content}
          </Text>
        </View>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    return (
      <Accordion
        sections={this.props.section}
        activeSections={this.state.activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        underlayColor={'transparent'}
      />
    );
  }
}

export default AccordionView;
