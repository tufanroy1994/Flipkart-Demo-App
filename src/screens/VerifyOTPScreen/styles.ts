import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BLUE_BORDER,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: wp(10),
    height: wp(27),
  },
  icon: {
    paddingLeft: wp(2),
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: wp(7),
    width: wp(12),
  },
  contentContainer: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
    paddingHorizontal: wp(8),
    paddingVertical: wp(18),
  },
  text: {
    fontSize: FontSizes.FONT_SIZE_14,
  },
  resendCode: {
    marginTop: wp(2),
    color: AppColors.BLUE_BORDER,
    textAlign: 'right',
    fontSize: FontSizes.FONT_SIZE_12,
  },
});
