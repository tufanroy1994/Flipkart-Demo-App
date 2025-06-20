import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    borderRadius: wp(4),
    width: wp(72),
    paddingTop: wp(7),
    height: wp(40),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardImage: {
    width: wp(20),
    height: wp(20),
    marginRight: wp(2),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: AppColors.PRIMARY_TEXT,
    fontWeight: '700',
    fontSize: FontSizes.FONT_SIZE_14,
  },
  subtitle: {
    color: AppColors.PRIMARY_TEXT,
    fontWeight: '700',
    fontSize: FontSizes.FONT_SIZE_14,
    marginTop: wp(1),
  },
  description: {
    fontSize: FontSizes.FONT_SIZE_12,
    color: '#444',
    marginTop: wp(2),
  },
  buttonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: wp(4),
    paddingHorizontal: wp(4),
    borderBottomLeftRadius: wp(4),
    borderBottomRightRadius: wp(4),
  },
  buttonText: {
    color: AppColors.PRIMARY_BACKGROUND,
    fontWeight: '700',
    fontSize: FontSizes.FONT_SIZE_14,
  },
});
