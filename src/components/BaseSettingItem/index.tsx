import React, {memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';

interface BaseSettingItemProps {
  leftIcon?: string;
  title?: string;
  onPress?: () => void;
}

const BaseSettingItem = ({
  leftIcon,
  title,
  onPress,
}: BaseSettingItemProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      {leftIcon && <Icon name={leftIcon} size={25} style={[styles.icon]} />}
      <Text style={styles.title}>{title}</Text>
      <Icon name="right" size={15} color="#999" style={styles.chevron} />
    </TouchableOpacity>
  );
};

export default memo(BaseSettingItem);
