import React, {memo} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';

import {styles} from './styles';

interface CategoryItemType {
  id: string;
  title?: string;
  image: ImageSourcePropType;
}

interface Props {
  data: CategoryItemType[];
  containerStyle?: ViewStyle;
}

const BaseCategoryList = ({data, containerStyle}: Props) => {
  const renderItem = ({item}: {item: CategoryItemType}) => (
    <View style={styles.item}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default memo(BaseCategoryList);
