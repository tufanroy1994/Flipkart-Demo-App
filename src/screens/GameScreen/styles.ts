import {StyleSheet} from 'react-native';
import {AppColors, wp} from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY_TEXT,
  },
  contentContainer: {
    paddingHorizontal: wp(6),
    paddingTop: wp(13),
  },
  tabList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: wp(7),
    gap: wp(3),
  },
});
