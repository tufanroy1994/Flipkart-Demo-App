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

  const getTabOptions = (
    screenName: keyof BottomTabStackParamList,
    iconName: string,
    label: string,
    isGameScreen: boolean,
  ) => ({
    tabBarLabel: ({focused}: {focused: boolean}) => (
      <Text
        style={{
          fontSize: FontSizes.FONT_SIZE_12,
          color: isGameScreen
            ? AppColors.PRIMARY_BACKGROUND
            : focused
            ? AppColors.BLUE_BORDER
            : AppColors.PRIMARY_TEXT,
          marginTop: wp(2),
        }}>
        {label}
      </Text>
    ),
    tabBarIcon: ({focused}: {focused: boolean}) => (
      <View
        style={{
          width: hp(6),
          height: hp(8),
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: wp(1),
        }}>
        <Icon
          name={iconName}
          size={40}
          color={
            isGameScreen
              ? AppColors.PRIMARY_BACKGROUND
              : focused
              ? AppColors.BLUE_BORDER
              : AppColors.LABEL_TEXT
          }
        />
      </View>
    ),
  });

  return (
    <Tab.Navigator
      screenOptions={({navigation}) => {
        const routeName =
          navigation.getState().routes[navigation.getState().index]?.name;
        const isGameScreen = routeName === 'GameScreen';

        return {
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
            backgroundColor: isGameScreen
              ? AppColors.TAB_COLOR
              : AppColors.PRIMARY_BACKGROUND, // Background color for the tab bar
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
        };
      }}>
      {/* Home Screen */}
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation}) =>
          getTabOptions(
            'HomeScreen',
            'home',
            t('home'),
            navigation.getState().routes[navigation.getState().index]?.name ===
              'GameScreen',
          )
        }
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
                color: focused
                  ? AppColors.PRIMARY_BACKGROUND
                  : AppColors.PRIMARY_TEXT,
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
                color={
                  focused ? AppColors.PRIMARY_BACKGROUND : AppColors.LABEL_TEXT
                } // Change icon color if needed
              />
            </View>
          ),
        }}
      />

      {/*  Product Screen*/}
      <Tab.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={({navigation}) =>
          getTabOptions(
            'ProductDetailsScreen',
            'grid',
            t('categories'),
            navigation.getState().routes[navigation.getState().index]?.name ===
              'GameScreen',
          )
        }
      />
      {/* Profile Screen */}
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({navigation}) =>
          getTabOptions(
            'ProfileScreen',
            'user',
            t('account'),
            navigation.getState().routes[navigation.getState().index]?.name ===
              'GameScreen',
          )
        }
      />
      {/* ProductList Screen */}
      <Tab.Screen
        name="TopTabNavigation"
        component={TopTabNavigation}
        options={({navigation}) =>
          getTabOptions(
            'TopTabNavigation',
            'shopping-cart',
            t('cart'),
            navigation.getState().routes[navigation.getState().index]?.name ===
              'GameScreen',
          )
        }
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
