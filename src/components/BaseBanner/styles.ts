import {Dimensions, StyleSheet} from 'react-native';
import {AppColors, wp} from '../../utils';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: wp(4),
  },
  imageWrapper: {
    width: width,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dot: {
    height: wp(1),
    width: wp(8),
    borderRadius: 4,
    backgroundColor: AppColors.LABEL_TEXT,
    marginHorizontal: wp(2),
  },
  activeDot: {
    backgroundColor: AppColors.PRIMARY_TEXT,
  },
});
