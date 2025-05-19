import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  dropdownContainer: {
    borderWidth: 1,
    padding: wp(4),
    borderColor: AppColors.GREY_BORDER,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    height: wp(10),
    width: wp(30),
  },
  itemText: {
    fontSize: FontSizes.FONT_SIZE_12,
    color: AppColors.PRIMARY_TEXT,
  },
  selectedText: {
    fontSize: FontSizes.FONT_SIZE_12,
    color: AppColors.PRIMARY_TEXT,
  },
});
