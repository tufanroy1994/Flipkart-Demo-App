import {Platform, StyleSheet} from 'react-native';
import {AppColors, wp} from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY_TEXT,
  },
  contentContainer: {
    paddingHorizontal: wp(6),
    paddingTop: Platform.OS === 'ios' ? wp(15) : wp(6),
  },
  tabList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: wp(7),
    gap: wp(3),
  },
});
