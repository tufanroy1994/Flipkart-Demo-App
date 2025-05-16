import React, {memo} from 'react';
import {Text, TextProps} from 'react-native';

import {styles} from './styles';

const BaseText = (props: TextProps) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props?.children}
    </Text>
  );
};

export default memo(BaseText);
