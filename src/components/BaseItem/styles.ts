import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  headingText: {
    color: AppColors.PRIMARY_TEXT,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: 'bold',
    paddingTop: wp(3),
  },
  content: {
    flexDirection: 'row',
  },
  icon: {
    color: AppColors.ICON_COLOR,
    paddingTop: wp(4),
    paddingRight: wp(4),
  },
  text3: {
    paddingTop: wp(2.5),
    fontSize: FontSizes.FONT_SIZE_14,
  },
  text4: {
    fontSize: FontSizes.FONT_SIZE_12,
    color: AppColors.LABEL_TEXT,
  },
  angle: {
    paddingTop: wp(4),
    color: AppColors.LABEL_TEXT,
    marginLeft: 'auto',
  },
});
