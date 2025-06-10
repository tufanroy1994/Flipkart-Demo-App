import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import {useAppNavigation} from '../../hooks';
import {styles} from './styles';

const GroceryOrderScreen = () => {
  const navigation = useAppNavigation('GroceryOrderScreen');

  return (
    <View style={[styles.contentContainer]}>
      <Icon name="shopping-basket" size={120} style={[styles.icon]} />
      <Text style={[styles.text]}>Your basket is empty!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('GroceryScreen')}>
        <View style={[styles.buttonContainer]}>
          <Text style={[styles.buttonText]}>Shop now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GroceryOrderScreen;
