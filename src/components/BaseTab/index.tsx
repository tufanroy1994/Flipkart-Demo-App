import React, {memo} from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  ViewStyle,
  ImageSourcePropType,
  TouchableOpacityProps,
} from 'react-native';
import {styles} from './styles';

interface BaseTabPropsType {
  image?: ImageSourcePropType;
  onPress?: () => void;
  title?: string;
  isFocused?: boolean;
  focusedColor?: string;
  style?: ViewStyle;
}

const BaseTab = ({
  title,
  image,
  onPress,
  isFocused,
  focusedColor,
  style,
  ...props
}: BaseTabPropsType & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.imageContainer,
        isFocused && {backgroundColor: focusedColor},
        style,
      ]}
      onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(BaseTab);
