import {StyleSheet} from 'react-native';
import {AppColors, wp} from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingTop: wp(15),
  },
});
