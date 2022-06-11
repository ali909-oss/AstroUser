import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import Fire from 'react-native-vector-icons/SimpleLineIcons';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import News from 'react-native-vector-icons/Ionicons';
import Iconsetting from 'react-native-vector-icons/Feather';

import Icon01 from 'react-native-vector-icons/MaterialCommunityIcons';

import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();
import Homescreen from '../screens/HomeScreen';

import {heightPercentageToDP} from 'react-native-responsive-screen';
import HomeScreen from '../screens/HomeScreen';
export default function Tab() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          padding: 5,
          height: heightPercentageToDP('10%'),
        },
      }}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../assets/images/black.png')}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? '#1a71ff' : '',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#1a71ff' : '##85899f',
                    fontSize: 15,
                    marginBottom: 5,
                  }}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="Tools"
        component={Homescreen}
        style={{headerShown: false}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../assets/images/black.png')}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? '#1a71ff' : '#85899f',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#1a71ff' : '##85899f',
                    fontSize: 15,
                    marginBottom: 5,
                  }}>
                  Tools
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Livestream"
        component={Homescreen}
        style={{headerShown: false}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../assets/images/plus.png')}
                  style={{
                    height: 60,
                    width: 60,
                    tintColor: focused ? '#1a71ff' : '#85899f',
                    top: -10,
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#1a71ff' : '##85899f',
                    fontSize: 15,
                    marginBottom: 5,
                    top: -5,
                  }}>
                  Go Live
                </Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="Messages"
        component={Homescreen}
        style={{headerShown: false}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../assets/images/black.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#1a71ff' : '#85899f',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#1a71ff' : '##85899f',
                    fontSize: 15,
                    marginBottom: 5,
                  }}>
                  Messages
                </Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="News"
        component={Homescreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../assets/images/black.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#1a71ff' : '#85899f',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#1a71ff' : '##85899f',
                    fontSize: 15,
                    marginBottom: 5,
                  }}>
                  Me
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
}
