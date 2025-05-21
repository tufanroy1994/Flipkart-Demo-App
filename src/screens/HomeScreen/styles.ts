import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

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
  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: wp(3),
  },
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
  textInputContainer: {
    marginTop: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4E71FF',
    borderRadius: wp(2),
    // paddingHorizontal: 10,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
  },
  inputBox: {
    flex: 1,
    paddingVertical: wp(4),
    // fontSize: 16,
  },
  iconStyle: {
    position: 'absolute',
    paddingLeft: wp(3),
    color: AppColors.BLUE_BORDER,
  },
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pincodeText: {
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: 'bold',
    paddingTop: wp(56),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(5),
    borderBottomWidth: 2,
    borderBottomColor: AppColors.LABEL_TEXT,
    paddingBottom: wp(1),
  },
  input: {
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
});
