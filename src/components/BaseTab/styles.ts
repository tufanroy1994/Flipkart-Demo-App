import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  imageContainer: {
    height: wp(18),
    width: wp(23),
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(4),
  },
  focusedTab: {
    backgroundColor: AppColors.YELLOW_BACKGROUND,
  },
  image: {
    height: wp(10),
    width: wp(10),
  },
  text: {
    color: AppColors.PRIMARY_TEXT,
    fontSize: FontSizes.FONT_SIZE_12,
    fontWeight: 'bold',
  },
});
