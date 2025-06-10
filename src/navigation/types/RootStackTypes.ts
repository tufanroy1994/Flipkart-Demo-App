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
  GroceryScreen: undefined;
  TravelScreen: undefined;
  PayScreen: undefined;
};

export type BottomTabStackParamList = {
  HomeScreen: undefined;
  GameScreen: undefined;
  ProductDetailsScreen: undefined;
  ProfileScreen: undefined;
  TopTabNavigation: NavigatorScreenParams<TopTabStackParamList>;
};

export type TopTabStackParamList = {
  FlipkartOrderScreen: undefined;
  GroceryOrderScreen: undefined;
};

export type RootRouteProps<
  RouteName extends
    | keyof RootStackParamList
    | keyof BottomTabStackParamList
    | keyof TopTabStackParamList,
> = RouteProp<
  RootStackParamList & BottomTabStackParamList & TopTabStackParamList,
  RouteName
>;
