import React, {memo} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

import {styles} from './styles';

const BaseDropdown = ({...props}: DropdownProps<any>) => {
  return (
    <View>
      <Dropdown
        {...props}
        style={styles.dropdownContainer}
        itemTextStyle={styles.itemText}
        selectedTextStyle={styles.selectedText}
      />
    </View>
  );
};

export default memo(BaseDropdown);
