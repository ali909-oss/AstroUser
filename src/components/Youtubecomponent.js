import { View, Text } from 'react-native';
import React from 'react';
import { YouTubeStandaloneAndroid } from 'react-native-youtube';
import YouTube from 'react-native-youtube';
import { WebView } from 'react-native-webview';

const Youtubecomponent = () => {
  return (
 
<WebView 
  source={{ uri: 'https://www.youtube.com/embed/jzD_yyEcp0M' }}/>
  )
};

export default Youtubecomponent;
