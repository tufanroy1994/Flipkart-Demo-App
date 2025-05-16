import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginVertical: wp(5),
  },
  input: {
    width: wp(10),
    height: wp(13),
    borderBottomWidth: 2,
    borderColor: AppColors.PRIMARY_TEXT,
    textAlign: 'center',
    fontSize: FontSizes.FONT_SIZE_20,
  },
});
