import {StyleSheet} from 'react-native';
import {AppColors, wp, FontSizes} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
  },
  header: {
    backgroundColor: AppColors.BLUE_BORDER,
    height: wp(25),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingTop: wp(10),
    gap: wp(5),
  },
  icon: {
    color: AppColors.PRIMARY_BACKGROUND,
  },
  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: wp(15),
  },
  mainText: {
    fontSize: FontSizes.FONT_SIZE_12,
    paddingTop: wp(2),
    paddingBottom: wp(2),
  },
  text: {
    fontSize: FontSizes.FONT_SIZE_12,
  },
  link: {
    fontSize: FontSizes.FONT_SIZE_12,
    color: AppColors.BLUE_BORDER,
  },
});
