import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {useAppNavigation} from '../../hooks';
import {styles} from './styles';

const FlipkartOrderScreen = () => {
  const navigation = useAppNavigation('FlipkartOrderScreen');

  return (
    <View style={[styles.contentContainer]}>
      <Icon name="cart-plus" size={120} style={[styles.icon]} />
      <Text style={[styles.text]}>Your cart is empty!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <View style={[styles.buttonContainer]}>
          <Text style={[styles.buttonText]}>Shop now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FlipkartOrderScreen;
