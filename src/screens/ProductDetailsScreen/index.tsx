import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {AppImages} from '../../utils';
import {useAppNavigation} from '../../hooks';
import {styles} from './styles';

const categoryItems = [
  {id: '1', name: 'For You', image: AppImages.FOR_YOU},
  {id: '2', name: 'Grocery', image: AppImages.GROCERY_IMAGE},
  {id: '3', name: 'Fashion', image: AppImages.FASHION_IMAGE},
  {id: '4', name: 'Appliances', image: AppImages.APPLIANCE_IMAGE},
  {id: '5', name: 'Mobiles', image: AppImages.MOBILE_IMAGE},
  {id: '6', name: 'Electronics', image: AppImages.ELECTRONICS_IMAGE},
  {id: '7', name: 'Smart Gadgets', image: AppImages.SMART_GADGETS},
  {id: '8', name: 'Home', image: AppImages.HOME_IMAGE},
  {id: '9', name: 'Beauty & Personal Care', image: AppImages.BEAUTY_CARE},
  {id: '10', name: 'Toys,Baby,Books...', image: AppImages.TOYS_BABY},
  {id: '11', name: 'Food & Healthcare', image: AppImages.FOOD_HEALTH},
  {id: '12', name: 'Sports Hub', image: AppImages.SPORTS_HUB},
  {id: '13', name: 'Auto Accessories', image: AppImages.AUTO},
  {id: '14', name: 'Furniture', image: AppImages.FURNITURE_IMAGE},
  {id: '15', name: 'Bike & Scooters', image: AppImages.BIKE},
  {id: '16', name: 'Travel', image: AppImages.TRAVEL_IMAGE},
  {id: '17', name: 'Gift Cards', image: AppImages.GIFT},
  {id: '18', name: 'Sell/Exchange Old Devices', image: AppImages.EXCHANGE},
];

const categoryDetails: Record<string, any> = {
  '1': {
    sections: [
      {
        title: 'Popular Store',
        items: [
          {
            label: 'Sale is live!',
            image: AppImages.SALE_IS_LIVE,
            screenName: 'GameScreen',
          },
          {label: 'Claim Now', image: AppImages.CLAIM_NOW},
          {label: "Kid's Zone", image: AppImages.KIDS_ZONE},
        ],
      },
      {
        title: 'Recently Viewed Stores',
        items: [{label: 'Mobiles', image: AppImages.MOBILE_IMAGE}],
      },
      {
        title: 'Have you tried?',
        items: [
          {label: 'SuperCoin', image: AppImages.SUPER_COIN},
          {label: 'Plus Zone', image: AppImages.PLUS_ZONE},
          {label: 'Bills & Recharges', image: AppImages.RECHARGE},
          {label: 'Flipkart Pay', image: AppImages.FLIPKART_PAY},
          {label: 'Personal Loan', image: AppImages.PERSONAL_LOAN},
          {label: 'GenZ trends', image: AppImages.GENZ_TRENDS},
          {label: 'VIP', image: AppImages.VIP},
          {label: 'Become a Seller', image: AppImages.SELLER},
          {label: 'LiveShop+', image: AppImages.LIVESHOP},
          {label: 'Coupons', image: AppImages.COUPONS},
          {label: 'Free Credit Score', image: AppImages.CREDIT_SCORE},
          {label: 'FireDrops', image: AppImages.FIREDROPS},
          {label: "What's New", image: AppImages.WHATS_NEW},
          {label: 'View Less', image: AppImages.VIEW_LESS},
        ],
        isGrid: true, // optionally tell UI to wrap items
      },
      {
        title: 'More on Flipkart',
        items: [
          {label: 'Flipkart Green', image: AppImages.FLIPKART_GREEN},
          {label: 'Flipkart Samarth', image: AppImages.FLIPKART_SAMARTH},
          {label: 'Flipkart Originals', image: AppImages.FLIPKART_ORIGINALS},
          {label: 'Smart Living', image: AppImages.SMART_LIVING},
          {label: 'Next Gen Brands', image: AppImages.NEXT_GEN},
        ],
        isGrid: true, // optionally tell UI to wrap items
      },
    ],
  },
};

const ProductDetailsScreen = () => {
  const navigation = useAppNavigation('ProductDetailsScreen');

  const [selectedCategoryId, setSelectedCategoryId] = useState('1');

  const renderCategoryItem = ({item}: any) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategoryId === item.id && styles.categoryItemActive,
      ]}
      onPress={() => setSelectedCategoryId(item.id)}>
      <Image source={item.image} style={styles.categoryIcon} />
      <Text
        style={[
          styles.categoryText,
          selectedCategoryId === item.id && styles.categoryTextActive,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderRightContent = () => {
    const data = categoryDetails[selectedCategoryId];
    if (!data) return null;

    return (
      <ScrollView style={styles.rightContent}>
        {data.sections.map((section: any, index: number) => (
          <View key={index}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View
              style={section.isGrid ? styles.itemsRowWrap : styles.itemsRow}>
              {section.items.map((item: any, idx: number) => (
                <TouchableOpacity
                  key={idx}
                  style={section.isGrid ? styles.itemBoxSmall : styles.itemBox}
                  onPress={() => {
                    if (item.screenName) {
                      navigation.navigate(item.screenName);
                    } else {
                      console.warn('No screen assigned for this item.');
                    }
                  }}>
                  <Image
                    source={item.image}
                    style={
                      section.isGrid ? styles.itemImageSmall : styles.itemImage
                    }
                  />
                  <Text
                    style={
                      section.isGrid ? styles.itemLabelSmall : styles.itemLabel
                    }>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <>
      <View style={[styles.headerContainer]}>
        <Text style={[styles.text]}>All Categories</Text>
        <Icon name="search" size={18} style={[styles.searchIcon]} />
        <Icon name="shopping-cart" size={18} style={[styles.cartIcon]} />
      </View>
      <View style={[styles.flexContainer]}>
        {/* Left Category List */}
        <View style={[styles.leftPanel]}>
          <FlatList
            data={categoryItems}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/* Right Category Detail */}
        <View style={styles.rightPanel}>{renderRightContent()}</View>
      </View>
    </>
  );
};

export default ProductDetailsScreen;
