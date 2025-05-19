import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  LanguageScreen: undefined;
  LoginScreen: undefined;
  EmailLoginScreen: undefined;
  VerifyOTPScreen: {phoneNumber: string};
  BottomTabNavigation: NavigatorScreenParams<BottomTabStackParamList>;
  PrivacyPolicyScreen: undefined;
  TermsScreen: undefined;
};

export type BottomTabStackParamList = {
  HomeScreen: undefined;
  GameScreen: undefined;
  ProductDetailsScreen: undefined;
  ProfileScreen: undefined;
  ProductListScreen: undefined;
};

export type RootRouteProps<
  RouteName extends keyof RootStackParamList | keyof BottomTabStackParamList,
> = RouteProp<RootStackParamList & BottomTabStackParamList, RouteName>;
