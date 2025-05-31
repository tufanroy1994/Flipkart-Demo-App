import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: AppColors.GREY_BORDER,
  },
  headerContainerBackground: {
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
    borderBottomWidth: 3,
    borderBottomColor: AppColors.GREY_BORDER,
    opacity: 0.5,
    paddingTop: wp(1),
  },
  contentContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: wp(4),
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
  },
  headingText: {
    color: AppColors.PRIMARY_TEXT,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: 'bold',
    paddingTop: wp(3),
  },
  buttonContainer: {
    marginHorizontal: wp(3),
    marginVertical: wp(6),
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    borderRadius: wp(1),
  },
  buttonText: {
    color: AppColors.ICON_COLOR,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: '500',
    justifyContent: 'center',
    textAlign: 'center',
    padding: wp(2),
  },
});
