import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: AppColors.GREY_BORDER,
    borderRadius: wp(1),
    padding: wp(2.6),
    width: wp(43),
    marginBottom: wp(4),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: FontSizes.FONT_SIZE_14,
    fontWeight: 'bold',
    marginLeft: wp(4),
    color: AppColors.PRIMARY_TEXT,
  },
});
