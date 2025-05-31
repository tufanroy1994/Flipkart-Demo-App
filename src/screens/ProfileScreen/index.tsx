import React from 'react';
import {ScrollView, Text, TouchableOpacity, Alert, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {BaseCardButton, BaseItem, BaseSettingItem} from '../../components';
import {useAppNavigation, useTranslation} from '../../hooks';
import {styles} from './styles';

const ProfileScreen = () => {
  const navigation = useAppNavigation('ProfileScreen');
  const {t} = useTranslation();

  return (
    <ScrollView style={[styles.flexContainer]}>
      <View style={[styles.headerContainerBackground]}>
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
            label={t('orders')}
            onPress={() => Alert.alert('ok')}
          />
          <BaseCardButton
            icon="hearto"
            label={t('wishlist')}
            onPress={() => ''}
          />
          <BaseCardButton icon="gift" label={t('coupons')} onPress={() => ''} />
          <BaseCardButton
            icon="customerservice"
            label={t('help_center')}
            onPress={() => ''}
          />
        </View>
      </View>
      <View style={[styles.border]}></View>
      <View style={[styles.contentContainer]}>
        <BaseItem
          title={t('finance_options')}
          leftIcon="pdffile1"
          subTitle1={t('flipkart_personal_loan')}
          subTitle2={t('pre_approved_loan_upto_10_lakhs')}
          rightIcon="right"
        />
      </View>
      <View style={[styles.border]}></View>
      <View style={[styles.contentContainer]}>
        <BaseItem
          title="Credit Score"
          leftIcon="copy1"
          subTitle1="Free credit score check"
          subTitle2="Get detailed credit report instantly."
          rightIcon="right"
        />
      </View>
      <View style={[styles.border]}></View>
      <View style={[styles.contentContainer]}>
        <BaseItem
          title="Notifications"
          leftIcon="bells"
          subTitle1="Tap for latest updates and offers"
          rightIcon="right"
        />
      </View>
      <View style={[styles.border]}></View>
      <View style={[styles.contentContainer]}>
        <Text style={[styles.headingText]}>{t('account_setting')}</Text>
        <BaseSettingItem leftIcon="star" title={t('flipkart_plus')} />
        <BaseSettingItem leftIcon="user" title={t('edit_profile')} />
        <BaseSettingItem leftIcon="wallet" title={t('saved_cards')} />
        <BaseSettingItem leftIcon="enviromento" title={t('saved_addresses')} />
        <BaseSettingItem
          leftIcon="zhihu"
          title={t('select_language')}
          onPress={() => navigation.navigate('LanguageScreen')}
        />
        <BaseSettingItem leftIcon="bells" title={t('notification_settings')} />
        <BaseSettingItem leftIcon="lock1" title={t('privacy_center')} />
      </View>
      <View style={[styles.border]}></View>
      <View style={[styles.contentContainer]}>
        <Text style={[styles.headingText]}>{t('my_activity')}</Text>
        <BaseSettingItem leftIcon="form" title={t('reviews')} />
        <BaseSettingItem leftIcon="switcher" title={t('questions_answers')} />
      </View>
      <View style={[styles.border]}></View>
      <View style={[styles.contentContainer]}>
        <Text style={[styles.headingText]}>{t('earn_with_flipkart')}</Text>
        <BaseSettingItem leftIcon="isv" title={t('sell_on_flipkart')} />
      </View>
      <View style={[styles.border]}></View>
      <View style={[styles.contentContainer]}>
        <Text style={[styles.headingText]}>{t('feedback_information')}</Text>
        <BaseSettingItem
          leftIcon="copy1"
          title={t('terms_policies_licenses')}
        />
        <BaseSettingItem leftIcon="questioncircleo" title={t('browse_faqs')} />
      </View>
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity>
          <Text style={[styles.buttonText]}>{t('log_out')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
