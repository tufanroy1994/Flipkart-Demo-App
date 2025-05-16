import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(4),
    marginHorizontal: wp(4),
    marginVertical: wp(2),
    borderWidth: 2.5,
    borderColor: AppColors.GREY_BORDER,
    borderRadius: wp(2),
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
  },
  cardSelected: {
    borderColor: AppColors.BLUE_BORDER,
    backgroundColor: AppColors.LIGHT_BLUE, // light blue highlight
  },
  radioCircle: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(2.5),
    borderWidth: 0.5,
    borderColor: AppColors.PRIMARY_TEXT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(2.5),
    backgroundColor: AppColors.BLUE_BORDER,
  },
  textContainer: {
    flex: 1,
    marginLeft: wp(5),
  },
  languageName: {
    fontSize: FontSizes.FONT_SIZE_18,
    fontWeight: 'bold',
    color: AppColors.PRIMARY_TEXT,
  },
  languageNameSelected: {
    color: AppColors.BLUE_BORDER, // blue text when selected
  },
  languageLabel: {
    fontSize: FontSizes.FONT_SIZE_12,
    color: AppColors.LABEL_TEXT,
  },
  languageIcon: {
    width: wp(16),
    height: wp(12),
  },
  languageIconSelected: {
    tintColor: AppColors.BLUE_BORDER,
  },
});
