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

  // Header Tab Style

  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingTop: Platform.OS === 'ios' ? wp(15) : wp(8),
  },
  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: wp(3),
  },

  // Location Style

  addressContainer: {
    flexDirection: 'row',
    gap: wp(2),
  },
  location: {
    fontSize: FontSizes.FONT_SIZE_14,
    fontWeight: 'bold',
  },
  deliveryText: {
    color: AppColors.BLUE_BORDER,
    fontSize: FontSizes.FONT_SIZE_14,
    fontWeight: 'bold',
  },
  angle: {
    color: AppColors.BLUE_BORDER,
    paddingTop: wp(0.4),
  },

  // Toogle Button Styles

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: wp(4),
  },
  leftSection: {
    alignItems: 'center',
    marginRight: wp(5),
  },
  label: {
    fontSize: FontSizes.FONT_SIZE_12,
    marginBottom: wp(2),
    fontWeight: '500',
  },
  toggleTrack: {
    width: wp(15),
    height: wp(7.5),
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 2,
    position: 'relative',
  },
  trackOn: {
    backgroundColor: AppColors.PRIMARY_TEXT,
  },
  trackOff: {
    backgroundColor: AppColors.GREY_BORDER,
  },
  labelsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: wp(2.1),
  },
  toggleLabel: {
    fontWeight: 'bold',
    color: AppColors.PRIMARY_BACKGROUND,
    fontSize: FontSizes.FONT_SIZE_10,
  },
  leftLabel: {
    textAlign: 'left',
  },
  rightLabel: {
    textAlign: 'right',
  },
  thumb: {
    width: wp(7),
    height: wp(7),
    borderRadius: wp(3.5),
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    zIndex: 1,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#66b3ff',
    borderRadius: wp(2),
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    paddingHorizontal: wp(1),
  },
  icon: {
    marginRight: 5,
    padding: wp(4),
    color: AppColors.BLUE_BORDER,
  },
  input: {
    flex: 1,
    paddingVertical: wp(1),
    fontSize: FontSizes.FONT_SIZE_14,
    color: AppColors.BLUE_BORDER,
  },

  // Modal Style

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    height: wp(110),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 10,
    paddingHorizontal: wp(5),
    paddingVertical: wp(4),
  },
  headerTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalText: {
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: 'bold',
  },
  pincodeText: {
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: 'bold',
    paddingTop: wp(56),
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(5),
    borderBottomWidth: 2,
    borderBottomColor: AppColors.LABEL_TEXT,
    paddingBottom: wp(1),
  },
  input2: {
    flex: 1,
    fontSize: FontSizes.FONT_SIZE_14,
    padding: 0,
    marginRight: wp(1),
    width: wp(20),
  },
  button: {
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),
    borderRadius: wp(1),
    elevation: 2,
  },
  buttonText: {
    color: AppColors.PRIMARY_BACKGROUND,
    fontSize: FontSizes.FONT_SIZE_12,
    fontWeight: 'bold',
  },
  currentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(5),
  },
  currentText: {
    marginLeft: wp(2),
    color: AppColors.BLUE_BORDER,
    fontSize: FontSizes.FONT_SIZE_14,
    fontWeight: 'bold',
  },

  // Banner Style

  bannerContainer: {
    paddingTop: wp(5),
  },

  // Category style

  categoryList: {
    flexDirection: 'row',
    paddingTop: wp(5),
    paddingHorizontal: wp(3),
    gap: wp(2),
  },
  image: {
    height: wp(20),
    width: wp(20),
  },
});
