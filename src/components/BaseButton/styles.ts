import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: AppColors.GREY_BORDER,
  },
  title: {
    color: AppColors.PRIMARY_BACKGROUND,
    fontSize: FontSizes.FONT_SIZE_14,
    fontWeight: 'bold',
  },
});
