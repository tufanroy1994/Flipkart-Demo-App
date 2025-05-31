import React, {memo} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';

interface BaseItemProps {
  leftIcon?: string;
  title?: string;
  subTitle1?: string;
  subTitle2?: string;
  rightIcon?: string;
  onPress?: () => void;
}

const BaseItem = ({
  leftIcon,
  title,
  subTitle1,
  subTitle2,
  rightIcon,
  onPress,
}: BaseItemProps & TouchableOpacityProps) => {
  return (
    <View>
      <Text style={[styles.headingText]}>{title}</Text>
      <TouchableOpacity
        style={[styles.content]}
        onPress={onPress}
        activeOpacity={0.7}>
        {leftIcon && <Icon name={leftIcon} size={25} style={[styles.icon]} />}
        <Text style={styles.text3}>
          {subTitle1}
          {'\n'}
          <Text style={styles.text4}>{subTitle2}</Text>
        </Text>
        {rightIcon && (
          <Icon name={rightIcon} size={16} style={[styles.angle]} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(BaseItem);
