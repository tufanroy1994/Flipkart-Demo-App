import React from 'react';
import {View, Image, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {AppColors, AppImages, FontSizes, hp, wp} from '../utils';
import {TopTabStackParamList} from './types/RootStackTypes';
import {GroceryScreen, HomeScreen, PayScreen, TravelScreen} from '../screens';

const Tab = createMaterialTopTabNavigator<TopTabStackParamList>();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          marginTop: wp(15),
          backgroundColor: '#fff',
        },
        tabBarShowIcon: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? 'yellow' : 'transparent',
                borderRadius: wp(3),
                paddingHorizontal: wp(3),
                paddingVertical: hp(2),
                alignItems: 'center',
              }}>
              <Image
                source={AppImages.LOGO}
                style={{width: wp(6), height: wp(6), marginBottom: hp(0.5)}}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: FontSizes.FONT_SIZE_10,
                  color: focused ? 'black' : AppColors.PRIMARY_TEXT,
                  fontWeight: 'bold',
                }}>
                Flipkart
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="GroceryScreen"
        component={GroceryScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? 'yellow' : 'transparent',
                borderRadius: wp(3),
                paddingHorizontal: wp(3),
                paddingVertical: hp(2),
                alignItems: 'center',
              }}>
              <Image
                source={AppImages.GROCERY}
                style={{width: wp(6), height: wp(6), marginBottom: hp(0.5)}}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: FontSizes.FONT_SIZE_10,
                  color: focused ? 'black' : AppColors.PRIMARY_TEXT,
                  fontWeight: 'bold',
                }}>
                Grocery
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TravelScreen"
        component={TravelScreen}
        options={{title: 'Travel'}}
      />
      <Tab.Screen
        name="PayScreen"
        component={PayScreen}
        options={{title: 'Pay'}}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
