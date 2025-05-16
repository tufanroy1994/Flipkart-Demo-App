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
    paddingVertical: wp(8),
  },
  title: {
    color: AppColors.PRIMARY_TEXT,
  },
  subtitle: {
    color: AppColors.LABEL_TEXT,
    fontSize: FontSizes.FONT_SIZE_12,
    fontWeight: '500',
    paddingTop: wp(2),
  },
  label: {
    color: AppColors.BLUE_BORDER,
    fontSize: FontSizes.FONT_SIZE_12,
    paddingTop: wp(4),
  },
  inputContainer: {
    flexDirection: 'row',
    gap: wp(1),
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: wp(1),
    paddingHorizontal: wp(5),
    marginVertical: wp(2),
    width: wp(85),
    borderColor: AppColors.BLUE_BORDER,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
  },
  input: {
    flex: 1,
    fontSize: FontSizes.FONT_SIZE_16,
    padding: wp(3),
    color: AppColors.PRIMARY_TEXT,
  },
  useEmail: {
    color: AppColors.BLUE_BORDER,
    fontSize: FontSizes.FONT_SIZE_12,
    textAlign: 'right',
    marginBottom: wp(5),
  },
  terms: {
    fontSize: FontSizes.FONT_SIZE_12,
    marginBottom: wp(5),
  },
  link: {
    color: AppColors.BLUE_BORDER,
  },
});
