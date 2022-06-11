import React from 'react';
import LottieView from 'lottie-react-native';

export default class Liveanimation extends React.Component {
  render() {
    return  
    <LottieView source={require('../assets/images/liveanimation.json')} autoPlay loop />;
  }
}