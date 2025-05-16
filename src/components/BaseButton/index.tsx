import React, {memo} from 'react';
import {TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import BaseText from '../BaseText';
import {styles} from './styles';

interface BaseButtonPropsType {
  title: string;
  titleStyle?: TextStyle;
}

const BaseButtton = ({
  title,
  titleStyle,
  ...props
}: BaseButtonPropsType & TouchableOpacityProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
      <BaseText style={[styles.title, titleStyle]}>{title}</BaseText>
    </TouchableOpacity>
  );
};

export default memo(BaseButtton);
