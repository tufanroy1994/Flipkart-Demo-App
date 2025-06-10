import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: wp(15),
  },
  icon: {
    color: AppColors.GREY_BORDER,
  },
  text: {
    color: AppColors.PRIMARY_TEXT,
    fontSize: FontSizes.FONT_SIZE_18,
    fontWeight: 'bold',
    paddingTop: wp(8),
  },
  buttonContainer: {
    marginTop: wp(8),
    backgroundColor: AppColors.ICON_COLOR,
    height: wp(9),
    width: wp(40),
    borderRadius: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: AppColors.PRIMARY_BACKGROUND,
    fontSize: FontSizes.FONT_SIZE_14,
    fontWeight: 'bold',
  },
});
