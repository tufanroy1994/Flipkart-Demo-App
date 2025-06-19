import React, {memo} from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';

import {styles} from './styles';

interface BaseTab2PropsType {
  title?: string;
  isFocused?: boolean;
  focusedBackgroundColor?: string;
  focusedTextColor?: string;
  style?: ViewStyle;
  onPress?: () => void;
}

const BaseTab2 = ({
  title,
  isFocused,
  focusedBackgroundColor,
  focusedTextColor,
  style,
  onPress,
  ...props
}: BaseTab2PropsType & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        isFocused && {backgroundColor: focusedBackgroundColor},
        style,
      ]}
      onPress={onPress}>
      <Text style={[styles.text, isFocused && {color: focusedTextColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(BaseTab2);
