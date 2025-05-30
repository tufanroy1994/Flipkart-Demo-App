import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
  },
  headerContainer: {
    marginHorizontal: wp(4),
    marginTop: wp(15),
    backgroundColor: AppColors.GREY_BACKGROUND,
    height: wp(27),
    borderRadius: wp(2),
    paddingHorizontal: wp(4),
  },
  name: {
    color: AppColors.PRIMARY_TEXT,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: 'bold',
    paddingTop: wp(3),
    paddingBottom: wp(9),
  },
  text1: {
    color: AppColors.LABEL_TEXT,
    fontSize: FontSizes.FONT_SIZE_14,
  },
  text2: {
    fontSize: FontSizes.FONT_SIZE_14,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingTop: wp(6),
  },
  border: {
    borderBottomWidth: 8,
    borderBottomColor: AppColors.GREY_BORDER,
    opacity: 0.5,
    paddingTop: wp(4),
  },
});
