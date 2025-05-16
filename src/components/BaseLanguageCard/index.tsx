import React, {memo} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  TouchableOpacityProps,
} from 'react-native';

import {styles} from './styles';

interface BaseLanguageCardPropsType {
  name?: string;
  label?: string;
  icon?: any;
  selectedIcon?: any; // colored icon for selected state (optional)
  isSelected?: boolean;
  onPress?: () => void;
}

const BaseLanguageCard = ({
  name,
  label,
  icon,
  selectedIcon,
  isSelected,
  onPress,
}: BaseLanguageCardPropsType & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      onPress={onPress}>
      <View style={[styles.radioCircle]}>
        {isSelected && <View style={styles.selectedRb} />}
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.languageName,
            isSelected && styles.languageNameSelected,
          ]}>
          {name}
        </Text>
        <Text style={styles.languageLabel}>{label}</Text>
      </View>
      <Image
        source={isSelected && selectedIcon ? selectedIcon : icon} // dynamic icon
        style={[
          styles.languageIcon,
          isSelected && styles.languageIconSelected, // optional tint effect
        ]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default memo(BaseLanguageCard);
