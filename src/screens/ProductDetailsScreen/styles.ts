import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  // Header Text Style
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    paddingTop: wp(18),
    paddingBottom: wp(4),
  },
  text: {
    color: AppColors.PRIMARY_TEXT,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: 'bold',
  },
  searchIcon: {
    paddingLeft: wp(45),
  },
  cartIcon: {
    paddingLeft: wp(6),
  },

  //   Left Side Category List Style
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftPanel: {
    width: '28%',
    backgroundColor: AppColors.LIGHT_BLUE,
  },

  categoryItem: {
    padding: wp(3),
    alignItems: 'center',
  },
  categoryItemActive: {
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    borderLeftWidth: wp(1.6),
    borderLeftColor: AppColors.BLUE_BORDER,
  },
  categoryIcon: {
    width: wp(10),
    height: wp(10),
    resizeMode: 'contain',
    marginBottom: wp(1.5),
  },
  categoryText: {
    fontSize: FontSizes.FONT_SIZE_12,
    color: '#555',
    textAlign: 'center',
  },
  categoryTextActive: {
    color: AppColors.BLUE_BORDER,
    fontWeight: 'bold',
  },

  //   Right Side Content Style
  rightPanel: {
    flex: 1,
    padding: wp(3),
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
  },
  rightContent: {
    paddingBottom: wp(5),
  },
  sectionTitle: {
    fontSize: FontSizes.FONT_SIZE_14,
    fontWeight: '600',
    marginVertical: wp(4),
    color: AppColors.PRIMARY_TEXT,
  },
  itemsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: wp(2),
  },
  itemsRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  itemBox: {
    alignItems: 'center',
    marginRight: wp(5),
  },
  itemBoxSmall: {
    width: '30%',
    alignItems: 'center',
    marginBottom: wp(3),
  },
  itemImage: {
    width: wp(19),
    height: wp(19),
    resizeMode: 'contain',
  },
  itemImageSmall: {
    width: wp(15),
    height: wp(15),
    resizeMode: 'contain',
  },
  itemLabel: {
    fontSize: FontSizes.FONT_SIZE_10,
    marginTop: 5,
    textAlign: 'center',
    color: AppColors.PRIMARY_TEXT,
  },
  itemLabelSmall: {
    fontSize: FontSizes.FONT_SIZE_10,
    marginTop: 5,
    textAlign: 'center',
    color: AppColors.PRIMARY_TEXT,
  },
});
