import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {AppColors, AppStrings, FontSizes, hp, wp} from '../utils';
import {TopTabStackParamList} from './types/RootStackTypes';
import {FlipkartOrderScreen, GroceryOrderScreen} from '../screens';

const Tab = createMaterialTopTabNavigator<TopTabStackParamList>();

const TopTabNavigation = () => {
  return (
    <>
      <View style={[styles.headerContainer]}>
        <Text style={[styles.headerText]}>My Cart</Text>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: AppColors.ICON_COLOR,
          },
          tabBarStyle: {
            backgroundColor: AppColors.PRIMARY_BACKGROUND,
          },
        }}>
        <Tab.Screen
          name="FlipkartOrderScreen"
          component={FlipkartOrderScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <View
                style={{
                  backgroundColor: AppColors.PRIMARY_BACKGROUND,
                  paddingVertical: hp(1.5),
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: FontSizes.FONT_SIZE_14,
                    color: focused
                      ? AppColors.ICON_COLOR
                      : AppColors.PRIMARY_TEXT,
                    fontWeight: 'bold',
                  }}>
                  {AppStrings.flipkart}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="GroceryOrderScreen"
          component={GroceryOrderScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <View
                style={{
                  backgroundColor: AppColors.PRIMARY_BACKGROUND,
                  paddingVertical: hp(1.5),
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: FontSizes.FONT_SIZE_14,
                    color: focused
                      ? AppColors.ICON_COLOR
                      : AppColors.PRIMARY_TEXT,
                    fontWeight: 'bold',
                  }}>
                  {AppStrings.grocery}
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: wp(6),
    paddingTop: wp(15),
  },
  headerText: {
    color: AppColors.PRIMARY_TEXT,
    fontSize: FontSizes.FONT_SIZE_14,
    fontWeight: 'bold',
  },
});
