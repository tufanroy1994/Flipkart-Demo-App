import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppColors, navigationRef} from '../utils';
import {
  EmailLoginScreen,
  LanguageScreen,
  LoginScreen,
  PrivacyPolicyScreen,
  TermsScreen,
  VerifyOTPScreen,
  WelcomeScreen,
} from '../screens';
import {RootStackParamList} from './types/RootStackTypes';
import BottomTabNavigation from './BottomTabNavigation';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const appTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: AppColors.PRIMARY_BACKGROUND,
      text: AppColors.PRIMARY_TEXT,
    },
  };

  return (
    <NavigationContainer theme={appTheme} ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="EmailLoginScreen" component={EmailLoginScreen} />
        <Stack.Screen name="VerifyOTPScreen" component={VerifyOTPScreen} />
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen name="TermsScreen" component={TermsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
