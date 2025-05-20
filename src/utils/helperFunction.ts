import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {createNavigationContainerRef} from '@react-navigation/native';

import {
  RootStackParamList,
  BottomTabStackParamList,
} from '../navigation/types/RootStackTypes';

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
