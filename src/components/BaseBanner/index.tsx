import React, {useRef, useState, useEffect, memo} from 'react';
import {
  FlatList,
  View,
  Image,
  Dimensions,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';

import {styles} from './styles';

const {width} = Dimensions.get('window');

interface BaseBannerProps {
  images: ImageSourcePropType[]; // Can be require() or { uri: string }
  autoScrollInterval?: number;
  containerStyle?: ViewStyle;
}

const BaseBanner = ({
  images,
  autoScrollInterval = 3000,
  containerStyle,
}: BaseBannerProps) => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    }, autoScrollInterval);

    return () => clearInterval(timer);
  }, [currentIndex, autoScrollInterval, images.length]);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        snapToInterval={width}
        decelerationRate="fast"
        renderItem={({item}) => (
          <View style={styles.imageWrapper}>
            <Image source={item} style={styles.image} resizeMode="cover" />
          </View>
        )}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default memo(BaseBanner);
