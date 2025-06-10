import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {AppColors, hp, wp, FontSizes} from '../utils';
import {
  GameScreen,
  HomeScreen,
  ProductDetailsScreen,
  ProfileScreen,
} from '../screens';
import {BottomTabStackParamList} from './types/RootStackTypes';
import TopTabNavigation from './TopTabNavigation';
import {useTranslation} from '../hooks';

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabNavigation = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          marginTop: wp(30),
          marginHorizontal: 1, // Horizontal margin
          marginVertical: 1,
          position: 'absolute', // Make sure to position it correctly
          left: 1,
          right: 1,
          height: hp(10),
          backgroundColor: AppColors.PRIMARY_BACKGROUND, // Background color for the tab bar
          elevation: 10, // Increased shadow effect on Android
          shadowColor: '#000', // Shadow color
          shadowOffset: {
            // Shadow offset
            width: 0,
            height: 4, // Slightly lower for a floating effect
          },
          shadowOpacity: 0.3, // Adjust opacity for shadow
          shadowRadius: 8, // Spread of the shadow
          zIndex: 1, // Ensure it's above other components
          borderColor: 'white',
        },
      }}>
      {/* Home Screen */}
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: FontSizes.FONT_SIZE_12,
                color: focused ? AppColors.BLUE_BORDER : 'black',
                marginTop: wp(2),
              }}>
              {t('home')}
            </Text>
          ),
          tabBarIcon: ({size, focused}) => (
            <View
              style={{
                width: hp(6), // Adjust width and height for the border
                height: hp(8),
                alignItems: 'center', // Center the icon
                justifyContent: 'center', // Center the icon
                marginTop: wp(1),
              }}>
              <Icon
                name="home"
                size={40}
                color={focused ? AppColors.BLUE_BORDER : 'black'} // Change icon color if needed
              />
            </View>
          ),
        }}
      />
      {/* Game Screen */}
      <Tab.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: FontSizes.FONT_SIZE_12,
                color: focused ? AppColors.BLUE_BORDER : 'black',
                marginTop: wp(2),
              }}>
              {t('play')}
            </Text>
          ),
          tabBarIcon: ({size, focused}) => (
            <View
              style={{
                width: hp(6), // Adjust width and height for the border
                height: hp(8),
                paddingTop: wp(2),
                alignItems: 'center', // Center the icon
                justifyContent: 'center', // Center the icon
              }}>
              <Icon
                name="play"
                size={40}
                color={focused ? AppColors.BLUE_BORDER : 'black'} // Change icon color if needed
              />
            </View>
          ),
        }}
      />

      {/*  Product Screen*/}
      <Tab.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: FontSizes.FONT_SIZE_12,
                color: focused ? AppColors.BLUE_BORDER : 'black',
                marginTop: wp(2),
              }}>
              {t('categories')}
            </Text>
          ),
          tabBarIcon: ({size, focused}) => (
            <View
              style={{
                width: hp(6), // Adjust width and height for the border
                height: hp(8),
                paddingTop: wp(2),
                alignItems: 'center', // Center the icon
                justifyContent: 'center', // Center the icon
              }}>
              <Icon
                name="grid"
                size={40}
                color={focused ? AppColors.BLUE_BORDER : 'black'} // Change icon color if needed
              />
            </View>
          ),
        }}
      />
      {/* Profile Screen */}
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: FontSizes.FONT_SIZE_12,
                color: focused ? AppColors.BLUE_BORDER : 'black',
                marginTop: wp(2),
              }}>
              {t('account')}
            </Text>
          ),
          tabBarIcon: ({size, focused}) => (
            <View
              style={{
                width: hp(6), // Adjust width and height for the border
                height: hp(8),
                paddingTop: wp(1),
                alignItems: 'center', // Center the icon
                justifyContent: 'center', // Center the icon
              }}>
              <Icon
                name="user"
                size={40}
                color={focused ? AppColors.BLUE_BORDER : 'black'} // Change icon color if needed
              />
            </View>
          ),
        }}
      />
      {/* ProductList Screen */}
      <Tab.Screen
        name="TopTabNavigation"
        component={TopTabNavigation}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: FontSizes.FONT_SIZE_12,
                color: focused ? AppColors.BLUE_BORDER : 'black',
                marginTop: wp(2),
              }}>
              {t('cart')}
            </Text>
          ),
          tabBarIcon: ({size, focused}) => (
            <View
              style={{
                width: hp(6), // Adjust width and height for the border
                height: hp(8),
                paddingTop: wp(2),
                alignItems: 'center', // Center the icon
                justifyContent: 'center', // Center the icon
              }}>
              <Icon
                name="shopping-cart"
                size={40}
                color={focused ? AppColors.BLUE_BORDER : 'black'} // Change icon color if needed
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
