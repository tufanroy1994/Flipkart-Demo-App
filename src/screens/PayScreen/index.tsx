import React, {useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BaseTab} from '../../components';
import {AppColors, AppImages} from '../../utils';
import {useAppNavigation} from '../../hooks';
import {styles} from './styles';

const PayScreen = () => {
  const navigation = useAppNavigation('HomeScreen');

  const [focusedTab, setFocusedTab] = useState<string>('Pay');

  return (
    <View style={[styles.flexContainer]}>
      <LinearGradient
        colors={['#AFDDFF', '#f7fbff', '#ffffff']}
        style={styles.linearGradient}>
        <View style={[styles.header]}>
          <BaseTab
            image={AppImages.LOGO}
            title="Flipkart"
            isFocused={focusedTab === 'Flipkart'}
            focusedColor={AppColors.YELLOW_BACKGROUND}
            onPress={() => {
              setFocusedTab('Flipkart');
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'BottomTabNavigation',
                    state: {
                      routes: [{name: 'HomeScreen'}],
                    },
                  },
                ],
              });
            }}
          />
          <BaseTab
            image={AppImages.GROCERY}
            title="Grocery"
            isFocused={focusedTab === 'Grocery'}
            focusedColor={AppColors.CHOCOLATE_BACKGROUND}
            onPress={() => {
              navigation.navigate('GroceryScreen');
              setFocusedTab('Grocery');
            }}
          />
          <BaseTab
            image={AppImages.TRAVEL}
            title="Travel"
            isFocused={focusedTab === 'Travel'}
            focusedColor={AppColors.DEEP_BLUE_BACKGROUND}
            onPress={() => {
              navigation.navigate('TravelScreen');
              setFocusedTab('Travel');
            }}
          />
          <BaseTab
            image={AppImages.PAY}
            title="Pay"
            isFocused={focusedTab === 'Pay'}
            focusedColor={AppColors.BLUE_BORDER}
            onPress={() => {
              navigation.navigate('PayScreen');
              setFocusedTab('Pay');
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default PayScreen;
