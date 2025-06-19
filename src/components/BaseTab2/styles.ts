import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    height: wp(9),
    paddingHorizontal: wp(4), // Add horizontal padding instead of fixed minWidth
    backgroundColor: AppColors.TAB_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(1.9),
    borderColor: AppColors.LABEL_TEXT,
    borderWidth: wp(0.1),
    alignSelf: 'flex-start', // Let it wrap content instead of stretching
  },
  text: {
    color: AppColors.PRIMARY_BACKGROUND,
    fontSize: FontSizes.FONT_SIZE_12,
    fontWeight: 'bold',
  },
});
