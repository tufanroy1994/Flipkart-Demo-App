import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
  },
  header: {
    backgroundColor: AppColors.BLUE_BORDER,
    height: wp(40),
  },
  headerText: {
    paddingHorizontal: wp(5),
    paddingTop: wp(23),
  },
  subTitle: {
    marginHorizontal: wp(5),
    marginVertical: wp(3),
    fontSize: FontSizes.FONT_SIZE_14,
    color: AppColors.PRIMARY_TEXT,
  },
  listContainer: {
    paddingBottom: 100,
  },
});
