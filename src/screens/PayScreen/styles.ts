import {Platform, StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingTop: Platform.OS === 'ios' ? wp(15) : wp(8),
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingTop: wp(5),
  },
  headerText: {
    color: AppColors.PRIMARY_TEXT,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: 'bold',
  },
  banner: {
    paddingTop: wp(4),
    gap: wp(4),
  },
});
