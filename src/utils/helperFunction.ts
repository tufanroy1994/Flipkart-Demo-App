import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {createNavigationContainerRef} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackParamList} from '../navigation/types/RootStackTypes';

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

export const getStoredPincode = async (): Promise<string> => {
  try {
    const storedPincode = await AsyncStorage.getItem('selectedPincode');
    return storedPincode || '712602'; // Default fallback
  } catch (error) {
    console.error('Failed to load pincode from storage', error);
    return '712602'; // Fallback on error
  }
};

export const savePincode = async (pincode: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('selectedPincode', pincode);
  } catch (error) {
    console.error('Failed to save pincode', error);
  }
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
