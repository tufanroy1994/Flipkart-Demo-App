import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: wp(4),
    alignItems: 'center',
  },
  icon: {
    color: AppColors.ICON_COLOR,
    alignItems: 'center',
    marginRight: wp(4),
  },
  title: {
    fontSize: FontSizes.FONT_SIZE_14,
    color: AppColors.PRIMARY_TEXT,
    flex: 1,
  },
  chevron: {
    marginLeft: 'auto',
  },
});
