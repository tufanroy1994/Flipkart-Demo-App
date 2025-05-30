import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {BaseCardButton} from '../../components';
import {styles} from './styles';

const ProfileScreen = () => {
  return (
    <View style={[styles.flexContainer]}>
      <View style={[styles.headerContainer]}>
        <Text style={[styles.name]}>Tufan Roy</Text>
        <TouchableOpacity>
          <Text style={[styles.text1]}>
            Explore <Icon name="staro" size={20} />
            <Text style={[styles.text2]}>Plus Silver</Text>
            <Icon name="right" size={17} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container]}>
        <BaseCardButton
          icon="inbox"
          label="Orders"
          onPress={() => Alert.alert('ok')}
        />
        <BaseCardButton icon="hearto" label="Wishlist" onPress={() => ''} />
        <BaseCardButton icon="gift" label="Coupons" onPress={() => ''} />
        <BaseCardButton
          icon="customerservice"
          label="Help Center"
          onPress={() => ''}
        />
      </View>
      <View style={[styles.border]}></View>
    </View>
  );
};

export default ProfileScreen;
