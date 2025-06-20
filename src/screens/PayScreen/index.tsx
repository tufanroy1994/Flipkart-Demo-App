import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BaseTab, BaseCardBanner} from '../../components';
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
        <View style={[styles.contentContainer]}>
          <Text style={[styles.headerText]}>Pay, Save & Earn</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.banner]}>
            <BaseCardBanner
              cardImage={AppImages.AXIS_CARD}
              title="Axis Bank"
              subtitle="Flipkart Debit Card"
              description="5% Cashback* on Flipkart"
              buttonLabel="Apply Now"
              backgroundColor="#FFF7E6"
              buttonColor="#A10064"
            />
            <BaseCardBanner
              cardImage={AppImages.BAJAJ_CARD}
              title="Avil No Cost EMI*"
              subtitle="On Latest Products"
              description="with Bajaj Finserv EMI Card"
              buttonLabel="Explore Now"
              backgroundColor="#E8F9FA"
              buttonColor="#0073A8"
            />
            <BaseCardBanner
              cardImage={AppImages.LOAN}
              title="Pre-approved Loan"
              subtitle="Upto Rs,10,00,000"
              description="Instant disbursal | 100% digital Process"
              buttonLabel="Get Cash Now"
              backgroundColor="#D9EAFD"
              buttonColor="#2874F0"
            />
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PayScreen;
