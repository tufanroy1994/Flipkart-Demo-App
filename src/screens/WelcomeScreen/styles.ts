import {StyleSheet} from 'react-native';
import {AppColors, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.YELLOW_BACKGROUND,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: wp(30),
    width: wp(30),
  },
});
