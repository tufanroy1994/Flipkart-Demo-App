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
];

const categoryDetails: Record<string, any> = {
  '1': {
    sections: [
      {
        title: 'Popular Store',
        items: [
          {label: 'Sale is live!', image: AppImages.SALE_IS_LIVE},
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
        items: [],
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
                  style={section.isGrid ? styles.itemBoxSmall : styles.itemBox}>
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
