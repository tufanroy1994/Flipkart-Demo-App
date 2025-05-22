import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    marginVertical: wp(3),
  },
  item: {
    alignItems: 'center',
    marginHorizontal: wp(2),
  },
  imageWrapper: {
    // backgroundColor: '#E0F7FA',
    borderRadius: wp(4),
    padding: wp(2),
    width: wp(18),
    height: wp(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp(24),
    height: wp(24),
  },
  title: {
    marginTop: wp(2),
    fontSize: FontSizes.FONT_SIZE_12,
    fontWeight: '600',
    color: AppColors.PRIMARY_TEXT,
  },
});
