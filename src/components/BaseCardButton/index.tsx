import React, {memo} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {AppColors} from '../../utils';
import {styles} from './styles';

interface BaseCardButtonProps {
  icon?: string;
  label?: string;
  onPress: () => void;
}

const BaseCardButton = ({
  icon,
  label,
  onPress,
}: BaseCardButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        {icon && <Icon name={icon} size={25} color={AppColors.ICON_COLOR} />}
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(BaseCardButton);
