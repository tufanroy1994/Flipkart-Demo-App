import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, hp, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
  },
  header: {
    backgroundColor: AppColors.BLUE_BORDER,
    height: wp(40),
  },
  headerText: {
    paddingHorizontal: wp(5),
    paddingTop: wp(23),
  },
  subTitle: {
    marginHorizontal: wp(5),
    marginVertical: wp(3),
    fontSize: FontSizes.FONT_SIZE_14,
    color: AppColors.PRIMARY_TEXT,
  },
  listContainer: {
    paddingBottom: 100,
  },
  buttonContainer: {
    marginTop: wp(1),
    marginHorizontal: 1, // Horizontal margin
    marginVertical: 1,
    position: 'static', // Make sure to position it correctly
    left: 1,
    right: 1,
    height: hp(9),
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    elevation: 10, // Increased shadow effect on Android
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      // Shadow offset
      width: 0,
      height: 4, // Slightly lower for a floating effect
    },
    shadowOpacity: 0.3, // Adjust opacity for shadow
    shadowRadius: 8, // Spread of the shadow
    zIndex: 1, // Ensure it's above other components
    borderColor: 'white',
  },
});
