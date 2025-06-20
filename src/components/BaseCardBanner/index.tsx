import React, {memo} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';

interface BaseCardBannerProps {
  cardImage?: ImageSourcePropType;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  backgroundColor?: string;
  buttonColor?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const BaseCardBanner = ({
  cardImage,
  title,
  subtitle,
  description,
  buttonLabel,
  backgroundColor,
  buttonColor,
  onPress,
  containerStyle,
  ...props
}: TouchableOpacityProps & BaseCardBannerProps) => {
  return (
    <View style={[styles.container, {backgroundColor}, containerStyle]}>
      <TouchableOpacity {...props} onPress={onPress}>
        <View style={styles.content}>
          <Image
            source={cardImage}
            style={styles.cardImage}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            {description ? (
              <Text style={styles.description}>{description}</Text>
            ) : null}
          </View>
        </View>
        <View style={[styles.buttonFooter, {backgroundColor: buttonColor}]}>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
          <Icon name="arrow-right" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(BaseCardBanner);
